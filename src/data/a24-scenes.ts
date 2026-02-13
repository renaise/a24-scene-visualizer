// Real A24 Film Scenes with TMDb backdrop images
// Using official film stills from The Movie Database

export interface A24Scene {
  id: string
  url: string
  film: string
  timestamp: string
  director: string
  category: string
  year: number
}

export const A24_SCENES: A24Scene[] = [
  {
    id: '1',
    url: 'https://image.tmdb.org/t/p/original/4911T5FbJ9eD2faz00s2lJpyXOq.jpg',
    film: 'Moonlight',
    timestamp: '00:23:45',
    director: 'Barry Jenkins',
    category: 'editorial',
    year: 2016
  },
  {
    id: '2',
    url: 'https://image.tmdb.org/t/p/original/9fmIhbrWhaVGzFRI19MJJDfVL8E.jpg',
    film: 'Hereditary',
    timestamp: '01:12:33',
    director: 'Ari Aster',
    category: 'editorial',
    year: 2018
  },
  {
    id: '3',
    url: 'https://image.tmdb.org/t/p/original/7LEI8ulZzO5gy9Ww2NVCrKmHeDZ.jpg',
    film: 'Midsommar',
    timestamp: '00:45:12',
    director: 'Ari Aster',
    category: 'editorial',
    year: 2019
  },
  {
    id: '4',
    url: 'https://image.tmdb.org/t/p/original/sqOPc0rEiLOEa5n4aK6MZpmFGX9.jpg',
    film: 'The Lighthouse',
    timestamp: '00:56:20',
    director: 'Robert Eggers',
    category: 'editorial',
    year: 2019
  },
  {
    id: '5',
    url: 'https://image.tmdb.org/t/p/original/zzWGRw277MNoCs3zhyG3YmYQsXv.jpg',
    film: 'Everything Everywhere All at Once',
    timestamp: '01:34:08',
    director: 'Daniels',
    category: 'editorial',
    year: 2022
  },
  {
    id: '6',
    url: 'https://image.tmdb.org/t/p/original/cQBJIteRJhJeapaMeZ0G4gUkRj6.jpg',
    film: 'Lady Bird',
    timestamp: '00:18:42',
    director: 'Greta Gerwig',
    category: 'personal',
    year: 2017
  },
  {
    id: '7',
    url: 'https://image.tmdb.org/t/p/original/r9rUeqd89JWdtzqHLcVqfmvglRC.jpg',
    film: 'The Witch',
    timestamp: '00:32:15',
    director: 'Robert Eggers',
    category: 'editorial',
    year: 2015
  },
  {
    id: '8',
    url: 'https://image.tmdb.org/t/p/original/bMnRSNY5bT1kLNDL6bFIa4MrOaT.jpg',
    film: 'Uncut Gems',
    timestamp: '01:05:30',
    director: 'Safdie Brothers',
    category: 'editorial',
    year: 2019
  },
  {
    id: '9',
    url: 'https://image.tmdb.org/t/p/original/9yVuJHhFdDXHzI2VfQUMbS8kgr1.jpg',
    film: 'Ex Machina',
    timestamp: '00:42:18',
    director: 'Alex Garland',
    category: 'editorial',
    year: 2014
  },
  {
    id: '10',
    url: 'https://image.tmdb.org/t/p/original/qAKgrNSNMmM1AtuCGBHhF5m4dP1.jpg',
    film: 'The Florida Project',
    timestamp: '00:28:50',
    director: 'Sean Baker',
    category: 'personal',
    year: 2017
  },
  {
    id: '11',
    url: 'https://image.tmdb.org/t/p/original/5nX6rUL8M7pAvUBNqoLR9wTdKZV.jpg',
    film: 'A Ghost Story',
    timestamp: '00:52:30',
    director: 'David Lowery',
    category: 'editorial',
    year: 2017
  },
  {
    id: '12',
    url: 'https://image.tmdb.org/t/p/original/xwJUThK2jGIW5iq9Y97VCW8iSzw.jpg',
    film: 'Eighth Grade',
    timestamp: '00:15:22',
    director: 'Bo Burnham',
    category: 'personal',
    year: 2018
  },
  {
    id: '13',
    url: 'https://image.tmdb.org/t/p/original/3z1PPLZwyBmBnM2A3HzJJEEDHhL.jpg',
    film: 'Spring Breakers',
    timestamp: '00:38:12',
    director: 'Harmony Korine',
    category: 'editorial',
    year: 2012
  },
  {
    id: '14',
    url: 'https://image.tmdb.org/t/p/original/7WqKz5hDFBBvDGtj0YPCShgAvlJ.jpg',
    film: 'Under the Skin',
    timestamp: '01:08:22',
    director: 'Jonathan Glazer',
    category: 'editorial',
    year: 2013
  },
  {
    id: '15',
    url: 'https://image.tmdb.org/t/p/original/fJBZNm61gNbPjJqIXQZaHZYEPcI.jpg',
    film: 'First Reformed',
    timestamp: '00:42:50',
    director: 'Paul Schrader',
    category: 'editorial',
    year: 2017
  },
  {
    id: '16',
    url: 'https://image.tmdb.org/t/p/original/jj7fCF08tAhHVWMATmJ5evmLVvL.jpg',
    film: 'The Lobster',
    timestamp: '00:25:18',
    director: 'Yorgos Lanthimos',
    category: 'editorial',
    year: 2015
  },
  {
    id: '17',
    url: 'https://image.tmdb.org/t/p/original/8x0EqikJenPbdX9f6Kq6GLVmTQB.jpg',
    film: 'Waves',
    timestamp: '01:22:45',
    director: 'Trey Edward Shults',
    category: 'personal',
    year: 2019
  },
  {
    id: '18',
    url: 'https://image.tmdb.org/t/p/original/8v7Y9KTc9YUkf5d6vxcQv0y6TJP.jpg',
    film: 'Room',
    timestamp: '00:52:10',
    director: 'Lenny Abrahamson',
    category: 'editorial',
    year: 2015
  }
]

export const CATEGORIES = [
  { name: 'Daily life', count: 127, slug: 'daily' },
  { name: 'Editorial', count: 18, slug: 'editorial' },
  { name: 'Personal', count: 19, slug: 'personal' },
  { name: 'Travel', count: 43, slug: 'travel' },
  { name: 'Weddings', count: 25, slug: 'weddings' }
]
