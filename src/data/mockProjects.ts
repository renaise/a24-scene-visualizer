import type { Project } from '../types/project'

export const MOCK_PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'The Inheritance',
    logline: 'A woman returns to her ancestral home in rural Sweden to find her family\'s dark pagan traditions still alive.',
    genre: 'Horror',
    budgetRange: '$5-10M',
    directorProfile: 'First feature',
    visualReferences: [
      'https://image.tmdb.org/t/p/original/7LEI8ulZzO5gy9Ww2NVCrKmHeDZ.jpg',
      'https://image.tmdb.org/t/p/original/9fmIhbrWhaVGzFRI19MJJDfVL8E.jpg',
    ],
    themes: ['Family', 'Grief', 'Identity', 'Tradition'],
    tone: ['Dark', 'Atmospheric', 'Melancholic'],
    influences: 'Inspired by: Midsommar, Hereditary, The Witch',
    targetStudios: ['A24', 'Neon', 'Annapurna'],
    createdAt: '2026-02-10T14:30:00Z',
    updatedAt: '2026-02-13T09:15:00Z',
    status: 'matched'
  },
  {
    id: 'proj-2',
    title: 'Night Shift',
    logline: 'Two convenience store workers discover their late-night regulars are planning a heist.',
    genre: 'Crime',
    budgetRange: '$1-5M',
    directorProfile: '2-3 features',
    visualReferences: [],
    themes: ['Working class', 'Crime', 'Friendship'],
    tone: ['Gritty', 'Suspenseful', 'Realistic'],
    influences: 'Inspired by: Good Time, Uncut Gems, Tangerine',
    targetStudios: ['A24', 'Neon', 'MUBI'],
    createdAt: '2026-01-28T18:00:00Z',
    updatedAt: '2026-02-01T11:30:00Z',
    status: 'draft'
  },
  {
    id: 'proj-3',
    title: 'The Swimmers',
    logline: 'A coming-of-age story about three teenage girls training for the Olympic trials while navigating first love.',
    genre: 'Drama',
    budgetRange: '<$1M',
    directorProfile: 'First feature',
    visualReferences: [],
    themes: ['Coming of age', 'LGBTQ+', 'Sports', 'Identity'],
    tone: ['Intimate', 'Tender', 'Hopeful'],
    influences: 'Inspired by: Call Me By Your Name, Beach Rats, Aftersun',
    targetStudios: ['A24', 'MUBI', 'Annapurna'],
    createdAt: '2026-02-05T10:00:00Z',
    updatedAt: '2026-02-08T16:45:00Z',
    status: 'matched'
  }
]
