import { useState, useEffect, useRef } from 'react'
import { Loader2, Heart, Share2, Repeat2 } from 'lucide-react'
import './index.css'

interface GeneratedImage {
  url: string
  prompt: string
  likes?: number
}

interface TrendingScene {
  prompt: string
  count: number
}

const TRENDING_SCENES: TrendingScene[] = [
  { prompt: "A woman sits alone in a neon-lit laundromat at 3am, watching her clothes spin", count: 234 },
  { prompt: "Two estranged brothers meet at their father's funeral in a small coastal town", count: 189 },
  { prompt: "The last day of summer at a dying American mall", count: 156 },
  { prompt: "A teenager discovers an old VHS tape in their grandmother's attic", count: 143 },
  { prompt: "Rain falls on a forgotten motel off Route 66", count: 98 },
]

function App() {
  const [prompt, setPrompt] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [images, setImages] = useState<GeneratedImage[]>([])
  const [error, setError] = useState<string | null>(null)
  const [showTrending, setShowTrending] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const button = buttonRef.current
    if (!button) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      button.style.setProperty('--mouse-x', `${x}px`)
      button.style.setProperty('--mouse-y', `${y}px`)
      button.style.setProperty('--glow-opacity', '1')
    }

    const handleMouseLeave = () => {
      button.style.setProperty('--glow-opacity', '0')
    }

    button.addEventListener('mousemove', handleMouseMove)
    button.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      button.removeEventListener('mousemove', handleMouseMove)
      button.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  const generateMoodBoard = async (customPrompt?: string) => {
    const scenePrompt = customPrompt || prompt
    if (!scenePrompt.trim()) return

    setIsGenerating(true)
    setError(null)
    setShowTrending(false)

    try {
      const response = await fetch('https://fal.run/fal-ai/flux/schnell', {
        method: 'POST',
        headers: {
          'Authorization': `Key ${import.meta.env.VITE_FAL_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: `Cinematic film still, A24 movie aesthetic, ${scenePrompt}. Moody lighting, 35mm film grain, muted colors, contemplative atmosphere, indie film look, natural lighting, shallow depth of field`,
          image_size: 'landscape_16_9',
          num_images: 4,
          enable_safety_checker: true,
        }),
      })

      if (!response.ok) throw new Error('Failed to generate images')

      const data = await response.json()
      const newImages = data.images.map((img: { url: string }) => ({
        url: img.url,
        prompt: scenePrompt,
        likes: Math.floor(Math.random() * 50)
      }))

      setImages(newImages)
      setPrompt(scenePrompt)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setIsGenerating(false)
    }
  }

  const handleRemix = (scenePrompt: string) => {
    setPrompt(scenePrompt)
    generateMoodBoard(scenePrompt)
  }

  const handleSave = (image: GeneratedImage) => {
    const saved = JSON.parse(localStorage.getItem('cinebox-saved') || '[]')
    saved.push(image)
    localStorage.setItem('cinebox-saved', JSON.stringify(saved))
  }

  const handleShare = async (image: GeneratedImage) => {
    if (navigator.share) {
      await navigator.share({
        title: 'CineBox Scene',
        text: image.prompt,
        url: image.url,
      })
    } else {
      navigator.clipboard.writeText(image.url)
    }
  }

  return (
    <div className="min-h-screen bg-black">
      {/* A24 style header - dark, minimal */}
      <header className="border-b border-[#1a1a1a] bg-black backdrop-blur">
        <div className="max-w-[1400px] mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-[13px] font-light tracking-[0.2em] text-white uppercase">
              Renaise
            </h1>
            <a
              href="https://renaise.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-light tracking-[0.15em] text-[#666666] hover:text-white transition-colors uppercase"
            >
              renaise.com
            </a>
          </div>
        </div>
      </header>

      <main className="progressive-blur">
        {!showTrending ? (
          <>
            {/* Hero - Monologue-inspired dramatic spacing */}
            <div className="min-h-[80vh] flex items-center justify-center px-8 py-40">
              <div className="max-w-[900px] mx-auto text-center">
                <h2 className="text-[68px] md:text-[96px] leading-[0.95] font-light text-white mb-12 tracking-[-0.03em]">
                  Cinematic moments as art
                </h2>
                <p className="text-[17px] md:text-[19px] leading-[1.7] text-[#999999] max-w-[600px] mx-auto font-light tracking-[0.01em]">
                  A curated archive of film scenes. Discover, collect, and display iconic moments from cinema's finest.
                </p>
              </div>
            </div>

            {/* Input - Monologue generous spacing */}
            <div className="max-w-[1200px] mx-auto px-8 mb-60">
              <div className="max-w-[720px] mx-auto">
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Describe a scene..."
                  className="w-full h-[160px] bg-[#0a0a0a] border border-[#1a1a1a] rounded-sm px-6 py-5 text-[16px] font-light text-white placeholder-[#555555] focus:outline-none focus:border-[#333333] resize-none transition-all mb-6 backdrop-blur"
                  disabled={isGenerating}
                />

                <button
                  ref={buttonRef}
                  onClick={() => generateMoodBoard()}
                  disabled={isGenerating || !prompt.trim()}
                  className="w-full flashlight-button px-8 py-4 bg-white text-black text-[11px] font-medium uppercase tracking-[0.15em] rounded-sm hover:bg-[#e0e0e0] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  {isGenerating ? (
                    <span className="flex items-center justify-center gap-3">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Generating
                    </span>
                  ) : (
                    'Generate Mood Board'
                  )}
                </button>
              </div>
            </div>

            {error && (
              <div className="max-w-[1400px] mx-auto px-8 mb-20">
                <div className="max-w-[800px] mx-auto p-5 bg-red-900/20 border border-red-800/50 rounded-sm text-red-400 text-[14px] backdrop-blur">
                  {error}
                </div>
              </div>
            )}

            {/* Images - Monologue cinematic grid */}
            {images.length > 0 && (
              <div className="max-w-[1200px] mx-auto px-8 section-blur mb-60">
                <div className="image-grid mb-32">
                  {images.map((image, i) => (
                    <div
                      key={i}
                      className="image-frame aspect-[16/10] rounded-sm group relative overflow-hidden progressive-blur"
                      style={{ animationDelay: `${i * 100}ms` }}
                    >
                      <img
                        src={image.url}
                        alt={`Scene ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                        <div className="absolute bottom-6 left-6 right-6">
                          <div className="flex items-center justify-between backdrop-blur-sm bg-black/40 rounded-sm px-4 py-3">
                            <div className="flex items-center gap-4">
                              <button
                                onClick={() => handleSave(image)}
                                className="flex items-center gap-2 text-white/90 hover:text-white text-[11px] font-medium uppercase tracking-wider transition-colors"
                              >
                                <Heart className="w-4 h-4" />
                                Save
                              </button>
                              <span className="text-white/60 text-[11px]">
                                {image.likes}
                              </span>
                            </div>
                            <button
                              onClick={() => handleShare(image)}
                              className="text-white/90 hover:text-white transition-colors"
                            >
                              <Share2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center py-24 border-t border-[#1a1a1a]">
                  <p className="text-[#666666] text-[16px] font-light mb-12 max-w-[700px] mx-auto italic leading-relaxed">
                    "{images[0]?.prompt}"
                  </p>
                  <button
                    onClick={() => handleRemix(images[0]?.prompt)}
                    className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-white hover:text-[#999999] transition-colors"
                  >
                    <Repeat2 className="w-4 h-4" />
                    Remix this scene
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          /* Archive - Monologue dramatic spacing */
          <div className="max-w-[1200px] mx-auto px-8 py-40">
            <h2 className="text-[68px] md:text-[96px] leading-[0.95] font-light text-white mb-40 tracking-[-0.03em] text-center">
              Archive
            </h2>

            <div className="max-w-[900px] mx-auto space-y-20">
              {TRENDING_SCENES.map((scene, i) => (
                <div
                  key={i}
                  className="pb-12 border-b border-[#1a1a1a] last:border-0 cursor-pointer group progressive-blur"
                  onClick={() => handleRemix(scene.prompt)}
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="flex justify-between gap-12 mb-4">
                    <p className="text-[20px] leading-relaxed text-white group-hover:text-[#999999] transition-colors flex-1">
                      {scene.prompt}
                    </p>
                    <button className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-[#666666] group-hover:text-white transition-colors whitespace-nowrap">
                      <Repeat2 className="w-4 h-4" />
                      Remix
                    </button>
                  </div>
                  <p className="text-[12px] text-[#555555]">
                    {scene.count} variations
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      <footer className="border-t border-[#1a1a1a] py-20 mt-60">
        <div className="max-w-[1200px] mx-auto px-8 text-center">
          <p className="text-[11px] text-[#555555] font-light uppercase tracking-[0.25em]">
            Renaise
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
