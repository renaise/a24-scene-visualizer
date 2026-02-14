import type { FilmScene } from '../data/a24-scenes'

export interface SearchFilters {
  query: string
  composition: string[]
  color: string[]
  shotType: string[]
  mood: string[]
}

export function searchScenes(
  scenes: FilmScene[],
  filters: SearchFilters
): FilmScene[] {
  return scenes.filter((scene) => {
    // Text search
    if (filters.query) {
      const query = filters.query.toLowerCase()
      const searchableText = [
        scene.film,
        scene.director,
        scene.studio,
        ...scene.tags.composition,
        ...scene.tags.color,
        ...scene.tags.shotType,
        ...scene.tags.mood
      ].join(' ').toLowerCase()

      if (!searchableText.includes(query)) {
        return false
      }
    }

    // Composition filter
    if (filters.composition.length > 0) {
      const hasMatch = filters.composition.some((comp) =>
        scene.tags.composition.includes(comp)
      )
      if (!hasMatch) return false
    }

    // Color filter
    if (filters.color.length > 0) {
      const hasMatch = filters.color.some((color) =>
        scene.tags.color.includes(color)
      )
      if (!hasMatch) return false
    }

    // Shot type filter
    if (filters.shotType.length > 0) {
      const hasMatch = filters.shotType.some((type) =>
        scene.tags.shotType.includes(type)
      )
      if (!hasMatch) return false
    }

    // Mood filter
    if (filters.mood.length > 0) {
      const hasMatch = filters.mood.some((mood) =>
        scene.tags.mood.includes(mood)
      )
      if (!hasMatch) return false
    }

    return true
  })
}

// Calculate visual similarity score (simple heuristic for MVP)
export function calculateSimilarity(
  scene1: FilmScene,
  scene2: FilmScene
): number {
  let score = 0

  // Composition similarity
  const compositionMatch = scene1.tags.composition.filter((c) =>
    scene2.tags.composition.includes(c)
  ).length
  score += compositionMatch * 3

  // Color similarity
  const colorMatch = scene1.tags.color.filter((c) =>
    scene2.tags.color.includes(c)
  ).length
  score += colorMatch * 2

  // Shot type similarity
  const shotTypeMatch = scene1.tags.shotType.filter((s) =>
    scene2.tags.shotType.includes(s)
  ).length
  score += shotTypeMatch * 2

  // Mood similarity
  const moodMatch = scene1.tags.mood.filter((m) =>
    scene2.tags.mood.includes(m)
  ).length
  score += moodMatch * 2

  // Same director bonus
  if (scene1.director === scene2.director) {
    score += 5
  }

  return score
}

export function findSimilarScenes(
  targetScene: FilmScene,
  allScenes: FilmScene[],
  limit: number = 5
): FilmScene[] {
  return allScenes
    .filter((scene) => scene.id !== targetScene.id)
    .map((scene) => ({
      scene,
      similarity: calculateSimilarity(targetScene, scene)
    }))
    .sort((a, b) => b.similarity - a.similarity)
    .slice(0, limit)
    .map((item) => item.scene)
}
