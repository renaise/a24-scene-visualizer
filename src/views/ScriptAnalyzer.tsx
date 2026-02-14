import { useState } from 'react'
import { Link } from 'react-router-dom'

interface Scene {
  sceneNumber: number
  sceneHeading: string
  description: string
  matchedShots: {
    filmTitle: string
    director: string
    cinematographer: string
    imageUrl: string
    timestamp: string
    matchScore: number
  }[]
}

export function ScriptAnalyzer() {
  const [scriptText, setScriptText] = useState('')
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [scenes, setScenes] = useState<Scene[]>([])
  const [activeSceneIndex, setActiveSceneIndex] = useState<number | null>(null)

  const analyzeScript = async () => {
    if (!scriptText.trim()) return

    setIsAnalyzing(true)

    // Simulate AI scene segmentation (in production, call Anthropic API with SceneRAG)
    setTimeout(() => {
      const mockScenes: Scene[] = [
        {
          sceneNumber: 1,
          sceneHeading: "INT. DINER - NIGHT",
          description: "A lonely figure sits in a fluorescent-lit diner. Rain streaks the windows. The mood is melancholic, isolated.",
          matchedShots: [
            {
              filmTitle: "Moonlight",
              director: "Barry Jenkins",
              cinematographer: "James Laxton",
              imageUrl: "https://images.unsplash.com/photo-1514539079130-25950c84af65?w=800",
              timestamp: "00:23:45",
              matchScore: 94
            },
            {
              filmTitle: "In the Mood for Love",
              director: "Wong Kar-wai",
              cinematographer: "Christopher Doyle",
              imageUrl: "https://images.unsplash.com/photo-1533158326339-7f3cf2404354?w=800",
              timestamp: "00:45:12",
              matchScore: 87
            },
            {
              filmTitle: "Paterson",
              director: "Jim Jarmusch",
              cinematographer: "Frederick Elmes",
              imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800",
              timestamp: "00:12:33",
              matchScore: 82
            }
          ]
        },
        {
          sceneNumber: 2,
          sceneHeading: "EXT. CITY STREET - DAWN",
          description: "Empty streets at golden hour. Long shadows. The city is waking up. Atmosphere of possibility.",
          matchedShots: [
            {
              filmTitle: "Before Sunrise",
              director: "Richard Linklater",
              cinematographer: "Lee Daniel",
              imageUrl: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800",
              timestamp: "00:34:22",
              matchScore: 91
            },
            {
              filmTitle: "Lost in Translation",
              director: "Sofia Coppola",
              cinematographer: "Lance Acord",
              imageUrl: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800",
              timestamp: "00:18:56",
              matchScore: 85
            }
          ]
        },
        {
          sceneNumber: 3,
          sceneHeading: "INT. APARTMENT - MORNING",
          description: "Soft natural light through windows. Intimate, domestic. Character preparing coffee in silence.",
          matchedShots: [
            {
              filmTitle: "Frances Ha",
              director: "Noah Baumbach",
              cinematographer: "Sam Levy",
              imageUrl: "https://images.unsplash.com/photo-1493238792000-8113da705763?w=800",
              timestamp: "00:08:15",
              matchScore: 89
            },
            {
              filmTitle: "Her",
              director: "Spike Jonze",
              cinematographer: "Hoyte van Hoytema",
              imageUrl: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
              timestamp: "00:27:40",
              matchScore: 84
            }
          ]
        }
      ]

      setScenes(mockScenes)
      setActiveSceneIndex(0)
      setIsAnalyzing(false)
    }, 2000)
  }

  const exportAsPDF = () => {
    alert('PDF export coming soon - will include all scenes + references in lookbook format')
  }

  const exportAsSizzleReel = () => {
    alert('Sizzle reel export coming soon - will compile reference shots into 60-90s video')
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="border-b border-[#1a1a1a] sticky top-0 bg-black/80 backdrop-blur-xl z-50">
        <div className="max-w-[1400px] mx-auto px-8 py-6 flex items-center justify-between">
          <Link to="/" className="text-white text-[11px] uppercase tracking-[0.15em] hover:opacity-70 transition-opacity">
            ← Back
          </Link>
          <h1 className="text-[11px] uppercase tracking-[0.15em] text-white/50">Script Analyzer</h1>
          <div className="w-16" /> {/* Spacer for centering */}
        </div>
      </header>

      <div className="max-w-[1400px] mx-auto px-8 py-16">
        {/* Input Section */}
        {scenes.length === 0 && (
          <div className="max-w-[900px] mx-auto">
            <h2 className="text-[42px] font-light text-white mb-4 tracking-tight text-center">
              Analyze Your Script
            </h2>
            <p className="text-[15px] text-white/60 mb-12 text-center leading-relaxed">
              Paste your treatment, screenplay, or scene description. AI will segment it into scenes<br />
              and match each to reference shots from 300+ films.
            </p>

            <div className="glass-input p-8 rounded-lg mb-6">
              <textarea
                value={scriptText}
                onChange={(e) => setScriptText(e.target.value)}
                placeholder="INT. COFFEE SHOP - DAY&#10;&#10;A filmmaker sits alone, staring at a blank page. Rain outside. The barista brings a coffee. Eye contact - a brief moment of connection in the loneliness.&#10;&#10;EXT. CITY STREET - NIGHT&#10;&#10;Empty streets. Neon signs reflect in puddles. The filmmaker walks home, thinking about the story..."
                className="w-full h-[400px] bg-transparent border border-white/10 rounded-lg px-5 py-4 text-white text-[15px] placeholder-white/30 focus:outline-none focus:border-white/20 resize-none font-mono leading-relaxed"
              />
            </div>

            <button
              onClick={analyzeScript}
              disabled={!scriptText.trim() || isAnalyzing}
              className="w-full py-5 bg-white text-black text-[12px] font-medium uppercase tracking-[0.15em] hover:opacity-85 transition-all disabled:opacity-30 disabled:cursor-not-allowed rounded-lg"
            >
              {isAnalyzing ? 'Analyzing with SceneRAG AI...' : 'Analyze Script'}
            </button>

            <p className="text-[11px] text-white/40 text-center mt-6 uppercase tracking-wider">
              Powered by Claude 4.6 + Multimodal Understanding
            </p>
          </div>
        )}

        {/* Results Section */}
        {scenes.length > 0 && (
          <div>
            {/* Export Controls */}
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-[32px] font-light text-white mb-2 tracking-tight">
                  {scenes.length} Scenes Analyzed
                </h2>
                <p className="text-[13px] text-white/50 uppercase tracking-wider">
                  SceneRAG matched {scenes.reduce((acc, s) => acc + s.matchedShots.length, 0)} reference shots
                </p>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={exportAsPDF}
                  className="px-8 py-3 border border-white/30 text-white text-[11px] font-medium uppercase tracking-[0.15em] hover:bg-white/8 transition-all rounded-lg"
                >
                  Export PDF Lookbook
                </button>
                <button
                  onClick={exportAsSizzleReel}
                  className="px-8 py-3 bg-white text-black text-[11px] font-medium uppercase tracking-[0.15em] hover:opacity-85 transition-all rounded-lg"
                >
                  Export Sizzle Reel
                </button>
              </div>
            </div>

            {/* Scene Navigation */}
            <div className="flex gap-3 mb-12 overflow-x-auto pb-4">
              {scenes.map((scene, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSceneIndex(idx)}
                  className={`px-6 py-3 rounded-lg text-[11px] font-medium uppercase tracking-[0.15em] whitespace-nowrap transition-all ${
                    activeSceneIndex === idx
                      ? 'bg-white text-black'
                      : 'border border-white/20 text-white hover:border-white/40'
                  }`}
                >
                  Scene {scene.sceneNumber}
                </button>
              ))}
            </div>

            {/* Active Scene */}
            {activeSceneIndex !== null && scenes[activeSceneIndex] && (
              <div>
                <div className="glass-input p-8 rounded-lg mb-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-[24px] font-medium text-white mb-2 tracking-tight">
                        {scenes[activeSceneIndex].sceneHeading}
                      </h3>
                      <p className="text-[15px] text-white/70 leading-relaxed">
                        {scenes[activeSceneIndex].description}
                      </p>
                    </div>
                    <span className="text-[11px] text-white/40 uppercase tracking-wider">
                      Scene {scenes[activeSceneIndex].sceneNumber} of {scenes.length}
                    </span>
                  </div>
                </div>

                {/* Matched Shots */}
                <h4 className="text-[13px] text-white/50 uppercase tracking-wider mb-6">
                  Reference Shots ({scenes[activeSceneIndex].matchedShots.length})
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {scenes[activeSceneIndex].matchedShots.map((shot, shotIdx) => (
                    <div key={shotIdx} className="scene-card group">
                      <div className="relative aspect-video overflow-hidden rounded-t-lg">
                        <img
                          src={shot.imageUrl}
                          alt={shot.filmTitle}
                          className="w-full h-full object-cover"
                        />
                        <div className="aspect-ratio-badge">
                          {shot.matchScore}% Match
                        </div>
                        <div className="timestamp-badge group-hover:opacity-100">
                          {shot.timestamp}
                        </div>
                      </div>
                      <div className="p-6 bg-[#0a0a0a] border-t border-white/5 rounded-b-lg">
                        <h5 className="text-[16px] font-medium text-white mb-2">
                          {shot.filmTitle}
                        </h5>
                        <p className="text-[12px] text-white/50 mb-1">
                          Directed by {shot.director}
                        </p>
                        <p className="text-[11px] text-white/40">
                          DP: {shot.cinematographer}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Start Over */}
            <div className="text-center mt-16">
              <button
                onClick={() => {
                  setScenes([])
                  setScriptText('')
                  setActiveSceneIndex(null)
                }}
                className="text-[11px] text-white/50 uppercase tracking-wider hover:text-white/80 transition-colors"
              >
                ← Analyze Another Script
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
