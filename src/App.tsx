import { useState } from 'react'
import { Menu, ChevronLeft } from 'lucide-react'
import './index.css'
import { A24_SCENES, CATEGORIES } from './data/a24-scenes'

function App() {
  const [view, setView] = useState<'home' | 'gallery'>('home')
  const [prompt, setPrompt] = useState('')
  const [currentSceneId, setCurrentSceneId] = useState(A24_SCENES[0].id)
  const [selectedCategory, setSelectedCategory] = useState('editorial')

  const currentScene = A24_SCENES.find(s => s.id === currentSceneId) || A24_SCENES[0]
  const filteredScenes = A24_SCENES.filter(s => s.category === selectedCategory)

  const handleEnterGallery = () => {
    setView('gallery')
  }

  if (view === 'home') {
    return (
      <div className="min-h-screen bg-black flex flex-col">
        {/* Header - Monologue style */}
        <header className="glass-input border-b border-[rgba(255,255,255,0.1)]">
          <div className="max-w-[1400px] mx-auto px-10 py-6">
            <div className="flex items-center justify-between">
              <img
                src="/cinebox-logo.svg"
                alt="CineBox"
                className="h-[20px] opacity-100"
              />
              <nav className="flex items-center gap-12">
                <a
                  href="mailto:developer@codexfoundry.com"
                  className="text-[13px] font-medium tracking-[0.1em] text-white hover:opacity-70 transition-opacity uppercase"
                >
                  Contact
                </a>
                <a
                  href="#"
                  className="text-[13px] font-medium tracking-[0.1em] text-white hover:opacity-70 transition-opacity uppercase"
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

          {/* CineBox Background Watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-[0.02] z-10">
            <h1 className="text-[280px] md:text-[400px] font-medium text-white tracking-[-0.05em] select-none">
              CineBox
            </h1>
          </div>

          {/* Content */}
          <div className="max-w-[960px] mx-auto w-full relative z-10 px-6">
            <h2 className="text-[64px] md:text-[96px] leading-[0.95] font-medium text-white mb-8 tracking-[-0.04em] text-center">
              Every frame a gallery
            </h2>
            <p className="text-[16px] md:text-[18px] leading-[1.5] text-[#999999] max-w-[720px] mx-auto font-normal tracking-[0.02em] mb-20 text-center">
              Browse cinema's most striking scenes. Build your collection. Transform your space into a living archive.
            </p>

            {/* Input */}
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe a scene..."
              className="glass-input w-full h-[160px] px-6 py-5 text-[15px] font-normal text-white placeholder-[#666666] focus:outline-none resize-none mb-6 rounded-none"
            />

            {/* Button */}
            <button
              onClick={handleEnterGallery}
              className="monologue-button w-full rounded-none"
            >
              Generate Mood Board
            </button>
          </div>
        </main>

        {/* Footer */}
        <footer className="py-8 text-center border-t border-[#1a1a1a]">
          <p className="text-[10px] font-normal tracking-[0.15em] text-[#666666] uppercase">
            Made by Renaise 2026 ©
          </p>
        </footer>
      </div>
    )
  }

  // Gallery View
  return (
    <div className="h-screen bg-[#0a0a0a] flex flex-col overflow-hidden">
      {/* macOS-style window chrome */}
      <div className="h-[52px] bg-[#1a1a1a] border-b border-[#0a0a0a] flex items-center px-5 flex-shrink-0">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar - Categories */}
        <div className="w-[240px] bg-[#0a0a0a] border-r border-[#1a1a1a] flex-shrink-0 flex flex-col">
          {/* Back button */}
          <button
            onClick={() => setView('home')}
            className="flex items-center gap-2 px-6 py-5 text-[11px] font-medium text-[#999] hover:text-white transition-colors border-b border-[#1a1a1a] bg-transparent"
          >
            <ChevronLeft className="w-3 h-3" />
            <span className="uppercase tracking-wider">Back to Overview</span>
          </button>

          {/* Categories */}
          <div className="flex-1 px-6 py-8 overflow-y-auto">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`w-full text-left py-3 px-0 text-[13px] font-normal transition-colors border-b border-[#1a1a1a] ${
                  selectedCategory === cat.slug
                    ? 'text-white font-medium'
                    : 'text-[#666] hover:text-white'
                }`}
              >
                <span>{cat.name}</span>
                {selectedCategory === cat.slug && (
                  <span className="ml-2 text-[11px] bg-white text-black px-2 py-0.5 rounded-sm font-medium">
                    {cat.count}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Center - Main Viewer */}
        <div className="flex-1 bg-black relative flex items-center justify-center p-12">
          {/* Top bar */}
          <div className="absolute top-0 left-0 right-0 h-[80px] flex items-center justify-between px-12 z-20">
            <div className="text-center flex-1">
              <div className="text-[11px] text-[#666] uppercase tracking-wider mb-1">
                {currentScene.director}
              </div>
              <div className="text-[10px] text-[#444] uppercase tracking-widest">
                Photography
              </div>
            </div>
            <button className="text-[#666] hover:text-white transition-colors">
              <Menu className="w-5 h-5" />
            </button>
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

          {/* Bottom metadata */}
          <div className="absolute bottom-12 left-12 right-12 flex items-center justify-between z-20">
            <div className="text-[11px] text-[#666]">
              {currentScene.film} • {currentScene.timestamp}
            </div>
            <div className="flex items-center gap-4 text-[10px] text-[#666]">
              <button className="hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </button>
              <button className="hover:text-white transition-colors flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                <span className="text-[9px] uppercase tracking-wider">15</span>
              </button>
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
      </div>

      {/* Footer */}
      <div className="h-[52px] bg-[#0a0a0a] border-t border-[#1a1a1a] flex items-center justify-center flex-shrink-0">
        <p className="text-[10px] font-normal tracking-[0.15em] text-[#666666] uppercase">
          Made by Renaise 2026 ©
        </p>
      </div>
    </div>
  )
}

export default App
