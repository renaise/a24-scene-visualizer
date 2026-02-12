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
    <div className="min-h-screen">
      {/* Clean header - renaise.github.io style */}
      <header className="border-b border-[#e0e0e0] bg-white">
        <div className="max-w-[1200px] mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-[14px] font-semibold tracking-tight text-black">
              CineBox
            </h1>
            <nav className="flex gap-6">
              <button
                onClick={() => setShowTrending(false)}
                className={`text-[13px] font-medium transition-colors ${
                  !showTrending ? 'text-black' : 'text-[#666666]'
                }`}
              >
                Create
              </button>
              <button
                onClick={() => setShowTrending(true)}
                className={`text-[13px] font-medium transition-colors ${
                  showTrending ? 'text-black' : 'text-[#666666]'
                }`}
              >
                Trending
              </button>
            </nav>
          </div>
        </div>
      </header>

      <main className="py-16">
        {!showTrending ? (
          <>
            {/* Hero - clean, high contrast */}
            <div className="max-w-[1200px] mx-auto px-8 mb-20">
              <h2 className="text-[56px] leading-[1.1] font-semibold text-black mb-6 max-w-[800px] tracking-tight">
                Visualize your scene
              </h2>
              <p className="text-[16px] leading-relaxed text-[#666666] max-w-[500px]">
                Transform a cinematic moment into a mood board. See how others interpret the same scene.
              </p>
            </div>

            {/* Input - clean */}
            <div className="max-w-[1200px] mx-auto px-8 mb-24">
              <div className="max-w-[700px]">
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Describe a scene..."
                  className="w-full h-[140px] bg-white border border-[#e0e0e0] rounded-md px-5 py-4 text-[15px] text-black placeholder-[#999999] focus:outline-none focus:border-black resize-none transition-colors mb-4"
                  disabled={isGenerating}
                />

                <button
                  ref={buttonRef}
                  onClick={() => generateMoodBoard()}
                  disabled={isGenerating || !prompt.trim()}
                  className="flashlight-button px-7 py-3.5 bg-black text-white text-[13px] font-semibold tracking-wide rounded-md hover:bg-[#333333] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  {isGenerating ? (
                    <span className="flex items-center gap-2.5">
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
              <div className="max-w-[1200px] mx-auto px-8 mb-16">
                <div className="max-w-[700px] p-4 bg-red-50 border border-red-200 rounded-md text-red-700 text-[14px]">
                  {error}
                </div>
              </div>
            )}

            {/* Images - Clean Grid (renaise.github.io style) */}
            {images.length > 0 && (
              <div className="max-w-[1200px] mx-auto px-8">
                <div className="image-grid mb-16">
                  {images.map((image, i) => (
                    <div
                      key={i}
                      className="image-frame aspect-video rounded-md group relative overflow-hidden"
                    >
                      <img
                        src={image.url}
                        alt={`Scene ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <button
                                onClick={() => handleSave(image)}
                                className="flex items-center gap-1.5 text-white/90 hover:text-white text-[11px] font-medium tracking-wide transition-colors"
                              >
                                <Heart className="w-3.5 h-3.5" />
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
                              <Share2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center py-12 border-t border-[#f0f0f0]">
                  <p className="text-[#666666] text-[14px] mb-6 max-w-[500px] mx-auto">
                    {images[0]?.prompt}
                  </p>
                  <button
                    onClick={() => handleRemix(images[0]?.prompt)}
                    className="inline-flex items-center gap-2 text-[13px] font-medium text-black hover:text-[#666666] transition-colors"
                  >
                    <Repeat2 className="w-4 h-4" />
                    Remix this scene
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          /* Trending - Clean list */
          <div className="max-w-[1200px] mx-auto px-8">
            <h2 className="text-[56px] leading-[1.1] font-semibold text-black mb-16 tracking-tight">
              Trending Scenes
            </h2>

            <div className="max-w-[800px] space-y-8">
              {TRENDING_SCENES.map((scene, i) => (
                <div
                  key={i}
                  className="pb-8 border-b border-[#f0f0f0] last:border-0 cursor-pointer group"
                  onClick={() => handleRemix(scene.prompt)}
                >
                  <div className="flex justify-between gap-8 mb-3">
                    <p className="text-[18px] leading-relaxed text-black group-hover:text-[#666666] transition-colors flex-1">
                      {scene.prompt}
                    </p>
                    <button className="flex items-center gap-2 text-[12px] font-medium text-[#666666] group-hover:text-black transition-colors whitespace-nowrap">
                      <Repeat2 className="w-3.5 h-3.5" />
                      Remix
                    </button>
                  </div>
                  <p className="text-[12px] text-[#999999]">
                    {scene.count} variations
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      <footer className="border-t border-[#e0e0e0] py-8 mt-24">
        <div className="max-w-[1200px] mx-auto px-8">
          <p className="text-[11px] text-[#999999] font-medium">
            CineBox — Renaise Kim
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
