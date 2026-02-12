import { useState, useEffect, useRef } from 'react'
import { Loader2, Heart, Share2, Repeat2, TrendingUp } from 'lucide-react'
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

      if (!response.ok) {
        throw new Error('Failed to generate images')
      }

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
    alert('Saved to your collection!')
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
      alert('Link copied!')
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Minimal Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
        <div className="max-w-[1400px] mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-[17px] font-medium tracking-tight text-black">
              CineBox
            </h1>
            <button
              onClick={() => setShowTrending(!showTrending)}
              className="flex items-center gap-2 text-[15px] text-black/50 hover:text-black transition-colors"
            >
              <TrendingUp className="w-4 h-4" />
              {showTrending ? 'Create' : 'Trending'}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-32 pb-24">
        {!showTrending ? (
          <>
            {/* Hero - Clean and Spacious */}
            <div className="max-w-[800px] mx-auto px-8 mb-20">
              <h2 className="text-[56px] md:text-[72px] font-light tracking-tight text-black mb-6 leading-[0.95]">
                Visualize your scene
              </h2>
              <p className="text-[19px] text-black/60 leading-relaxed max-w-[600px]">
                Transform a moment into a cinematic mood board.
              </p>
            </div>

            {/* Input - Minimal */}
            <div className="max-w-[800px] mx-auto px-8 mb-32">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe a scene..."
                className="w-full h-[140px] bg-white border border-black/10 rounded-2xl px-6 py-5 text-[17px] text-black placeholder-black/30 focus:outline-none focus:border-black/30 resize-none transition-colors mb-4"
                disabled={isGenerating}
              />

              <button
                ref={buttonRef}
                onClick={() => generateMoodBoard()}
                disabled={isGenerating || !prompt.trim()}
                className="flashlight-button w-full py-5 rounded-2xl bg-black text-white text-[15px] font-medium hover:bg-black/90 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                {isGenerating ? (
                  <span className="flex items-center justify-center gap-3">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Generating
                  </span>
                ) : (
                  'Generate'
                )}
              </button>
            </div>

            {/* Error */}
            {error && (
              <div className="max-w-[800px] mx-auto px-8 mb-16">
                <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-[15px]">
                  {error}
                </div>
              </div>
            )}

            {/* Images - Large Grid */}
            {images.length > 0 && (
              <div className="max-w-[1400px] mx-auto px-8">
                <div className="grid grid-cols-2 gap-6 mb-12">
                  {images.map((image, i) => (
                    <div
                      key={i}
                      className="aspect-[16/10] rounded-2xl overflow-hidden group relative bg-black/5"
                    >
                      <img
                        src={image.url}
                        alt={`Scene ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all">
                        <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <button
                                onClick={() => handleSave(image)}
                                className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur rounded-full text-[13px] font-medium text-black hover:bg-white transition-colors"
                              >
                                <Heart className="w-4 h-4" />
                                Save
                              </button>
                              <span className="text-white/80 text-[13px] font-medium">
                                {image.likes} likes
                              </span>
                            </div>
                            <button
                              onClick={() => handleShare(image)}
                              className="p-2 bg-white/90 backdrop-blur rounded-full hover:bg-white transition-colors"
                            >
                              <Share2 className="w-4 h-4 text-black" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center py-12 border-t border-black/5">
                  <p className="text-black/40 text-[15px] mb-6 italic">
                    "{images[0]?.prompt}"
                  </p>
                  <button
                    onClick={() => handleRemix(images[0]?.prompt)}
                    className="inline-flex items-center gap-2 text-[15px] text-black/50 hover:text-black transition-colors"
                  >
                    <Repeat2 className="w-4 h-4" />
                    Remix this scene
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          /* Trending - Clean List */
          <div className="max-w-[800px] mx-auto px-8">
            <h2 className="text-[56px] md:text-[72px] font-light tracking-tight text-black mb-16 leading-[0.95]">
              Trending
            </h2>

            <div className="space-y-6">
              {TRENDING_SCENES.map((scene, i) => (
                <div
                  key={i}
                  className="py-8 border-b border-black/5 cursor-pointer group"
                  onClick={() => handleRemix(scene.prompt)}
                >
                  <div className="flex items-start justify-between gap-8">
                    <div className="flex-1">
                      <p className="text-[19px] text-black mb-3 leading-relaxed group-hover:text-black/60 transition-colors">
                        {scene.prompt}
                      </p>
                      <p className="text-[13px] text-black/40 font-medium">
                        {scene.count} variations
                      </p>
                    </div>
                    <button className="flex items-center gap-2 text-[15px] text-black/30 group-hover:text-black transition-colors mt-1">
                      <Repeat2 className="w-4 h-4" />
                      Remix
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-black/5 py-8">
        <div className="max-w-[1400px] mx-auto px-8 text-center">
          <p className="text-[13px] text-black/30">
            CineBox by Renaise Kim
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
