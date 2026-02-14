import { useState } from 'react'
import { Bookmark, Download, Share2 } from 'lucide-react'
import { FILM_SCENES } from '../data/a24-scenes'
import { SearchFilters } from '../components/SearchFilters'
import { Collections } from '../components/Collections'
import { searchScenes, findSimilarScenes } from '../utils/search'
import { getCollections } from '../utils/collections'
import { exportCollectionToPDF, exportSceneToPDF } from '../utils/export'

export function Browse() {
  const [currentSceneId, setCurrentSceneId] = useState(FILM_SCENES[0].id)

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedComposition, setSelectedComposition] = useState<string[]>([])
  const [selectedColor, setSelectedColor] = useState<string[]>([])
  const [selectedShotType, setSelectedShotType] = useState<string[]>([])
  const [selectedMood, setSelectedMood] = useState<string[]>([])

  // Collections
  const [showCollections, setShowCollections] = useState(false)

  const currentScene = FILM_SCENES.find(s => s.id === currentSceneId) || FILM_SCENES[0]

  // Apply search and filters
  const filteredScenes = searchScenes(FILM_SCENES, {
    query: searchQuery,
    composition: selectedComposition,
    color: selectedColor,
    shotType: selectedShotType,
    mood: selectedMood
  })

  // Get similar scenes
  const similarScenes = findSimilarScenes(currentScene, FILM_SCENES, 3)

  const handleClearFilters = () => {
    setSearchQuery('')
    setSelectedComposition([])
    setSelectedColor([])
    setSelectedShotType([])
    setSelectedMood([])
  }

  const handleExportCollection = async (collectionId: string) => {
    const collections = getCollections()
    const collection = collections.find(c => c.id === collectionId)

    if (collection) {
      try {
        await exportCollectionToPDF(collection, FILM_SCENES)
      } catch (error) {
        console.error('Export failed:', error)
        alert('Failed to export PDF. Please try again.')
      }
    }
  }

  const handleExportCurrentScene = async () => {
    try {
      await exportSceneToPDF(currentScene)
    } catch (error) {
      console.error('Export failed:', error)
      alert('Failed to export PDF. Please try again.')
    }
  }

  const handleShare = () => {
    const shareData = {
      title: `${currentScene.film} - CineBox`,
      text: `Check out this frame from ${currentScene.film} (${currentScene.year}) directed by ${currentScene.director}`,
      url: window.location.href
    }

    if (navigator.share) {
      navigator.share(shareData).catch(() => {
        copyToClipboard(window.location.href)
      })
    } else {
      copyToClipboard(window.location.href)
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Link copied to clipboard!')
    })
  }

  return (
    <div className="h-screen bg-[#0a0a0a] flex overflow-hidden">
      {/* Left Sidebar - Search & Filters */}
      <div className="w-[280px] bg-[#0a0a0a] border-r border-[#1a1a1a] flex-shrink-0 flex flex-col overflow-hidden">
        {/* Search & Filters */}
        <div className="flex-1 overflow-y-auto">
          <SearchFilters
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedComposition={selectedComposition}
            selectedColor={selectedColor}
            selectedShotType={selectedShotType}
            selectedMood={selectedMood}
            onCompositionChange={setSelectedComposition}
            onColorChange={setSelectedColor}
            onShotTypeChange={setSelectedShotType}
            onMoodChange={setSelectedMood}
            onClearAll={handleClearFilters}
          />

          {/* Results count */}
          <div className="px-6 py-4">
            <div className="text-[10px] text-[#666] uppercase tracking-wider">
              {filteredScenes.length} {filteredScenes.length === 1 ? 'Scene' : 'Scenes'}
            </div>
          </div>
        </div>
      </div>

      {/* Center - Main Viewer */}
      <div className="flex-1 bg-black relative flex items-center justify-center p-12">
        {/* Scene Context Bar */}
        <div className="absolute top-8 left-12 right-12 flex items-start justify-between z-20">
          <div>
            <div className="text-[20px] text-white font-medium mb-2 tracking-[-0.01em]">
              {currentScene.film}
            </div>
            <div className="film-credits text-[11px] mb-2">
              <strong>{currentScene.director}</strong>
              {currentScene.cinematographer && (
                <>
                  {' • DP: '}
                  <strong>{currentScene.cinematographer}</strong>
                </>
              )}
              {' • '}{currentScene.year}
              {' • '}{currentScene.studio}
            </div>
            {currentScene.aspectRatio && (
              <div className="text-[9px] text-white/40 uppercase tracking-wider">
                {currentScene.aspectRatio} Aspect Ratio
              </div>
            )}
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowCollections(true)}
              className="mono-text glass-input px-4 py-2 text-[10px] text-white uppercase tracking-wider hover:bg-[rgba(255,255,255,0.08)] flex items-center gap-2"
            >
              <Bookmark className="w-3 h-3" />
              Save
            </button>
            <button
              onClick={handleExportCurrentScene}
              className="mono-text glass-input px-4 py-2 text-[10px] text-white uppercase tracking-wider hover:bg-[rgba(255,255,255,0.08)] flex items-center gap-2"
            >
              <Download className="w-3 h-3" />
              Export
            </button>
            <button
              onClick={handleShare}
              className="text-[#999] hover:text-white transition-colors"
            >
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Corner brackets */}
        <div className="absolute top-[100px] left-12 w-8 h-8 border-l-2 border-t-2 border-[#333] pointer-events-none z-10"></div>
        <div className="absolute top-[100px] right-12 w-8 h-8 border-r-2 border-t-2 border-[#333] pointer-events-none z-10"></div>
        <div className="absolute bottom-[100px] left-12 w-8 h-8 border-l-2 border-b-2 border-[#333] pointer-events-none z-10"></div>
        <div className="absolute bottom-[100px] right-12 w-8 h-8 border-r-2 border-b-2 border-[#333] pointer-events-none z-10"></div>

        {/* Main image with aspect ratio badge */}
        <div className="relative max-w-[70%] max-h-[70%] w-full">
          <img
            src={currentScene.url}
            alt={currentScene.film}
            className="w-full h-full object-contain"
          />

          {/* Aspect ratio badge (subtle, top-right of image) */}
          {currentScene.aspectRatio && (
            <div className="aspect-ratio-badge">
              {currentScene.aspectRatio}
            </div>
          )}

          {/* Timestamp badge (bottom-left, shows on hover) */}
          <div className="timestamp-badge opacity-70">
            {currentScene.timestamp}
          </div>
        </div>

        {/* Bottom exploration bar */}
        <div className="absolute bottom-8 left-12 right-12 z-20">
          <div className="glass-input p-4 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="mono-text text-[9px] text-[#666] uppercase tracking-wider">
                Similar
              </div>
              <div className="flex items-center gap-2">
                {similarScenes.slice(0, 3).map((scene) => (
                  <button
                    key={scene.id}
                    onClick={() => setCurrentSceneId(scene.id)}
                    className="mono-text px-3 py-1.5 bg-[rgba(255,255,255,0.08)] text-[9px] text-white rounded uppercase hover:bg-[rgba(255,255,255,0.12)] transition-all"
                  >
                    {scene.film.length > 15 ? scene.film.substring(0, 15) + '...' : scene.film}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar - Filmstrip with metadata */}
      <div className="w-[200px] bg-[#0a0a0a] border-l border-[#1a1a1a] flex-shrink-0 overflow-y-auto py-6">
        <div className="space-y-6 px-3">
          {filteredScenes.map((scene) => (
            <button
              key={scene.id}
              onClick={() => setCurrentSceneId(scene.id)}
              className={`w-full text-left transition-all ${
                scene.id === currentSceneId ? 'opacity-100' : 'opacity-50 hover:opacity-100'
              }`}
            >
              {/* Image with badges */}
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden mb-2">
                <img
                  src={scene.url}
                  alt={scene.film}
                  className={`w-full h-full object-cover transition-all ${
                    scene.id === currentSceneId ? 'ring-1 ring-white' : ''
                  }`}
                />

                {/* Timestamp badge (show on hover) */}
                <div className="timestamp-badge">
                  {scene.timestamp}
                </div>
              </div>

              {/* Film title */}
              <div className="text-[10px] text-white font-medium mb-1 line-clamp-1">
                {scene.film}
              </div>

              {/* Director & year */}
              <div className="text-[9px] text-white/50 line-clamp-1">
                {scene.director} • {scene.year}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Collections Modal */}
      {showCollections && (
        <Collections
          currentSceneId={currentSceneId}
          onClose={() => setShowCollections(false)}
          onExport={handleExportCollection}
        />
      )}
    </div>
  )
}
