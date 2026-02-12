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
      {/* Mouthwash-style header - minimal, editorial */}
      <header className="border-b border-[#e5e5e5]">
        <div className="max-w-[1600px] mx-auto px-12 py-8">
          <div className="flex items-baseline justify-between">
            <div>
              <h1 className="text-[15px] font-normal tracking-tight text-[#1a1a1a] mb-1">
                CineBox
              </h1>
              <p className="text-[13px] text-[#737373]">
                Collaborative scene visualization
              </p>
            </div>
            <nav className="flex gap-8">
              <button
                onClick={() => setShowTrending(false)}
                className={`text-[13px] tracking-wide transition-colors ${
                  !showTrending ? 'text-[#1a1a1a]' : 'text-[#737373]'
                }`}
              >
                Create
              </button>
              <button
                onClick={() => setShowTrending(true)}
                className={`text-[13px] tracking-wide transition-colors ${
                  showTrending ? 'text-[#1a1a1a]' : 'text-[#737373]'
                }`}
              >
                Trending
              </button>
            </nav>
          </div>
        </div>
      </header>

      <main className="py-20">
        {!showTrending ? (
          <>
            {/* Hero - editorial spacing */}
            <div className="max-w-[1200px] mx-auto px-12 mb-24">
              <h2 className="text-[64px] leading-[1.05] font-light text-[#1a1a1a] mb-8 max-w-[900px]">
                Visualize your scene
              </h2>
              <p className="text-[18px] leading-relaxed text-[#737373] max-w-[600px]">
                Transform a cinematic moment into a mood board. See how others interpret the same scene.
              </p>
            </div>

            {/* Input - tactile */}
            <div className="max-w-[1200px] mx-auto px-12 mb-32">
              <div className="max-w-[800px]">
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Describe a scene..."
                  className="w-full h-[160px] bg-white border border-[#e5e5e5] rounded-lg px-6 py-5 text-[16px] text-[#1a1a1a] placeholder-[#a3a3a3] focus:outline-none focus:border-[#737373] resize-none transition-colors mb-4"
                  disabled={isGenerating}
                />

                <button
                  ref={buttonRef}
                  onClick={() => generateMoodBoard()}
                  disabled={isGenerating || !prompt.trim()}
                  className="flashlight-button px-8 py-4 bg-[#1a1a1a] text-white text-[14px] font-medium tracking-wide rounded-lg hover:bg-[#2a2a2a] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  {isGenerating ? (
                    <span className="flex items-center gap-3">
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
              <div className="max-w-[1200px] mx-auto px-12 mb-20">
                <div className="max-w-[800px] p-5 bg-red-50 border border-red-200 rounded-lg text-red-700 text-[15px]">
                  {error}
                </div>
              </div>
            )}

            {/* Images - Asymmetric Masonry Grid (Mouthwash style) */}
            {images.length > 0 && (
              <div className="max-w-[1600px] mx-auto px-12">
                <div className="masonry-grid mb-20">
                  {images.map((image, i) => (
                    <div
                      key={i}
                      className={`masonry-item-${i + 1} image-frame aspect-[4/3] rounded-lg group relative`}
                    >
                      <img
                        src={image.url}
                        alt={`Scene ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="absolute bottom-6 left-6 right-6">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <button
                                onClick={() => handleSave(image)}
                                className="flex items-center gap-2 text-white/90 hover:text-white text-[12px] tracking-wide transition-colors"
                              >
                                <Heart className="w-4 h-4" />
                                Save
                              </button>
                              <span className="text-white/60 text-[12px]">
                                {image.likes} likes
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

                <div className="text-center py-16 border-t border-[#e5e5e5]">
                  <p className="text-[#737373] text-[15px] italic mb-8 max-w-[600px] mx-auto">
                    {images[0]?.prompt}
                  </p>
                  <button
                    onClick={() => handleRemix(images[0]?.prompt)}
                    className="editorial-link inline-flex items-center gap-2 text-[14px] text-[#1a1a1a] tracking-wide"
                  >
                    <Repeat2 className="w-4 h-4" />
                    Remix this scene
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          /* Trending - Editorial list */
          <div className="max-w-[1200px] mx-auto px-12">
            <h2 className="text-[64px] leading-[1.05] font-light text-[#1a1a1a] mb-20">
              Trending Scenes
            </h2>

            <div className="max-w-[900px] space-y-12">
              {TRENDING_SCENES.map((scene, i) => (
                <div
                  key={i}
                  className="pb-12 border-b border-[#e5e5e5] last:border-0 cursor-pointer group"
                  onClick={() => handleRemix(scene.prompt)}
                >
                  <div className="flex justify-between gap-12 mb-4">
                    <p className="text-[22px] leading-relaxed text-[#1a1a1a] group-hover:text-[#737373] transition-colors flex-1">
                      {scene.prompt}
                    </p>
                    <button className="editorial-link flex items-center gap-2 text-[13px] text-[#737373] group-hover:text-[#1a1a1a] transition-colors whitespace-nowrap">
                      <Repeat2 className="w-4 h-4" />
                      Remix
                    </button>
                  </div>
                  <p className="text-[13px] text-[#a3a3a3] tracking-wide">
                    {scene.count} variations created
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      <footer className="border-t border-[#e5e5e5] py-12 mt-32">
        <div className="max-w-[1600px] mx-auto px-12">
          <p className="text-[12px] text-[#a3a3a3] tracking-wide">
            CineBox — Renaise Kim
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
