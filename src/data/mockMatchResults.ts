import type { MatchResults } from '../types/project'

export const MOCK_MATCH_RESULTS: Record<string, MatchResults> = {
  'proj-1': {
    projectId: 'proj-1',
    projectTitle: 'The Inheritance',
    analyzedAt: '2026-02-13T09:15:00Z',
    totalSimilar: 47,
    matches: [
      {
        studio: 'A24',
        matchPercentage: 89,
        acceptanceRate: 26,
        similarProjects: 12,
        totalAnalyzed: 47,
        strengths: [
          'Visual style matches Midsommar',
          'Budget ($9M) in their range',
          'First-time director (they love this)',
          'Female protagonist (current priority)'
        ],
        warnings: [],
        recommendation: 'strong',
        contact: 'development@a24films.com',
        bestWindow: 'Q1/Q2 (horror season)'
      },
      {
        studio: 'Neon',
        matchPercentage: 67,
        acceptanceRate: 17,
        similarProjects: 8,
        totalAnalyzed: 47,
        strengths: [
          'Tone matches their prestige horror',
          'International setting (they like this)'
        ],
        warnings: [
          'Budget high for Neon (prefer <$5M)'
        ],
        recommendation: 'good',
        contact: 'submissions@neonrated.com',
        bestWindow: 'Consider if A24 passes'
      },
      {
        studio: 'Netflix',
        matchPercentage: 34,
        acceptanceRate: 6,
        similarProjects: 3,
        totalAnalyzed: 47,
        strengths: [],
        warnings: [
          'Budget too low ($9M < their $15M min)',
          'Art house tone (Netflix wants broader)'
        ],
        recommendation: 'skip'
      }
    ]
  },
  'proj-3': {
    projectId: 'proj-3',
    projectTitle: 'The Swimmers',
    analyzedAt: '2026-02-08T16:45:00Z',
    totalSimilar: 38,
    matches: [
      {
        studio: 'A24',
        matchPercentage: 82,
        acceptanceRate: 21,
        similarProjects: 8,
        totalAnalyzed: 38,
        strengths: [
          'LGBTQ+ themes align with brand',
          'Coming-of-age focus (strong track record)',
          'Micro-budget success potential'
        ],
        warnings: [
          'Sports angle less common for A24'
        ],
        recommendation: 'strong',
        contact: 'development@a24films.com',
        bestWindow: 'Year-round (character-driven drama)'
      },
      {
        studio: 'MUBI',
        matchPercentage: 78,
        acceptanceRate: 31,
        similarProjects: 12,
        totalAnalyzed: 38,
        strengths: [
          'Perfect for MUBI\'s intimate storytelling',
          'Budget ideal for their model',
          'International appeal'
        ],
        warnings: [],
        recommendation: 'strong',
        contact: 'acquisitions@mubi.com',
        bestWindow: 'Submit after festival premiere'
      },
      {
        studio: 'Annapurna',
        matchPercentage: 71,
        acceptanceRate: 19,
        similarProjects: 7,
        totalAnalyzed: 38,
        strengths: [
          'Character-driven narrative',
          'Female-focused story'
        ],
        warnings: [
          'Budget might be too low',
          'Recent financial challenges'
        ],
        recommendation: 'good'
      }
    ]
  }
}
