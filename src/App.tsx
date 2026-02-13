import { useState } from 'react'
import { Menu, ChevronLeft } from 'lucide-react'
import './index.css'
import { A24_SCENES, CATEGORIES } from './data/a24-scenes'

function App() {
  const [view, setView] = useState<'home' | 'explore'>('home')
  const [prompt, setPrompt] = useState('')
  const [currentSceneId, setCurrentSceneId] = useState(A24_SCENES[0].id)
  const [selectedCategory, setSelectedCategory] = useState('editorial')
  const [viewMode, setViewMode] = useState<'lab' | 'stage'>('lab')

  const currentScene = A24_SCENES.find(s => s.id === currentSceneId) || A24_SCENES[0]
  const filteredScenes = A24_SCENES.filter(s => s.category === selectedCategory)

  const handleEnterGallery = () => {
    setView('explore')
  }

  if (view === 'home') {
    return (
      <div className="min-h-screen bg-black flex flex-col">
        {/* Header */}
        <header className="glass-input border-b border-[rgba(255,255,255,0.1)]">
          <div className="max-w-[1400px] mx-auto px-10 py-6">
            <div className="flex items-center justify-between">
              <img
                src="/cinebox-logo.svg"
                alt="CineBox"
                className="h-[20px] opacity-100"
              />
              <nav className="flex items-center gap-10">
                <a
                  href="mailto:developer@codexfoundry.com"
                  className="text-[13px] tracking-[0.02em] text-white hover:opacity-60 transition-opacity font-normal"
                >
                  Contact
                </a>
                <a
                  href="#"
                  className="text-[13px] tracking-[0.02em] text-white hover:opacity-60 transition-opacity font-normal"
                >
                  Login
                </a>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero */}
        <main className="flex-1 flex items-center justify-center px-8 py-20 relative overflow-hidden">
          {/* Background Video - 15 second loop */}
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="bg-video"
            src="/bg-video.mp4"
          />

          {/* Video Overlay */}
          <div className="bg-video-overlay"></div>

          {/* Content */}
          <div className="max-w-[860px] mx-auto w-full relative z-10 px-6">
            <h2 className="text-[56px] md:text-[72px] leading-[1.05] text-white mb-6 tracking-[-0.02em] text-center font-medium">
              A24 Cinema Lab
            </h2>
            <p className="text-[16px] md:text-[18px] leading-[1.5] text-[#999999] max-w-[640px] mx-auto tracking-[0.01em] mb-20 text-center font-normal">
              Explore visual relationships across A24 films. Discover scenes by composition, color, and cinematic DNA.
            </p>

            {/* Input */}
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe a visual mood, composition, or feeling..."
              className="glass-input w-full h-[160px] px-6 py-5 text-[15px] font-normal text-white placeholder-[#666666] focus:outline-none resize-none mb-6 rounded-none"
            />

            {/* Button */}
            <button
              onClick={handleEnterGallery}
              className="w-full px-8 py-4 bg-white text-black text-[13px] font-medium tracking-[0.02em] hover:bg-[#e6e6e6] transition-all duration-200"
            >
              Explore Cinema
            </button>
          </div>
        </main>

        {/* Footer */}
        <footer className="py-8 text-center border-t border-[#1a1a1a]">
          <p className="text-[11px] tracking-[0.05em] text-[#666666] font-normal">
            Made by Renaise © 2026
          </p>
        </footer>
      </div>
    )
  }

  // Explore View
  return (
    <div className="h-screen bg-[#0a0a0a] flex overflow-hidden">
        {/* Left Sidebar - Categories */}
        <div className="w-[240px] bg-[#0a0a0a] border-r border-[#1a1a1a] flex-shrink-0 flex flex-col">
          {/* Logo header */}
          <div className="px-6 py-6 border-b border-[#1a1a1a] flex items-center justify-between">
            <img
              src="/cinebox-logo.svg"
              alt="CineBox"
              className="h-[20px] opacity-100 cursor-pointer"
              onClick={() => setView('home')}
            />
            <button
              onClick={() => setView('home')}
              className="text-[#666] hover:text-white transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          </div>

          {/* Exploration Paths */}
          <div className="flex-1 px-6 py-6 overflow-y-auto">
            <div className="mono-text text-[9px] text-[#666] uppercase tracking-widest mb-4">
              Explore By
            </div>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`mono-text w-full text-left py-3 px-3 text-[11px] uppercase transition-all mb-1 rounded-md ${
                  selectedCategory === cat.slug
                    ? 'text-white bg-[rgba(255,255,255,0.08)]'
                    : 'text-[#999] hover:text-white hover:bg-[rgba(255,255,255,0.03)]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{cat.name}</span>
                  <span className="text-[9px] text-[#666]">{cat.count}</span>
                </div>
              </button>
            ))}

            <div className="mt-8 pt-6 border-t border-[#1a1a1a]">
              <div className="mono-text text-[9px] text-[#666] uppercase tracking-widest mb-4">
                Quick Actions
              </div>
              <button className="mono-text w-full text-left py-2.5 px-3 text-[11px] text-[#999] hover:text-white transition-all rounded-md hover:bg-[rgba(255,255,255,0.03)] uppercase">
                Stage View
              </button>
              <button className="mono-text w-full text-left py-2.5 px-3 text-[11px] text-[#999] hover:text-white transition-all rounded-md hover:bg-[rgba(255,255,255,0.03)] uppercase">
                Random
              </button>
            </div>
          </div>
        </div>

        {/* Center - Main Viewer */}
        <div className="flex-1 bg-black relative flex items-center justify-center p-12">
          {/* Scene Context Bar */}
          <div className="absolute top-8 left-12 right-12 flex items-start justify-between z-20">
            <div>
              <div className="mono-text text-[20px] text-white font-normal mb-2 uppercase">
                {currentScene.film}
              </div>
              <div className="mono-text flex items-center gap-4 text-[12px] text-[#999] uppercase">
                <span>{currentScene.director}</span>
                <span>•</span>
                <span>{currentScene.year}</span>
                <span>•</span>
                <span>{currentScene.category}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="mono-text glass-input px-4 py-2 text-[10px] text-white uppercase tracking-wider hover:bg-[rgba(255,255,255,0.08)]">
                Similar Scenes
              </button>
              <button className="text-[#999] hover:text-white transition-colors">
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Corner brackets */}
          <div className="absolute top-[100px] left-12 w-8 h-8 border-l-2 border-t-2 border-[#333] pointer-events-none z-10"></div>
          <div className="absolute top-[100px] right-12 w-8 h-8 border-r-2 border-t-2 border-[#333] pointer-events-none z-10"></div>
          <div className="absolute bottom-[100px] left-12 w-8 h-8 border-l-2 border-b-2 border-[#333] pointer-events-none z-10"></div>
          <div className="absolute bottom-[100px] right-12 w-8 h-8 border-r-2 border-b-2 border-[#333] pointer-events-none z-10"></div>

          {/* Main image */}
          <div className="relative max-w-[70%] max-h-[70%] w-full">
            <img
              src={currentScene.url}
              alt={currentScene.film}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Bottom exploration bar */}
          <div className="absolute bottom-8 left-12 right-12 z-20">
            <div className="glass-input p-4 flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="mono-text text-[9px] text-[#666] uppercase tracking-wider">
                  Related
                </div>
                <div className="flex items-center gap-2">
                  <span className="mono-text px-3 py-1.5 bg-[rgba(255,255,255,0.08)] text-[9px] text-white rounded uppercase">
                    Midsommar
                  </span>
                  <span className="mono-text px-3 py-1.5 bg-[rgba(255,255,255,0.08)] text-[9px] text-white rounded uppercase">
                    Hereditary
                  </span>
                  <span className="mono-text px-3 py-1.5 bg-[rgba(255,255,255,0.08)] text-[9px] text-white rounded uppercase">
                    The Witch
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-[#999]">
                <button className="mono-text hover:text-white transition-colors flex items-center gap-2 text-[9px] uppercase tracking-wider">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  <span>Share</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Filmstrip */}
        <div className="w-[180px] bg-[#0a0a0a] border-l border-[#1a1a1a] flex-shrink-0 overflow-y-auto py-6">
          <div className="space-y-3 px-3">
            {filteredScenes.map((scene) => (
              <button
                key={scene.id}
                onClick={() => setCurrentSceneId(scene.id)}
                className={`w-full aspect-[4/3] rounded-sm overflow-hidden transition-all ${
                  scene.id === currentSceneId
                    ? 'ring-2 ring-white ring-offset-2 ring-offset-[#0a0a0a]'
                    : 'opacity-50 hover:opacity-100'
                }`}
              >
                <img
                  src={scene.url}
                  alt={scene.film}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

      {/* Floating View Toggle - LAB/STAGE Style */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-1 bg-[rgba(0,0,0,0.9)] backdrop-filter backdrop-blur-2xl rounded-full p-2 border border-[rgba(255,255,255,0.15)] shadow-2xl">
          <button
            onClick={() => setViewMode('lab')}
            className={`px-10 py-3.5 text-[13px] uppercase tracking-[0.15em] font-medium transition-all duration-300 rounded-full ${
              viewMode === 'lab'
                ? 'view-toggle-active text-white'
                : 'text-[#666] hover:text-[#999]'
            }`}
          >
            Lab
          </button>
          <button
            onClick={() => setViewMode('stage')}
            className={`px-10 py-3.5 text-[13px] uppercase tracking-[0.15em] font-medium transition-all duration-300 rounded-full ${
              viewMode === 'stage'
                ? 'view-toggle-active text-white'
                : 'text-[#666] hover:text-[#999]'
            }`}
          >
            Stage
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="h-[52px] bg-[#0a0a0a] border-t border-[#1a1a1a] flex items-center justify-center flex-shrink-0">
        <p className="text-[11px] tracking-[0.05em] text-[#666666] font-normal">
          Made by Renaise © 2026
        </p>
      </div>
    </div>
  )
}

export default App
