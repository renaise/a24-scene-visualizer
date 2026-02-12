import { useState, useEffect, useRef } from 'react'
import { Loader2, Sparkles, Heart, Share2, Repeat2, TrendingUp } from 'lucide-react'
import './index.css'

interface GeneratedImage {
  url: string
  prompt: string
  likes?: number
}

interface TrendingScene {
  prompt: string
  count: number
  previewUrl?: string
}

// Trending scenes that create FOMO and social competition
const TRENDING_SCENES: TrendingScene[] = [
  { prompt: "A woman sits alone in a neon-lit laundromat at 3am, watching her clothes spin", count: 234 },
  { prompt: "Two estranged brothers meet at their father's funeral in a small coastal town", count: 189 },
  { prompt: "The last day of summer at a dying American mall", count: 156 },
  { prompt: "A teenager discovers an old VHS tape in their grandmother's attic", count: 143 },
  { prompt: "Rain falls on a forgotten motel off Route 66", count: 98 },
]

// Weekly challenge - creates urgency and participation
const WEEKLY_CHALLENGE = {
  prompt: "A stranger walks into a 24-hour diner at 4am",
  submissions: 67,
  endsIn: "2 days"
}

function App() {
  const [prompt, setPrompt] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [images, setImages] = useState<GeneratedImage[]>([])
  const [error, setError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<'create' | 'trending' | 'challenge'>('create')
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Flashlight effect
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
    setActiveTab('create')

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
        likes: Math.floor(Math.random() * 50) // Simulate social engagement
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
    // Save to localStorage for persistence
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
      alert('Link copied to clipboard!')
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <header className="glass-subtle sticky top-0 z-50">
        <div className="max-w-[960px] mx-auto px-12 py-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-9 h-9 bg-white/95 rounded flex items-center justify-center">
              <span className="text-black font-medium text-sm">C</span>
            </div>
            <span className="text-[rgba(255,255,255,0.35)] text-[11px] tracking-[0.1em] uppercase font-mono">
              CineBox
            </span>
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={() => setActiveTab('create')}
              className={`text-[11px] tracking-[0.1em] uppercase transition-colors ${
                activeTab === 'create' ? 'text-[rgba(255,255,255,0.88)]' : 'text-[rgba(255,255,255,0.35)]'
              }`}
            >
              Create
            </button>
            <button
              onClick={() => setActiveTab('trending')}
              className={`flex items-center gap-2 text-[11px] tracking-[0.1em] uppercase transition-colors ${
                activeTab === 'trending' ? 'text-[rgba(255,255,255,0.88)]' : 'text-[rgba(255,255,255,0.35)]'
              }`}
            >
              <TrendingUp className="w-4 h-4" />
              Trending
            </button>
            <button
              onClick={() => setActiveTab('challenge')}
              className={`flex items-center gap-2 text-[11px] tracking-[0.1em] uppercase transition-colors ${
                activeTab === 'challenge' ? 'text-[rgba(255,255,255,0.88)]' : 'text-[rgba(255,255,255,0.35)]'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              Challenge
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[960px] mx-auto px-12 py-24">
        {/* Create Tab */}
        {activeTab === 'create' && (
          <>
            {/* Hero */}
            <div className="text-center section-gap max-w-[640px] mx-auto">
              <h1 className="text-[48px] md:text-[48px] font-light tracking-tight mb-8 text-[rgba(255,255,255,0.88)] leading-[1.1]">
                Visualize Your Scene
              </h1>
              <p className="text-[rgba(255,255,255,0.55)] text-[15px] leading-relaxed tracking-wide">
                Transform a moment into a cinematic mood board. See how others remix the same scene.
              </p>
            </div>

            {/* Input Section */}
            <div className="glass-subtle p-8 rounded-2xl max-w-[720px] mx-auto mb-24">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe a scene..."
                className="w-full h-40 bg-transparent border border-[rgba(255,255,255,0.08)] rounded-lg px-5 py-4 text-[rgba(255,255,255,0.88)] text-[15px] placeholder-[rgba(255,255,255,0.35)] focus:outline-none focus:border-[rgba(255,255,255,0.15)] resize-none transition-colors"
                disabled={isGenerating}
              />

              <button
                ref={buttonRef}
                onClick={() => generateMoodBoard()}
                disabled={isGenerating || !prompt.trim()}
                className="flashlight-button w-full mt-6 py-4 rounded-xl bg-white/10 border border-[rgba(255,255,255,0.08)] text-[rgba(255,255,255,0.88)] text-[13px] uppercase tracking-wider hover:border-[rgba(255,255,255,0.15)] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {isGenerating ? (
                  <span className="flex items-center justify-center gap-3">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Generating
                  </span>
                ) : (
                  'Generate Mood Board'
                )}
              </button>
            </div>

            {/* Error State */}
            {error && (
              <div className="max-w-[720px] mx-auto mb-12 p-5 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-center text-[15px]">
                {error}
              </div>
            )}

            {/* Generated Images */}
            {images.length > 0 && (
              <div className="space-y-12">
                <div className="flex items-center justify-center">
                  <button
                    onClick={() => setImages([])}
                    className="text-[rgba(255,255,255,0.35)] hover:text-[rgba(255,255,255,0.88)] text-[13px] uppercase tracking-wider transition-colors"
                  >
                    Start Over
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {images.map((image, i) => (
                    <div
                      key={i}
                      className="aspect-video rounded-lg overflow-hidden bg-[rgba(255,255,255,0.03)] group relative"
                    >
                      <img
                        src={image.url}
                        alt={`Generated scene ${i + 1}`}
                        className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-90"
                      />
                      {/* Social actions on hover */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => handleSave(image)}
                              className="flex items-center gap-1 text-white/60 hover:text-white text-[11px] uppercase tracking-wider transition-colors"
                            >
                              <Heart className="w-4 h-4" />
                              Save
                            </button>
                            <span className="text-white/40 text-[11px]">{image.likes} likes</span>
                          </div>
                          <button
                            onClick={() => handleShare(image)}
                            className="flex items-center gap-1 text-white/60 hover:text-white text-[11px] uppercase tracking-wider transition-colors"
                          >
                            <Share2 className="w-4 h-4" />
                            Share
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center pt-12 border-t border-[rgba(255,255,255,0.08)]">
                  <p className="text-[rgba(255,255,255,0.35)] text-[13px] italic tracking-wide mb-4">
                    "{images[0]?.prompt}"
                  </p>
                  <button
                    onClick={() => handleRemix(images[0]?.prompt)}
                    className="flex items-center gap-2 mx-auto text-[rgba(255,255,255,0.55)] hover:text-[rgba(255,255,255,0.88)] text-[11px] uppercase tracking-wider transition-colors"
                  >
                    <Repeat2 className="w-4 h-4" />
                    Remix This Scene
                  </button>
                </div>
              </div>
            )}
          </>
        )}

        {/* Trending Tab - The addictive social feed */}
        {activeTab === 'trending' && (
          <div className="space-y-12">
            <div className="text-center max-w-[640px] mx-auto">
              <h2 className="text-[32px] font-light tracking-tight mb-4 text-[rgba(255,255,255,0.88)]">
                Trending Scenes
              </h2>
              <p className="text-[rgba(255,255,255,0.55)] text-[15px]">
                See how the community visualizes popular moments
              </p>
            </div>

            <div className="space-y-4">
              {TRENDING_SCENES.map((scene, i) => (
                <div
                  key={i}
                  className="glass-subtle p-6 rounded-xl hover:border-[rgba(255,255,255,0.15)] transition-colors cursor-pointer group"
                  onClick={() => handleRemix(scene.prompt)}
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1">
                      <p className="text-[rgba(255,255,255,0.88)] text-[15px] mb-2 leading-relaxed">
                        "{scene.prompt}"
                      </p>
                      <p className="text-[rgba(255,255,255,0.35)] text-[11px] uppercase tracking-wider">
                        {scene.count} variations created
                      </p>
                    </div>
                    <button className="flex items-center gap-2 text-[rgba(255,255,255,0.55)] group-hover:text-[rgba(255,255,255,0.88)] text-[11px] uppercase tracking-wider transition-colors">
                      <Repeat2 className="w-4 h-4" />
                      Remix
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Challenge Tab - Creates urgency and participation */}
        {activeTab === 'challenge' && (
          <div className="space-y-12">
            <div className="text-center max-w-[640px] mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-[rgba(255,255,255,0.55)]" />
                <span className="text-[rgba(255,255,255,0.55)] text-[11px] uppercase tracking-wider">
                  Weekly Challenge
                </span>
              </div>
              <h2 className="text-[32px] font-light tracking-tight mb-4 text-[rgba(255,255,255,0.88)]">
                {WEEKLY_CHALLENGE.prompt}
              </h2>
              <p className="text-[rgba(255,255,255,0.55)] text-[15px] mb-8">
                {WEEKLY_CHALLENGE.submissions} submissions • Ends in {WEEKLY_CHALLENGE.endsIn}
              </p>
              <button
                onClick={() => {
                  setPrompt(WEEKLY_CHALLENGE.prompt)
                  setActiveTab('create')
                }}
                className="px-8 py-4 bg-white/10 border border-[rgba(255,255,255,0.15)] rounded-xl text-[rgba(255,255,255,0.88)] text-[13px] uppercase tracking-wider hover:bg-white/15 transition-colors"
              >
                Submit Your Vision
              </button>
            </div>

            <div className="text-center pt-12 border-t border-[rgba(255,255,255,0.08)]">
              <p className="text-[rgba(255,255,255,0.35)] text-[13px] tracking-wide">
                New challenge every Monday. Best submissions featured.
              </p>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-[rgba(255,255,255,0.08)] mt-24">
        <div className="max-w-[960px] mx-auto px-12 py-8 text-center">
          <p className="text-[rgba(255,255,255,0.35)] text-[11px] tracking-[0.1em] uppercase">
            CineBox by Renaise Kim • A24 Labs
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
