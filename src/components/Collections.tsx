import { useState } from 'react'
import { Folder, Plus, Trash2, X, Download } from 'lucide-react'
import type { Collection } from '../utils/collections'
import { getCollections, createCollection, deleteCollection, isSceneInCollection, addSceneToCollection, removeSceneFromCollection } from '../utils/collections'

export interface CollectionsProps {
  currentSceneId: string
  onClose: () => void
  onExport?: (collectionId: string) => void
}

export function Collections({ currentSceneId, onClose, onExport }: CollectionsProps) {
  const [collections, setCollections] = useState<Collection[]>(getCollections())
  const [showNewCollection, setShowNewCollection] = useState(false)
  const [newCollectionName, setNewCollectionName] = useState('')
  const [newCollectionDescription, setNewCollectionDescription] = useState('')

  const handleCreateCollection = () => {
    if (!newCollectionName.trim()) return

    const newCollection = createCollection(
      newCollectionName.trim(),
      newCollectionDescription.trim()
    )

    setCollections(getCollections())
    setNewCollectionName('')
    setNewCollectionDescription('')
    setShowNewCollection(false)

    // Auto-add current scene to new collection
    if (currentSceneId) {
      handleToggleScene(newCollection.id, currentSceneId)
    }
  }

  const handleDeleteCollection = (collectionId: string) => {
    if (confirm('Delete this collection? This cannot be undone.')) {
      deleteCollection(collectionId)
      setCollections(getCollections())
    }
  }

  const handleToggleScene = (collectionId: string, sceneId: string) => {
    const isInCollection = isSceneInCollection(collectionId, sceneId)

    if (isInCollection) {
      removeSceneFromCollection(collectionId, sceneId)
    } else {
      addSceneToCollection(collectionId, sceneId)
    }

    setCollections(getCollections())
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-90 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-[#0a0a0a] border border-[#1a1a1a] max-w-lg w-full max-h-[80vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#1a1a1a] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Folder className="w-5 h-5 text-[#999]" />
            <h3 className="text-[16px] font-medium text-white">My Collections</h3>
          </div>
          <button
            onClick={onClose}
            className="text-[#666] hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Collections List */}
        <div className="flex-1 overflow-y-auto p-6">
          {collections.length === 0 && !showNewCollection && (
            <div className="text-center py-12">
              <Folder className="w-12 h-12 text-[#333] mx-auto mb-4" />
              <p className="text-[13px] text-[#666] mb-4">
                No collections yet. Create one to start saving frames.
              </p>
              <button
                onClick={() => setShowNewCollection(true)}
                className="px-4 py-2 bg-white text-black text-[12px] font-medium hover:bg-[#e6e6e6] transition-all"
              >
                Create First Collection
              </button>
            </div>
          )}

          <div className="space-y-3">
            {collections.map((collection) => {
              const isActive = isSceneInCollection(collection.id, currentSceneId)

              return (
                <div
                  key={collection.id}
                  className="border border-[#1a1a1a] p-4 hover:border-[#333] transition-all"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1 min-w-0">
                      <h4 className="text-[14px] font-medium text-white mb-1 truncate">
                        {collection.name}
                      </h4>
                      {collection.description && (
                        <p className="text-[11px] text-[#666] line-clamp-2">
                          {collection.description}
                        </p>
                      )}
                      <p className="text-[10px] text-[#666] mt-2">
                        {collection.sceneIds.length} {collection.sceneIds.length === 1 ? 'frame' : 'frames'}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      {onExport && collection.sceneIds.length > 0 && (
                        <button
                          onClick={() => onExport(collection.id)}
                          className="text-[#666] hover:text-white transition-colors"
                          title="Export to PDF"
                        >
                          <Download className="w-4 h-4" />
                        </button>
                      )}
                      <button
                        onClick={() => handleDeleteCollection(collection.id)}
                        className="text-[#666] hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => handleToggleScene(collection.id, currentSceneId)}
                    className={`w-full px-3 py-2 text-[11px] font-medium uppercase tracking-wider transition-all ${
                      isActive
                        ? 'bg-white text-black hover:bg-[#e6e6e6]'
                        : 'bg-[rgba(255,255,255,0.08)] text-white hover:bg-[rgba(255,255,255,0.12)]'
                    }`}
                  >
                    {isActive ? 'Remove from Collection' : 'Add to Collection'}
                  </button>
                </div>
              )
            })}
          </div>

          {/* New Collection Form */}
          {showNewCollection && (
            <div className="border border-[#1a1a1a] p-4 mt-3">
              <h4 className="text-[14px] font-medium text-white mb-3">
                New Collection
              </h4>
              <input
                type="text"
                value={newCollectionName}
                onChange={(e) => setNewCollectionName(e.target.value)}
                placeholder="Collection name"
                className="w-full px-3 py-2 bg-[rgba(255,255,255,0.03)] border border-[#1a1a1a] text-[13px] text-white placeholder-[#666] focus:outline-none focus:border-[#333] mb-2"
                autoFocus
              />
              <textarea
                value={newCollectionDescription}
                onChange={(e) => setNewCollectionDescription(e.target.value)}
                placeholder="Description (optional)"
                className="w-full px-3 py-2 bg-[rgba(255,255,255,0.03)] border border-[#1a1a1a] text-[13px] text-white placeholder-[#666] focus:outline-none focus:border-[#333] resize-none mb-3"
                rows={2}
              />
              <div className="flex gap-2">
                <button
                  onClick={handleCreateCollection}
                  disabled={!newCollectionName.trim()}
                  className="flex-1 px-3 py-2 bg-white text-black text-[11px] font-medium uppercase tracking-wider hover:bg-[#e6e6e6] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  Create
                </button>
                <button
                  onClick={() => {
                    setShowNewCollection(false)
                    setNewCollectionName('')
                    setNewCollectionDescription('')
                  }}
                  className="px-3 py-2 bg-[rgba(255,255,255,0.08)] text-white text-[11px] font-medium uppercase tracking-wider hover:bg-[rgba(255,255,255,0.12)] transition-all"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        {collections.length > 0 && !showNewCollection && (
          <div className="px-6 py-4 border-t border-[#1a1a1a]">
            <button
              onClick={() => setShowNewCollection(true)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-[rgba(255,255,255,0.08)] text-white text-[11px] font-medium uppercase tracking-wider hover:bg-[rgba(255,255,255,0.12)] transition-all"
            >
              <Plus className="w-4 h-4" />
              New Collection
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
