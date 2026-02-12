import { useState, useEffect, useRef } from 'react'
import { Loader2, Film } from 'lucide-react'
import './index.css'

interface GeneratedImage {
  url: string
  prompt: string
}

function App() {
  const [prompt, setPrompt] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [images, setImages] = useState<GeneratedImage[]>([])
  const [error, setError] = useState<string | null>(null)
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

  const generateMoodBoard = async () => {
    if (!prompt.trim()) return

    setIsGenerating(true)
    setError(null)

    try {
      const response = await fetch('https://fal.run/fal-ai/flux/schnell', {
        method: 'POST',
        headers: {
          'Authorization': `Key ${import.meta.env.VITE_FAL_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: `Cinematic film still, A24 movie aesthetic, ${prompt}. Moody lighting, 35mm film grain, muted colors, contemplative atmosphere, indie film look, natural lighting, shallow depth of field`,
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
        prompt: prompt,
      }))

      setImages(newImages)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <header className="glass-subtle sticky top-0 z-50">
        <div className="max-w-[960px] mx-auto px-12 py-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-9 h-9 bg-white/95 rounded flex items-center justify-center">
              <span className="text-black font-medium text-sm">A</span>
            </div>
            <span className="text-[rgba(255,255,255,0.35)] text-[11px] tracking-[0.1em] uppercase font-mono">
              Labs
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Film className="w-4 h-4 text-[rgba(255,255,255,0.35)]" />
            <span className="text-[rgba(255,255,255,0.35)] text-[11px] tracking-[0.1em] uppercase">
              Scene Visualizer
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[960px] mx-auto px-12 py-24">
        {/* Hero */}
        <div className="text-center section-gap max-w-[640px] mx-auto">
          <h1 className="text-[48px] md:text-[48px] font-light tracking-tight mb-8 text-[rgba(255,255,255,0.88)] leading-[1.1]">
            Visualize Your Scene
          </h1>
          <p className="text-[rgba(255,255,255,0.55)] text-[15px] leading-relaxed tracking-wide">
            Transform a moment into a cinematic mood board.
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
            onClick={generateMoodBoard}
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
                  className="aspect-video rounded-lg overflow-hidden bg-[rgba(255,255,255,0.03)] group cursor-pointer"
                >
                  <img
                    src={image.url}
                    alt={`Generated scene ${i + 1}`}
                    className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-90"
                  />
                </div>
              ))}
            </div>

            <div className="text-center pt-12 border-t border-[rgba(255,255,255,0.08)]">
              <p className="text-[rgba(255,255,255,0.35)] text-[13px] italic tracking-wide">
                "{images[0]?.prompt}"
              </p>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-[rgba(255,255,255,0.08)] mt-24">
        <div className="max-w-[960px] mx-auto px-12 py-8 text-center">
          <p className="text-[rgba(255,255,255,0.35)] text-[11px] tracking-[0.1em] uppercase">
            Built for A24 Labs by Renaise Kim
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
