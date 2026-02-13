import { useState } from 'react'
import { Menu, ChevronLeft } from 'lucide-react'
import './index.css'
import { A24_SCENES } from './data/a24-scenes'

function App() {
  const [view, setView] = useState<'home' | 'explore'>('home')
  const [prompt, setPrompt] = useState('')
  const [currentSceneId, setCurrentSceneId] = useState(A24_SCENES[0].id)
  const [viewMode, setViewMode] = useState<'lab' | 'stage'>('lab')
  const [showLogin, setShowLogin] = useState(false)

  const currentScene = A24_SCENES.find(s => s.id === currentSceneId) || A24_SCENES[0]
  const filteredScenes = A24_SCENES

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
                <button
                  onClick={() => setShowLogin(true)}
                  className="text-[13px] tracking-[0.02em] text-white hover:opacity-60 transition-opacity font-normal"
                >
                  Login
                </button>
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

        {/* Login Modal */}
        {showLogin && (
          <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-50" onClick={() => setShowLogin(false)}>
            <div className="bg-[#0a0a0a] border border-[#1a1a1a] p-8 max-w-md w-full mx-4" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-[20px] font-medium text-white">Sign in to CineBox</h3>
                <button onClick={() => setShowLogin(false)} className="text-[#666] hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <button className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-white text-black hover:bg-[#e6e6e6] transition-all duration-200 mb-3">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="text-[14px] font-medium">Continue with Google</span>
              </button>

              <div className="text-center mt-6">
                <p className="text-[11px] text-[#666666]">
                  By signing in, you agree to our Terms of Service and Privacy Policy
                </p>
              </div>
            </div>
          </div>
        )}
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

          {/* Cinematic Shots */}
          <div className="flex-1 py-4 overflow-y-auto">
            <div className="px-4 mb-4">
              <div className="text-[10px] text-[#666] uppercase tracking-wider mb-2 font-medium">
                {filteredScenes.length} Scenes
              </div>
            </div>
            <div className="space-y-2 px-3">
              {filteredScenes.map((scene) => (
                <button
                  key={scene.id}
                  onClick={() => setCurrentSceneId(scene.id)}
                  className={`w-full group transition-all ${
                    scene.id === currentSceneId
                      ? 'opacity-100'
                      : 'opacity-40 hover:opacity-100'
                  }`}
                >
                  <div className="aspect-video rounded overflow-hidden bg-[#0a0a0a] mb-2">
                    <img
                      src={scene.url}
                      alt={scene.film}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="text-left px-1">
                    <div className="text-[11px] text-white font-medium mb-0.5 truncate">
                      {scene.film}
                    </div>
                    <div className="text-[9px] text-[#666] truncate">
                      {scene.director} • {scene.year}
                    </div>
                  </div>
                </button>
              ))}
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
