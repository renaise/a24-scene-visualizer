import { useState } from 'react'
import { Menu, ChevronLeft } from 'lucide-react'
import './index.css'

interface Scene {
  id: string
  url: string
  film: string
  timestamp: string
  director: string
  category: string
}

interface Category {
  name: string
  count: number
  slug: string
}

// A24 Film Scenes
const SCENES: Scene[] = [
  {
    id: '1',
    url: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1600&h=900&fit=crop',
    film: 'Moonlight',
    timestamp: '00:23:45',
    director: 'Barry Jenkins',
    category: 'editorial'
  },
  {
    id: '2',
    url: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1600&h=900&fit=crop',
    film: 'Hereditary',
    timestamp: '01:12:33',
    director: 'Ari Aster',
    category: 'editorial'
  },
  {
    id: '3',
    url: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1600&h=900&fit=crop',
    film: 'Midsommar',
    timestamp: '00:45:12',
    director: 'Ari Aster',
    category: 'editorial'
  },
  {
    id: '4',
    url: 'https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=1600&h=900&fit=crop',
    film: 'The Lighthouse',
    timestamp: '00:56:20',
    director: 'Robert Eggers',
    category: 'editorial'
  },
  {
    id: '5',
    url: 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=1600&h=900&fit=crop',
    film: 'Everything Everywhere All at Once',
    timestamp: '01:34:08',
    director: 'Daniels',
    category: 'editorial'
  },
  {
    id: '6',
    url: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=1600&h=900&fit=crop',
    film: 'Lady Bird',
    timestamp: '00:18:42',
    director: 'Greta Gerwig',
    category: 'personal'
  },
  {
    id: '7',
    url: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1600&h=900&fit=crop',
    film: 'The Witch',
    timestamp: '00:32:15',
    director: 'Robert Eggers',
    category: 'editorial'
  },
  {
    id: '8',
    url: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=1600&h=900&fit=crop',
    film: 'Uncut Gems',
    timestamp: '01:05:30',
    director: 'Safdie Brothers',
    category: 'editorial'
  },
  {
    id: '9',
    url: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=1600&h=900&fit=crop',
    film: 'Ex Machina',
    timestamp: '00:42:18',
    director: 'Alex Garland',
    category: 'editorial'
  },
  {
    id: '10',
    url: 'https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=1600&h=900&fit=crop',
    film: 'The Florida Project',
    timestamp: '00:28:50',
    director: 'Sean Baker',
    category: 'personal'
  },
  {
    id: '11',
    url: 'https://images.unsplash.com/photo-1506755855567-92ff770e8d00?w=1600&h=900&fit=crop',
    film: 'A Ghost Story',
    timestamp: '00:52:30',
    director: 'David Lowery',
    category: 'editorial'
  },
  {
    id: '12',
    url: 'https://images.unsplash.com/photo-1511576661531-b34d7da5d0bb?w=1600&h=900&fit=crop',
    film: 'Eighth Grade',
    timestamp: '00:15:22',
    director: 'Bo Burnham',
    category: 'personal'
  }
]

const CATEGORIES: Category[] = [
  { name: 'Daily life', count: 127, slug: 'daily' },
  { name: 'Editorial', count: 8, slug: 'editorial' },
  { name: 'Personal', count: 19, slug: 'personal' },
  { name: 'Travel', count: 43, slug: 'travel' },
  { name: 'Weddings', count: 25, slug: 'weddings' }
]

function App() {
  const [currentSceneId, setCurrentSceneId] = useState(SCENES[0].id)
  const [selectedCategory, setSelectedCategory] = useState('editorial')

  const currentScene = SCENES.find(s => s.id === currentSceneId) || SCENES[0]
  const filteredScenes = SCENES.filter(s => s.category === selectedCategory)

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
          <button className="flex items-center gap-2 px-6 py-5 text-[11px] text-[#666] hover:text-white transition-colors border-b border-[#1a1a1a]">
            <ChevronLeft className="w-3 h-3" />
            <span className="uppercase tracking-wider">Back to Overview</span>
          </button>

          {/* Categories */}
          <div className="flex-1 px-6 py-8 overflow-y-auto">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`w-full text-left py-2.5 text-[14px] transition-colors group ${
                  selectedCategory === cat.slug
                    ? 'text-white'
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
    </div>
  )
}

export default App
