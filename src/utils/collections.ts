import type { FilmScene } from '../data/a24-scenes'

export interface Collection {
  id: string
  name: string
  description: string
  sceneIds: string[]
  createdAt: number
  updatedAt: number
}

const STORAGE_KEY = 'cinebox_collections'

export function getCollections(): Collection[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

export function saveCollections(collections: Collection[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(collections))
  } catch (error) {
    console.error('Failed to save collections:', error)
  }
}

export function createCollection(
  name: string,
  description: string = ''
): Collection {
  const collection: Collection = {
    id: `col_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    name,
    description,
    sceneIds: [],
    createdAt: Date.now(),
    updatedAt: Date.now()
  }

  const collections = getCollections()
  collections.push(collection)
  saveCollections(collections)

  return collection
}

export function updateCollection(
  collectionId: string,
  updates: Partial<Omit<Collection, 'id' | 'createdAt'>>
): Collection | null {
  const collections = getCollections()
  const index = collections.findIndex((c) => c.id === collectionId)

  if (index === -1) return null

  collections[index] = {
    ...collections[index],
    ...updates,
    updatedAt: Date.now()
  }

  saveCollections(collections)
  return collections[index]
}

export function deleteCollection(collectionId: string): boolean {
  const collections = getCollections()
  const filtered = collections.filter((c) => c.id !== collectionId)

  if (filtered.length === collections.length) return false

  saveCollections(filtered)
  return true
}

export function addSceneToCollection(
  collectionId: string,
  sceneId: string
): boolean {
  const collections = getCollections()
  const collection = collections.find((c) => c.id === collectionId)

  if (!collection) return false

  if (!collection.sceneIds.includes(sceneId)) {
    collection.sceneIds.push(sceneId)
    collection.updatedAt = Date.now()
    saveCollections(collections)
    return true
  }

  return false
}

export function removeSceneFromCollection(
  collectionId: string,
  sceneId: string
): boolean {
  const collections = getCollections()
  const collection = collections.find((c) => c.id === collectionId)

  if (!collection) return false

  const initialLength = collection.sceneIds.length
  collection.sceneIds = collection.sceneIds.filter((id) => id !== sceneId)

  if (collection.sceneIds.length !== initialLength) {
    collection.updatedAt = Date.now()
    saveCollections(collections)
    return true
  }

  return false
}

export function isSceneInCollection(
  collectionId: string,
  sceneId: string
): boolean {
  const collections = getCollections()
  const collection = collections.find((c) => c.id === collectionId)
  return collection ? collection.sceneIds.includes(sceneId) : false
}

export function getCollectionScenes(
  collectionId: string,
  allScenes: FilmScene[]
): FilmScene[] {
  const collections = getCollections()
  const collection = collections.find((c) => c.id === collectionId)

  if (!collection) return []

  return collection.sceneIds
    .map((id) => allScenes.find((s) => s.id === id))
    .filter((scene): scene is FilmScene => scene !== undefined)
}

export function getSceneCollections(sceneId: string): Collection[] {
  const collections = getCollections()
  return collections.filter((c) => c.sceneIds.includes(sceneId))
}
