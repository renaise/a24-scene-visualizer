// Project types for filmmaker career platform

export interface Project {
  id: string
  title: string
  logline: string
  genre: string
  budgetRange: string
  directorProfile: string
  visualReferences: string[]
  themes: string[]
  tone: string[]
  influences: string
  targetStudios: string[]
  createdAt: string
  updatedAt: string
  status: 'draft' | 'analyzing' | 'matched'
}

export interface StudioMatch {
  studio: string
  matchPercentage: number
  acceptanceRate: number
  similarProjects: number
  totalAnalyzed: number
  strengths: string[]
  warnings: string[]
  recommendation: 'strong' | 'good' | 'weak' | 'skip'
  contact?: string
  bestWindow?: string
}

export interface MatchResults {
  projectId: string
  projectTitle: string
  analyzedAt: string
  totalSimilar: number
  matches: StudioMatch[]
}
