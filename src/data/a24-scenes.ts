// CineBox Film Database - Diverse cinema across studios
// Curated collection of iconic frames from world cinema

export interface FilmScene {
  id: string
  url: string
  film: string
  timestamp: string
  director: string
  cinematographer?: string
  aspectRatio?: string
  studio: string
  year: number
  tags: {
    composition: string[]
    color: string[]
    shotType: string[]
    mood: string[]
  }
}

export const FILM_SCENES: FilmScene[] = [
  // A24 Collection
  {
    id: '1',
    url: 'https://image.tmdb.org/t/p/original/4911T5FbJ9eD2faz00s2lJpyXOq.jpg',
    film: 'Moonlight',
    timestamp: '00:23:45',
    director: 'Barry Jenkins',
    cinematographer: 'James Laxton',
    aspectRatio: '2.39:1',
    studio: 'A24',
    year: 2016,
    tags: {
      composition: ['rule-of-thirds', 'centered'],
      color: ['blue', 'teal'],
      shotType: ['close-up', 'portrait'],
      mood: ['intimate', 'melancholic']
    }
  },
  {
    id: '2',
    url: 'https://image.tmdb.org/t/p/original/9fmIhbrWhaVGzFRI19MJJDfVL8E.jpg',
    film: 'Hereditary',
    timestamp: '01:12:33',
    director: 'Ari Aster',
    cinematographer: 'Pawel Pogorzelski',
    aspectRatio: '2.00:1',
    studio: 'A24',
    year: 2018,
    tags: {
      composition: ['symmetrical', 'centered'],
      color: ['dark', 'red'],
      shotType: ['wide', 'interior'],
      mood: ['tense', 'horror']
    }
  },
  {
    id: '3',
    url: 'https://image.tmdb.org/t/p/original/7LEI8ulZzO5gy9Ww2NVCrKmHeDZ.jpg',
    film: 'Midsommar',
    timestamp: '00:45:12',
    director: 'Ari Aster',
    cinematographer: 'Pawel Pogorzelski',
    aspectRatio: '2.00:1',
    studio: 'A24',
    year: 2019,
    tags: {
      composition: ['centered', 'symmetrical'],
      color: ['bright', 'yellow', 'white'],
      shotType: ['medium', 'exterior'],
      mood: ['unsettling', 'bright']
    }
  },
  {
    id: '4',
    url: 'https://image.tmdb.org/t/p/original/sqOPc0rEiLOEa5n4aK6MZpmFGX9.jpg',
    film: 'The Lighthouse',
    timestamp: '00:56:20',
    director: 'Robert Eggers',
    cinematographer: 'Jarin Blaschke',
    aspectRatio: '1.19:1',
    studio: 'A24',
    year: 2019,
    tags: {
      composition: ['centered', 'vertical'],
      color: ['black-white', 'monochrome'],
      shotType: ['wide', 'exterior'],
      mood: ['isolated', 'dramatic']
    }
  },
  {
    id: '5',
    url: 'https://image.tmdb.org/t/p/original/zzWGRw277MNoCs3zhyG3YmYQsXv.jpg',
    film: 'Everything Everywhere All at Once',
    timestamp: '01:34:08',
    director: 'Daniels',
    cinematographer: 'Larkin Seiple',
    aspectRatio: '2.39:1',
    studio: 'A24',
    year: 2022,
    tags: {
      composition: ['chaotic', 'layered'],
      color: ['vibrant', 'multicolor'],
      shotType: ['close-up', 'abstract'],
      mood: ['surreal', 'energetic']
    }
  },
  {
    id: '6',
    url: 'https://image.tmdb.org/t/p/original/cQBJIteRJhJeapaMeZ0G4gUkRj6.jpg',
    film: 'Lady Bird',
    timestamp: '00:18:42',
    director: 'Greta Gerwig',
    cinematographer: 'Sam Levy',
    aspectRatio: '1.85:1',
    studio: 'A24',
    year: 2017,
    tags: {
      composition: ['rule-of-thirds', 'natural'],
      color: ['warm', 'pink'],
      shotType: ['medium', 'portrait'],
      mood: ['intimate', 'tender']
    }
  },
  {
    id: '7',
    url: 'https://image.tmdb.org/t/p/original/r9rUeqd89JWdtzqHLcVqfmvglRC.jpg',
    film: 'The Witch',
    timestamp: '00:32:15',
    director: 'Robert Eggers',
    cinematographer: 'Jarin Blaschke',
    aspectRatio: '1.66:1',
    studio: 'A24',
    year: 2015,
    tags: {
      composition: ['centered', 'isolated'],
      color: ['dark', 'grey', 'muted'],
      shotType: ['wide', 'exterior'],
      mood: ['ominous', 'isolated']
    }
  },
  {
    id: '8',
    url: 'https://image.tmdb.org/t/p/original/bMnRSNY5bT1kLNDL6bFIa4MrOaT.jpg',
    film: 'Uncut Gems',
    timestamp: '01:05:30',
    director: 'Safdie Brothers',
    cinematographer: 'Darius Khondji',
    aspectRatio: '2.39:1',
    studio: 'A24',
    year: 2019,
    tags: {
      composition: ['tight', 'claustrophobic'],
      color: ['neon', 'red', 'blue'],
      shotType: ['close-up', 'interior'],
      mood: ['tense', 'frenetic']
    }
  },
  {
    id: '9',
    url: 'https://image.tmdb.org/t/p/original/9yVuJHhFdDXHzI2VfQUMbS8kgr1.jpg',
    film: 'Ex Machina',
    timestamp: '00:42:18',
    director: 'Alex Garland',
    cinematographer: 'Rob Hardy',
    aspectRatio: '2.35:1',
    studio: 'A24',
    year: 2014,
    tags: {
      composition: ['minimalist', 'symmetrical'],
      color: ['cool', 'grey', 'blue'],
      shotType: ['medium', 'interior'],
      mood: ['sterile', 'contemplative']
    }
  },
  {
    id: '10',
    url: 'https://image.tmdb.org/t/p/original/qAKgrNSNMmM1AtuCGBHhF5m4dP1.jpg',
    film: 'The Florida Project',
    timestamp: '00:28:50',
    director: 'Sean Baker',
    studio: 'A24',
    year: 2017,
    tags: {
      composition: ['natural', 'candid'],
      color: ['pastel', 'purple', 'pink'],
      shotType: ['wide', 'exterior'],
      mood: ['innocent', 'nostalgic']
    }
  },

  // Criterion Collection
  {
    id: '11',
    url: 'https://image.tmdb.org/t/p/original/fL96wTn7TzmwaijGk3f4MKPaIbh.jpg',
    film: 'In the Mood for Love',
    timestamp: '00:45:30',
    director: 'Wong Kar-wai',
    cinematographer: 'Christopher Doyle',
    aspectRatio: '1.66:1',
    studio: 'Criterion',
    year: 2000,
    tags: {
      composition: ['framed', 'intimate'],
      color: ['red', 'warm'],
      shotType: ['medium', 'interior'],
      mood: ['romantic', 'melancholic']
    }
  },
  {
    id: '12',
    url: 'https://image.tmdb.org/t/p/original/pMwZsuPTYQd3HZVN1fVJQZAhLsU.jpg',
    film: 'Chungking Express',
    timestamp: '00:32:15',
    director: 'Wong Kar-wai',
    studio: 'Criterion',
    year: 1994,
    tags: {
      composition: ['dynamic', 'motion-blur'],
      color: ['neon', 'vibrant'],
      shotType: ['close-up', 'handheld'],
      mood: ['energetic', 'urban']
    }
  },
  {
    id: '13',
    url: 'https://image.tmdb.org/t/p/original/dJVFI5vYyMqeXBnl6FpdRBx1vK5.jpg',
    film: 'Paris, Texas',
    timestamp: '01:15:22',
    director: 'Wim Wenders',
    studio: 'Criterion',
    year: 1984,
    tags: {
      composition: ['rule-of-thirds', 'horizon'],
      color: ['warm', 'desert', 'red'],
      shotType: ['wide', 'landscape'],
      mood: ['isolated', 'contemplative']
    }
  },
  {
    id: '14',
    url: 'https://image.tmdb.org/t/p/original/4NQO05b0eXBT6Y8IkEDDPdx07qp.jpg',
    film: 'The Grand Budapest Hotel',
    timestamp: '00:28:45',
    director: 'Wes Anderson',
    studio: 'Fox Searchlight',
    year: 2014,
    tags: {
      composition: ['symmetrical', 'centered'],
      color: ['pastel', 'pink', 'purple'],
      shotType: ['wide', 'interior'],
      mood: ['whimsical', 'meticulous']
    }
  },
  {
    id: '15',
    url: 'https://image.tmdb.org/t/p/original/7sZME0v67yImGOPnhEVXx76xQuq.jpg',
    film: 'Blade Runner 2049',
    timestamp: '01:42:30',
    director: 'Denis Villeneuve',
    cinematographer: 'Roger Deakins',
    aspectRatio: '2.39:1',
    studio: 'Warner Bros',
    year: 2017,
    tags: {
      composition: ['minimalist', 'centered'],
      color: ['orange', 'yellow', 'hazy'],
      shotType: ['wide', 'landscape'],
      mood: ['desolate', 'epic']
    }
  },
  {
    id: '16',
    url: 'https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg',
    film: 'Drive',
    timestamp: '00:52:10',
    director: 'Nicolas Winding Refn',
    studio: 'FilmDistrict',
    year: 2011,
    tags: {
      composition: ['centered', 'frontal'],
      color: ['neon', 'pink', 'blue'],
      shotType: ['medium', 'portrait'],
      mood: ['cool', 'stylized']
    }
  },
  {
    id: '17',
    url: 'https://image.tmdb.org/t/p/original/mxwNdJJmWr6wZJPqZGpxY7GJLbn.jpg',
    film: 'Her',
    timestamp: '01:05:45',
    director: 'Spike Jonze',
    studio: 'Warner Bros',
    year: 2013,
    tags: {
      composition: ['rule-of-thirds', 'natural'],
      color: ['warm', 'orange', 'soft'],
      shotType: ['medium', 'portrait'],
      mood: ['intimate', 'lonely']
    }
  },
  {
    id: '18',
    url: 'https://image.tmdb.org/t/p/original/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
    film: 'Fight Club',
    timestamp: '01:22:33',
    director: 'David Fincher',
    studio: '20th Century Fox',
    year: 1999,
    tags: {
      composition: ['dynamic', 'low-angle'],
      color: ['cool', 'green', 'dark'],
      shotType: ['wide', 'dramatic'],
      mood: ['gritty', 'rebellious']
    }
  },
  {
    id: '19',
    url: 'https://image.tmdb.org/t/p/original/9ZGW6W78YBklM4X5p7YO4Usc9xd.jpg',
    film: 'Amélie',
    timestamp: '00:35:20',
    director: 'Jean-Pierre Jeunet',
    studio: 'UGC',
    year: 2001,
    tags: {
      composition: ['centered', 'whimsical'],
      color: ['warm', 'green', 'red'],
      shotType: ['medium', 'interior'],
      mood: ['whimsical', 'romantic']
    }
  },
  {
    id: '20',
    url: 'https://image.tmdb.org/t/p/original/fCayJrkfRaCRCTh8GqN30f8oyQF.jpg',
    film: 'Children of Men',
    timestamp: '01:15:10',
    director: 'Alfonso Cuarón',
    studio: 'Universal',
    year: 2006,
    tags: {
      composition: ['chaotic', 'handheld'],
      color: ['grey', 'muted', 'desaturated'],
      shotType: ['wide', 'action'],
      mood: ['dystopian', 'urgent']
    }
  },
  {
    id: '21',
    url: 'https://image.tmdb.org/t/p/original/7OKRu87N1YIXjgHRLWl85L5Vjz0.jpg',
    film: 'The Tree of Life',
    timestamp: '00:48:30',
    director: 'Terrence Malick',
    studio: 'Fox Searchlight',
    year: 2011,
    tags: {
      composition: ['natural', 'ethereal'],
      color: ['warm', 'golden'],
      shotType: ['wide', 'landscape'],
      mood: ['contemplative', 'spiritual']
    }
  },
  {
    id: '22',
    url: 'https://image.tmdb.org/t/p/original/gNBCvtYyGPbjPCT1k3MvJuNuXR6.jpg',
    film: 'Mad Max: Fury Road',
    timestamp: '01:08:45',
    director: 'George Miller',
    studio: 'Warner Bros',
    year: 2015,
    tags: {
      composition: ['dynamic', 'diagonal'],
      color: ['orange', 'blue', 'high-contrast'],
      shotType: ['wide', 'action'],
      mood: ['intense', 'explosive']
    }
  },
  {
    id: '23',
    url: 'https://image.tmdb.org/t/p/original/e1mjopzAS2KNsvpbpahQ1a6SkSn.jpg',
    film: 'Roma',
    timestamp: '00:42:15',
    director: 'Alfonso Cuarón',
    studio: 'Netflix',
    year: 2018,
    tags: {
      composition: ['centered', 'minimalist'],
      color: ['black-white', 'monochrome'],
      shotType: ['wide', 'interior'],
      mood: ['intimate', 'observational']
    }
  },
  {
    id: '24',
    url: 'https://image.tmdb.org/t/p/original/AmR3JG1VQVxU8TfAvljUhfSFUOx.jpg',
    film: 'There Will Be Blood',
    timestamp: '01:52:20',
    director: 'Paul Thomas Anderson',
    studio: 'Paramount',
    year: 2007,
    tags: {
      composition: ['wide', 'epic'],
      color: ['warm', 'sepia', 'desert'],
      shotType: ['wide', 'landscape'],
      mood: ['epic', 'isolated']
    }
  },
  {
    id: '25',
    url: 'https://image.tmdb.org/t/p/original/llaEl8bLwjPsdJJdQo2LTDADnDU.jpg',
    film: 'Lost in Translation',
    timestamp: '00:38:45',
    director: 'Sofia Coppola',
    studio: 'Focus Features',
    year: 2003,
    tags: {
      composition: ['framed', 'silhouette'],
      color: ['cool', 'blue', 'neon'],
      shotType: ['wide', 'interior'],
      mood: ['lonely', 'contemplative']
    }
  },
  {
    id: '26',
    url: 'https://image.tmdb.org/t/p/original/gPz4S3O7ppXX6vdlEUz9vEyDlNW.jpg',
    film: 'Arrival',
    timestamp: '01:12:30',
    director: 'Denis Villeneuve',
    studio: 'Paramount',
    year: 2016,
    tags: {
      composition: ['symmetrical', 'centered'],
      color: ['grey', 'muted', 'fog'],
      shotType: ['wide', 'exterior'],
      mood: ['mysterious', 'contemplative']
    }
  },
  {
    id: '27',
    url: 'https://image.tmdb.org/t/p/original/3TS1cD31h2FxkXlFMhJW3gfDU9E.jpg',
    film: 'Interstellar',
    timestamp: '02:15:40',
    director: 'Christopher Nolan',
    studio: 'Paramount',
    year: 2014,
    tags: {
      composition: ['centered', 'epic'],
      color: ['black', 'white', 'space'],
      shotType: ['wide', 'cosmic'],
      mood: ['epic', 'awe']
    }
  },
  {
    id: '28',
    url: 'https://image.tmdb.org/t/p/original/t9XMmGxnHq08vqunFaqMjIaJJIM.jpg',
    film: 'The Shape of Water',
    timestamp: '00:55:20',
    director: 'Guillermo del Toro',
    studio: 'Fox Searchlight',
    year: 2017,
    tags: {
      composition: ['symmetrical', 'elegant'],
      color: ['teal', 'green', 'aquatic'],
      shotType: ['medium', 'interior'],
      mood: ['romantic', 'fantastical']
    }
  },
  {
    id: '29',
    url: 'https://image.tmdb.org/t/p/original/ilRyazdMJwN05exqhwK4tMKBYZs.jpg',
    film: 'Birdman',
    timestamp: '01:32:15',
    director: 'Alejandro González Iñárritu',
    studio: 'Fox Searchlight',
    year: 2014,
    tags: {
      composition: ['tight', 'claustrophobic'],
      color: ['warm', 'theatrical'],
      shotType: ['medium', 'interior'],
      mood: ['intense', 'theatrical']
    }
  },
  {
    id: '30',
    url: 'https://image.tmdb.org/t/p/original/v5CEt88iDsuoMaW1Q5hGDEw0RYz.jpg',
    film: 'Parasite',
    timestamp: '01:25:30',
    director: 'Bong Joon-ho',
    studio: 'Neon',
    year: 2019,
    tags: {
      composition: ['symmetrical', 'architectural'],
      color: ['cool', 'grey', 'minimalist'],
      shotType: ['wide', 'interior'],
      mood: ['tense', 'meticulous']
    }
  },
  {
    id: '31',
    url: 'https://image.tmdb.org/t/p/original/sN1epPGk3zZPg3lbRO00xFVljuZ.jpg',
    film: 'Whiplash',
    timestamp: '01:05:45',
    director: 'Damien Chazelle',
    studio: 'Sony Pictures',
    year: 2014,
    tags: {
      composition: ['tight', 'close-up'],
      color: ['warm', 'yellow', 'dark'],
      shotType: ['close-up', 'portrait'],
      mood: ['intense', 'obsessive']
    }
  },
  {
    id: '32',
    url: 'https://image.tmdb.org/t/p/original/qsY77l19XOrYGJOzU6biR7FrCdL.jpg',
    film: 'La La Land',
    timestamp: '01:42:20',
    director: 'Damien Chazelle',
    studio: 'Lionsgate',
    year: 2016,
    tags: {
      composition: ['centered', 'romantic'],
      color: ['blue', 'purple', 'dreamy'],
      shotType: ['wide', 'exterior'],
      mood: ['romantic', 'dreamy']
    }
  },
  {
    id: '33',
    url: 'https://image.tmdb.org/t/p/original/xBKGJQsAIeweesB79KC89FpBrVr.jpg',
    film: 'The Revenant',
    timestamp: '01:28:15',
    director: 'Alejandro González Iñárritu',
    studio: '20th Century Fox',
    year: 2015,
    tags: {
      composition: ['natural', 'wide'],
      color: ['cool', 'blue', 'snow'],
      shotType: ['wide', 'landscape'],
      mood: ['brutal', 'survival']
    }
  },
  {
    id: '34',
    url: 'https://image.tmdb.org/t/p/original/cSYLX73WskxCgvpN3MtRkYUSj1T.jpg',
    film: 'The Master',
    timestamp: '01:15:30',
    director: 'Paul Thomas Anderson',
    studio: 'Weinstein Company',
    year: 2012,
    tags: {
      composition: ['portrait', 'intimate'],
      color: ['warm', 'vintage'],
      shotType: ['medium', 'portrait'],
      mood: ['intense', 'psychological']
    }
  },
  {
    id: '35',
    url: 'https://image.tmdb.org/t/p/original/xjH1bPpj1h8TJBCkWb8Nv0kxl7p.jpg',
    film: 'Sicario',
    timestamp: '01:32:45',
    director: 'Denis Villeneuve',
    studio: 'Lionsgate',
    year: 2015,
    tags: {
      composition: ['wide', 'tactical'],
      color: ['cool', 'desaturated'],
      shotType: ['wide', 'exterior'],
      mood: ['tense', 'procedural']
    }
  },
  {
    id: '36',
    url: 'https://image.tmdb.org/t/p/original/nDwZOCDfYPmpXKRrJkJ3JmDznLm.jpg',
    film: 'Carol',
    timestamp: '00:48:20',
    director: 'Todd Haynes',
    studio: 'Weinstein Company',
    year: 2015,
    tags: {
      composition: ['framed', 'reflective'],
      color: ['warm', 'vintage', 'muted'],
      shotType: ['medium', 'portrait'],
      mood: ['romantic', 'elegant']
    }
  },
  {
    id: '37',
    url: 'https://image.tmdb.org/t/p/original/dUMxMlKwu5f5W4Y8Wt5jjb5XcLl.jpg',
    film: 'Prisoners',
    timestamp: '01:45:15',
    director: 'Denis Villeneuve',
    studio: 'Warner Bros',
    year: 2013,
    tags: {
      composition: ['dark', 'centered'],
      color: ['dark', 'grey', 'rain'],
      shotType: ['wide', 'exterior'],
      mood: ['dark', 'suspenseful']
    }
  },
  {
    id: '38',
    url: 'https://image.tmdb.org/t/p/original/sOlG7KfJoKwpf2EBMdOCznUHoVM.jpg',
    film: 'A Separation',
    timestamp: '00:52:30',
    director: 'Asghar Farhadi',
    studio: 'Sony Pictures Classics',
    year: 2011,
    tags: {
      composition: ['natural', 'observational'],
      color: ['muted', 'realistic'],
      shotType: ['medium', 'interior'],
      mood: ['tense', 'realistic']
    }
  },
  {
    id: '39',
    url: 'https://image.tmdb.org/t/p/original/gdvOxV1Z5OFa1rQrJMR2MOj1uQI.jpg',
    film: 'Black Swan',
    timestamp: '01:28:40',
    director: 'Darren Aronofsky',
    studio: 'Fox Searchlight',
    year: 2010,
    tags: {
      composition: ['centered', 'mirror'],
      color: ['dark', 'black-white'],
      shotType: ['close-up', 'portrait'],
      mood: ['psychological', 'obsessive']
    }
  },
  {
    id: '40',
    url: 'https://image.tmdb.org/t/p/original/fUbzJ3YbQxFv3LJdPzuchncpSIJ.jpg',
    film: 'No Country for Old Men',
    timestamp: '01:12:20',
    director: 'Coen Brothers',
    studio: 'Miramax',
    year: 2007,
    tags: {
      composition: ['wide', 'desolate'],
      color: ['warm', 'desert', 'brown'],
      shotType: ['wide', 'landscape'],
      mood: ['tense', 'desolate']
    }
  },
  {
    id: '41',
    url: 'https://image.tmdb.org/t/p/original/apm4GYz9U9bJy2ykI7evBg17bR6.jpg',
    film: 'The Social Network',
    timestamp: '00:42:15',
    director: 'David Fincher',
    studio: 'Columbia Pictures',
    year: 2010,
    tags: {
      composition: ['tight', 'dialogue'],
      color: ['cool', 'blue', 'digital'],
      shotType: ['medium', 'interior'],
      mood: ['sharp', 'contemporary']
    }
  },
  {
    id: '42',
    url: 'https://image.tmdb.org/t/p/original/4lPicWlvnYKLaYgLWHVtbcPjXVA.jpg',
    film: 'The Handmaiden',
    timestamp: '01:35:20',
    director: 'Park Chan-wook',
    studio: 'CJ Entertainment',
    year: 2016,
    tags: {
      composition: ['elegant', 'symmetrical'],
      color: ['rich', 'red', 'ornate'],
      shotType: ['wide', 'interior'],
      mood: ['sensual', 'elegant']
    }
  },
  {
    id: '43',
    url: 'https://image.tmdb.org/t/p/original/yEE3dSBj8IzFzDKkdN5y8FG0VWJ.jpg',
    film: 'Portrait of a Lady on Fire',
    timestamp: '01:05:30',
    director: 'Céline Sciamma',
    studio: 'Pyramide',
    year: 2019,
    tags: {
      composition: ['framed', 'painterly'],
      color: ['warm', 'natural', 'candlelight'],
      shotType: ['medium', 'portrait'],
      mood: ['romantic', 'intimate']
    }
  },
  {
    id: '44',
    url: 'https://image.tmdb.org/t/p/original/mUMFGiAp1fyMUQJSJUZ2W9Fp1w9.jpg',
    film: 'Call Me by Your Name',
    timestamp: '01:22:15',
    director: 'Luca Guadagnino',
    studio: 'Sony Pictures Classics',
    year: 2017,
    tags: {
      composition: ['natural', 'summer'],
      color: ['warm', 'golden', 'sun'],
      shotType: ['medium', 'exterior'],
      mood: ['romantic', 'nostalgic']
    }
  },
  {
    id: '45',
    url: 'https://image.tmdb.org/t/p/original/aRcYxEaKPT9fZJfJIYG9YkFmEw8.jpg',
    film: 'The Favourite',
    timestamp: '00:58:30',
    director: 'Yorgos Lanthimos',
    studio: 'Fox Searchlight',
    year: 2018,
    tags: {
      composition: ['wide-angle', 'distorted'],
      color: ['cool', 'period', 'ornate'],
      shotType: ['wide', 'interior'],
      mood: ['absurd', 'dark-comedy']
    }
  },
  {
    id: '46',
    url: 'https://image.tmdb.org/t/p/original/gcbKP5kWU08p7f6eVWwbYXbPOZt.jpg',
    film: 'The Double Life of Véronique',
    timestamp: '00:42:45',
    director: 'Krzysztof Kieślowski',
    studio: 'Criterion',
    year: 1991,
    tags: {
      composition: ['ethereal', 'soft'],
      color: ['warm', 'golden', 'hazy'],
      shotType: ['close-up', 'portrait'],
      mood: ['mystical', 'romantic']
    }
  },
  {
    id: '47',
    url: 'https://image.tmdb.org/t/p/original/7cDrKlAZCW1wl3tLwbFWD1pLlR9.jpg',
    film: 'Burning',
    timestamp: '01:48:20',
    director: 'Lee Chang-dong',
    studio: 'CGV Arthouse',
    year: 2018,
    tags: {
      composition: ['minimalist', 'distant'],
      color: ['cool', 'desaturated'],
      shotType: ['wide', 'landscape'],
      mood: ['mysterious', 'contemplative']
    }
  },
  {
    id: '48',
    url: 'https://image.tmdb.org/t/p/original/3oOakj2RuKMRCPQ17VQPHLPA9mM.jpg',
    film: 'The Neon Demon',
    timestamp: '01:15:45',
    director: 'Nicolas Winding Refn',
    studio: 'Amazon Studios',
    year: 2016,
    tags: {
      composition: ['symmetrical', 'geometric'],
      color: ['neon', 'blue', 'red'],
      shotType: ['wide', 'stylized'],
      mood: ['surreal', 'hypnotic']
    }
  },
  {
    id: '49',
    url: 'https://image.tmdb.org/t/p/original/pSY8mzxHQb93qGQJpWrrcqkV0Um.jpg',
    film: 'Only God Forgives',
    timestamp: '00:52:30',
    director: 'Nicolas Winding Refn',
    studio: 'Radius-TWC',
    year: 2013,
    tags: {
      composition: ['symmetrical', 'frontal'],
      color: ['red', 'neon', 'dark'],
      shotType: ['medium', 'interior'],
      mood: ['stylized', 'violent']
    }
  },
  {
    id: '50',
    url: 'https://image.tmdb.org/t/p/original/zvJGi5kSTkGtl56B5b8BRfFaZhH.jpg',
    film: 'Under the Silver Lake',
    timestamp: '01:32:15',
    director: 'David Robert Mitchell',
    studio: 'A24',
    year: 2018,
    tags: {
      composition: ['wide', 'urban'],
      color: ['vibrant', 'los-angeles'],
      shotType: ['wide', 'exterior'],
      mood: ['surreal', 'neo-noir']
    }
  },
  {
    id: '51',
    url: 'https://image.tmdb.org/t/p/original/gwj4R8Uy1GwejKqfofREKI9Jh7L.jpg',
    film: 'Mandy',
    timestamp: '01:05:20',
    director: 'Panos Cosmatos',
    studio: 'RLJE Films',
    year: 2018,
    tags: {
      composition: ['centered', 'surreal'],
      color: ['red', 'psychedelic'],
      shotType: ['wide', 'stylized'],
      mood: ['psychedelic', 'violent']
    }
  },
  {
    id: '52',
    url: 'https://image.tmdb.org/t/p/original/wKiOkQ7V0ilp6H9Omyz9SWvf7ky.jpg',
    film: 'It Follows',
    timestamp: '00:38:45',
    director: 'David Robert Mitchell',
    studio: 'Radius-TWC',
    year: 2014,
    tags: {
      composition: ['wide', 'suburban'],
      color: ['muted', 'autumn'],
      shotType: ['wide', 'exterior'],
      mood: ['eerie', 'suspenseful']
    }
  },
  {
    id: '53',
    url: 'https://image.tmdb.org/t/p/original/t5zCBSB5xMDKcDqe91qahCOUYVV.jpg',
    film: 'Raw',
    timestamp: '00:55:30',
    director: 'Julia Ducournau',
    studio: 'Focus World',
    year: 2016,
    tags: {
      composition: ['tight', 'visceral'],
      color: ['red', 'flesh'],
      shotType: ['close-up', 'body'],
      mood: ['disturbing', 'visceral']
    }
  },
  {
    id: '54',
    url: 'https://image.tmdb.org/t/p/original/rqbPnmGJfZg5DUpQqGSVvp20nLj.jpg',
    film: 'Good Time',
    timestamp: '01:12:15',
    director: 'Safdie Brothers',
    studio: 'A24',
    year: 2017,
    tags: {
      composition: ['tight', 'frenetic'],
      color: ['neon', 'red', 'urban'],
      shotType: ['close-up', 'handheld'],
      mood: ['intense', 'frenetic']
    }
  },
  {
    id: '55',
    url: 'https://image.tmdb.org/t/p/original/r9lj72hjohCE4RtJVcKx3NVQGZS.jpg',
    film: 'The Killing of a Sacred Deer',
    timestamp: '01:25:40',
    director: 'Yorgos Lanthimos',
    studio: 'A24',
    year: 2017,
    tags: {
      composition: ['symmetrical', 'sterile'],
      color: ['cool', 'clinical'],
      shotType: ['wide', 'interior'],
      mood: ['unsettling', 'sterile']
    }
  },
  {
    id: '56',
    url: 'https://image.tmdb.org/t/p/original/lFwykSz3Ykj1Q3JXJURnGUTNf1o.jpg',
    film: 'The Immigrant',
    timestamp: '00:48:30',
    director: 'James Gray',
    studio: 'Weinstein Company',
    year: 2013,
    tags: {
      composition: ['classical', 'elegant'],
      color: ['warm', 'period', 'sepia'],
      shotType: ['medium', 'portrait'],
      mood: ['melancholic', 'elegant']
    }
  },
  {
    id: '57',
    url: 'https://image.tmdb.org/t/p/original/bx0cKC6gLEw8mOt4HQOV1xCDOoS.jpg',
    film: 'The Duke of Burgundy',
    timestamp: '00:42:20',
    director: 'Peter Strickland',
    studio: 'IFC Films',
    year: 2014,
    tags: {
      composition: ['ornate', 'intimate'],
      color: ['rich', 'vintage'],
      shotType: ['close-up', 'interior'],
      mood: ['sensual', 'retro']
    }
  },
  {
    id: '58',
    url: 'https://image.tmdb.org/t/p/original/5Jt4FKn8IXmfxJCnX9hqGmh8mzP.jpg',
    film: 'We Need to Talk About Kevin',
    timestamp: '01:15:30',
    director: 'Lynne Ramsay',
    studio: 'Oscilloscope',
    year: 2011,
    tags: {
      composition: ['tight', 'psychological'],
      color: ['red', 'intense'],
      shotType: ['close-up', 'portrait'],
      mood: ['disturbing', 'psychological']
    }
  },
  {
    id: '59',
    url: 'https://image.tmdb.org/t/p/original/mP8SMn3HN4p7cFaXdMa23GlqiVx.jpg',
    film: 'High Life',
    timestamp: '01:05:45',
    director: 'Claire Denis',
    studio: 'A24',
    year: 2018,
    tags: {
      composition: ['minimalist', 'isolated'],
      color: ['cool', 'sterile', 'space'],
      shotType: ['wide', 'interior'],
      mood: ['isolated', 'contemplative']
    }
  },
  {
    id: '60',
    url: 'https://image.tmdb.org/t/p/original/5gj7Y26RgwoBFGOl9Z6H7G29wfK.jpg',
    film: 'Annihilation',
    timestamp: '01:32:20',
    director: 'Alex Garland',
    studio: 'Paramount',
    year: 2018,
    tags: {
      composition: ['organic', 'surreal'],
      color: ['vibrant', 'alien', 'multicolor'],
      shotType: ['wide', 'cosmic'],
      mood: ['mysterious', 'psychedelic']
    }
  },
  {
    id: '61',
    url: 'https://image.tmdb.org/t/p/original/6oom3SE8AdBQbUYcCq4pN6lG5sQ.jpg',
    film: 'Nightcrawler',
    timestamp: '01:22:15',
    director: 'Dan Gilroy',
    studio: 'Open Road',
    year: 2014,
    tags: {
      composition: ['tight', 'nocturnal'],
      color: ['cool', 'neon', 'la-nights'],
      shotType: ['medium', 'urban'],
      mood: ['dark', 'unsettling']
    }
  },
  {
    id: '62',
    url: 'https://image.tmdb.org/t/p/original/sW4g3pQLbGYbWbOFwgXThaG1FUf.jpg',
    film: 'The Witch',
    timestamp: '00:58:30',
    director: 'Robert Eggers',
    studio: 'A24',
    year: 2015,
    tags: {
      composition: ['wide', 'forest'],
      color: ['dark', 'muted', 'grey'],
      shotType: ['wide', 'exterior'],
      mood: ['ominous', 'period']
    }
  },
  {
    id: '63',
    url: 'https://image.tmdb.org/t/p/original/uuRp6OzJoMqW83JHTX14D1t92Ik.jpg',
    film: 'Stalker',
    timestamp: '01:45:20',
    director: 'Andrei Tarkovsky',
    studio: 'Criterion',
    year: 1979,
    tags: {
      composition: ['wide', 'desolate'],
      color: ['sepia', 'muted'],
      shotType: ['wide', 'landscape'],
      mood: ['contemplative', 'mystical']
    }
  },
  {
    id: '64',
    url: 'https://image.tmdb.org/t/p/original/gqrfVH7CbI7lJPy6vVmjqq8eDqE.jpg',
    film: 'The Handmaiden',
    timestamp: '00:52:15',
    director: 'Park Chan-wook',
    studio: 'CJ Entertainment',
    year: 2016,
    tags: {
      composition: ['framed', 'ornate'],
      color: ['rich', 'vintage'],
      shotType: ['medium', 'interior'],
      mood: ['sensual', 'meticulous']
    }
  },
  {
    id: '65',
    url: 'https://image.tmdb.org/t/p/original/1bhBdNlDp8zJGk0avN4d4nq6y7F.jpg',
    film: 'Phantom Thread',
    timestamp: '01:15:40',
    director: 'Paul Thomas Anderson',
    studio: 'Focus Features',
    year: 2017,
    tags: {
      composition: ['elegant', 'formal'],
      color: ['rich', 'period', 'elegant'],
      shotType: ['medium', 'interior'],
      mood: ['elegant', 'obsessive']
    }
  },
  {
    id: '66',
    url: 'https://image.tmdb.org/t/p/original/3hQKVZ5gJkfO6JiKEqPaOcU4u1Y.jpg',
    film: 'The Witch',
    timestamp: '01:12:30',
    director: 'Robert Eggers',
    studio: 'A24',
    year: 2015,
    tags: {
      composition: ['centered', 'firelight'],
      color: ['dark', 'orange', 'candlelight'],
      shotType: ['medium', 'interior'],
      mood: ['ominous', 'ritualistic']
    }
  },
  {
    id: '67',
    url: 'https://image.tmdb.org/t/p/original/t8K4CzVlDqG9yJ30HzTKKPu6xfD.jpg',
    film: 'Mulholland Drive',
    timestamp: '01:35:20',
    director: 'David Lynch',
    studio: 'Universal',
    year: 2001,
    tags: {
      composition: ['surreal', 'dreamlike'],
      color: ['dark', 'mysterious'],
      shotType: ['wide', 'interior'],
      mood: ['surreal', 'mysterious']
    }
  },
  {
    id: '68',
    url: 'https://image.tmdb.org/t/p/original/4qx2PtJebP1bSu07nRu1dqrR5Lk.jpg',
    film: 'The Lobster',
    timestamp: '00:48:15',
    director: 'Yorgos Lanthimos',
    studio: 'A24',
    year: 2015,
    tags: {
      composition: ['wide', 'absurd'],
      color: ['cool', 'grey', 'muted'],
      shotType: ['wide', 'exterior'],
      mood: ['absurd', 'dystopian']
    }
  },
  {
    id: '69',
    url: 'https://image.tmdb.org/t/p/original/5B5lZ7qp1M4c7J7lNPRvGrI4xJA.jpg',
    film: 'Spring Breakers',
    timestamp: '00:52:30',
    director: 'Harmony Korine',
    studio: 'A24',
    year: 2012,
    tags: {
      composition: ['surreal', 'pop'],
      color: ['neon', 'pink', 'vibrant'],
      shotType: ['wide', 'exterior'],
      mood: ['surreal', 'pop-culture']
    }
  },
  {
    id: '70',
    url: 'https://image.tmdb.org/t/p/original/1E5baAaEse26fej7uHcjOgEE2t2.jpg',
    film: 'Valhalla Rising',
    timestamp: '01:15:45',
    director: 'Nicolas Winding Refn',
    studio: 'IFC Films',
    year: 2009,
    tags: {
      composition: ['wide', 'brutal'],
      color: ['grey', 'muted', 'fog'],
      shotType: ['wide', 'landscape'],
      mood: ['brutal', 'mythic']
    }
  },
  {
    id: '71',
    url: 'https://image.tmdb.org/t/p/original/c6CQ9oPm2pGYx8AaEtRhN1IVCEg.jpg',
    film: 'Enter the Void',
    timestamp: '01:42:30',
    director: 'Gaspar Noé',
    studio: 'IFC Films',
    year: 2009,
    tags: {
      composition: ['aerial', 'psychedelic'],
      color: ['neon', 'vibrant', 'tokyo'],
      shotType: ['aerial', 'pov'],
      mood: ['psychedelic', 'hallucinogenic']
    }
  },
  {
    id: '72',
    url: 'https://image.tmdb.org/t/p/original/eR0lYIkKI2zPd7sFCJkCjc5l1Sd.jpg',
    film: 'Under the Skin',
    timestamp: '00:42:15',
    director: 'Jonathan Glazer',
    studio: 'A24',
    year: 2013,
    tags: {
      composition: ['minimalist', 'alien'],
      color: ['black', 'void'],
      shotType: ['wide', 'abstract'],
      mood: ['alien', 'mysterious']
    }
  },
  {
    id: '73',
    url: 'https://image.tmdb.org/t/p/original/qSEKyf0fwJzrypsMeNaF7yEVhir.jpg',
    film: 'Memories of Murder',
    timestamp: '01:25:20',
    director: 'Bong Joon-ho',
    studio: 'CJ Entertainment',
    year: 2003,
    tags: {
      composition: ['wide', 'rural'],
      color: ['muted', 'autumn'],
      shotType: ['wide', 'landscape'],
      mood: ['tense', 'procedural']
    }
  },
  {
    id: '74',
    url: 'https://image.tmdb.org/t/p/original/rwcN0z5z2aEQkAePjxJNlOPy3VU.jpg',
    film: 'A Girl Walks Home Alone at Night',
    timestamp: '00:52:45',
    director: 'Ana Lily Amirpour',
    studio: 'VICE Films',
    year: 2014,
    tags: {
      composition: ['minimalist', 'stark'],
      color: ['black-white', 'monochrome'],
      shotType: ['wide', 'exterior'],
      mood: ['mysterious', 'noir']
    }
  },
  {
    id: '75',
    url: 'https://image.tmdb.org/t/p/original/tGhqI4t1i1l6Q6rBW5lYQT9qf9n.jpg',
    film: 'Stoker',
    timestamp: '01:08:30',
    director: 'Park Chan-wook',
    studio: 'Fox Searchlight',
    year: 2013,
    tags: {
      composition: ['elegant', 'formal'],
      color: ['muted', 'pastel'],
      shotType: ['medium', 'interior'],
      mood: ['psychological', 'elegant']
    }
  },
  {
    id: '76',
    url: 'https://image.tmdb.org/t/p/original/iHe8qB8bPCbmEMJhPXN3BGbHMW8.jpg',
    film: 'Blue Velvet',
    timestamp: '01:22:15',
    director: 'David Lynch',
    studio: 'MGM',
    year: 1986,
    tags: {
      composition: ['surreal', 'theatrical'],
      color: ['blue', 'red', 'rich'],
      shotType: ['medium', 'interior'],
      mood: ['surreal', 'noir']
    }
  },
  {
    id: '77',
    url: 'https://image.tmdb.org/t/p/original/fgBvIyp7DRN4IKHXe5jvr3M5sP1.jpg',
    film: 'The Master',
    timestamp: '00:38:45',
    director: 'Paul Thomas Anderson',
    studio: 'Weinstein Company',
    year: 2012,
    tags: {
      composition: ['centered', 'oceanic'],
      color: ['blue', 'vast'],
      shotType: ['wide', 'ocean'],
      mood: ['contemplative', 'vast']
    }
  },
  {
    id: '78',
    url: 'https://image.tmdb.org/t/p/original/kAfmoORwvcV9p7b6V6I6l8CQqyN.jpg',
    film: 'Sunshine',
    timestamp: '01:35:20',
    director: 'Danny Boyle',
    studio: 'Fox Searchlight',
    year: 2007,
    tags: {
      composition: ['centered', 'cosmic'],
      color: ['orange', 'yellow', 'sun'],
      shotType: ['wide', 'space'],
      mood: ['epic', 'cosmic']
    }
  },
  {
    id: '79',
    url: 'https://image.tmdb.org/t/p/original/rVlMqU3bD34tBGZJB7dNvNEhBzr.jpg',
    film: 'Holy Motors',
    timestamp: '01:12:30',
    director: 'Leos Carax',
    studio: 'Indomina',
    year: 2012,
    tags: {
      composition: ['surreal', 'theatrical'],
      color: ['vivid', 'theatrical'],
      shotType: ['medium', 'performance'],
      mood: ['surreal', 'absurd']
    }
  },
  {
    id: '80',
    url: 'https://image.tmdb.org/t/p/original/xjGsZCL9hDVXMzLDsGE3sAK2HcD.jpg',
    film: 'Yi Yi',
    timestamp: '01:45:15',
    director: 'Edward Yang',
    studio: 'Criterion',
    year: 2000,
    tags: {
      composition: ['natural', 'observational'],
      color: ['muted', 'realistic'],
      shotType: ['medium', 'interior'],
      mood: ['contemplative', 'humanistic']
    }
  },
  {
    id: '81',
    url: 'https://image.tmdb.org/t/p/original/bkpPTZUdq31UGDovmszsg2AnDfE.jpg',
    film: 'Synecdoche, New York',
    timestamp: '01:28:40',
    director: 'Charlie Kaufman',
    studio: 'Sony Pictures Classics',
    year: 2008,
    tags: {
      composition: ['complex', 'layered'],
      color: ['muted', 'autumnal'],
      shotType: ['wide', 'interior'],
      mood: ['existential', 'complex']
    }
  },
  {
    id: '82',
    url: 'https://image.tmdb.org/t/p/original/4PXBWtEkttKqXwfrsGxlAjJAUMi.jpg',
    film: 'Beasts of the Southern Wild',
    timestamp: '00:52:30',
    director: 'Benh Zeitlin',
    studio: 'Fox Searchlight',
    year: 2012,
    tags: {
      composition: ['natural', 'organic'],
      color: ['warm', 'earthy'],
      shotType: ['wide', 'landscape'],
      mood: ['magical-realist', 'innocent']
    }
  },
  {
    id: '83',
    url: 'https://image.tmdb.org/t/p/original/sDi6wKgECUjDug2gn4uODSqZ0Km.jpg',
    film: 'Melancholia',
    timestamp: '01:52:15',
    director: 'Lars von Trier',
    studio: 'Magnolia',
    year: 2011,
    tags: {
      composition: ['epic', 'cosmic'],
      color: ['blue', 'cosmic'],
      shotType: ['wide', 'cosmic'],
      mood: ['apocalyptic', 'melancholic']
    }
  },
  {
    id: '84',
    url: 'https://image.tmdb.org/t/p/original/yRpCKJOLUj8dNlXBNIcFzsaVqQS.jpg',
    film: 'Under the Silver Lake',
    timestamp: '00:42:20',
    director: 'David Robert Mitchell',
    studio: 'A24',
    year: 2018,
    tags: {
      composition: ['wide', 'nocturnal'],
      color: ['blue', 'neon', 'la-nights'],
      shotType: ['wide', 'exterior'],
      mood: ['neo-noir', 'mysterious']
    }
  },
  {
    id: '85',
    url: 'https://image.tmdb.org/t/p/original/aGUwgUrJVqI5LWN7xokSX7Hg8IS.jpg',
    film: 'Paterson',
    timestamp: '00:35:45',
    director: 'Jim Jarmusch',
    studio: 'Bleecker Street',
    year: 2016,
    tags: {
      composition: ['centered', 'observational'],
      color: ['muted', 'realistic'],
      shotType: ['medium', 'interior'],
      mood: ['contemplative', 'quiet']
    }
  },
  {
    id: '86',
    url: 'https://image.tmdb.org/t/p/original/2hSrHfBP9l7NnR2EKs1KekwWi5h.jpg',
    film: 'The Lobster',
    timestamp: '01:05:30',
    director: 'Yorgos Lanthimos',
    studio: 'A24',
    year: 2015,
    tags: {
      composition: ['wide', 'forest'],
      color: ['grey', 'muted'],
      shotType: ['wide', 'exterior'],
      mood: ['absurd', 'isolated']
    }
  },
  {
    id: '87',
    url: 'https://image.tmdb.org/t/p/original/45Y2KYoAqIaVVFEZ42PjOBgzSd0.jpg',
    film: 'Only Lovers Left Alive',
    timestamp: '01:22:15',
    director: 'Jim Jarmusch',
    studio: 'Sony Pictures Classics',
    year: 2013,
    tags: {
      composition: ['elegant', 'gothic'],
      color: ['dark', 'rich'],
      shotType: ['medium', 'interior'],
      mood: ['elegant', 'nocturnal']
    }
  },
  {
    id: '88',
    url: 'https://image.tmdb.org/t/p/original/dK3NeL1OXmIo0uRXvs7qIZaCiH.jpg',
    film: 'Ida',
    timestamp: '00:48:30',
    director: 'Paweł Pawlikowski',
    studio: 'Music Box Films',
    year: 2013,
    tags: {
      composition: ['minimalist', 'headroom'],
      color: ['black-white', 'monochrome'],
      shotType: ['medium', 'portrait'],
      mood: ['contemplative', 'austere']
    }
  },
  {
    id: '89',
    url: 'https://image.tmdb.org/t/p/original/vHPeJn23RNOgRNIj8K1I7cFEAUc.jpg',
    film: 'Enemy',
    timestamp: '01:15:40',
    director: 'Denis Villeneuve',
    studio: 'A24',
    year: 2013,
    tags: {
      composition: ['minimal', 'urban'],
      color: ['yellow', 'hazy'],
      shotType: ['wide', 'exterior'],
      mood: ['surreal', 'mysterious']
    }
  },
  {
    id: '90',
    url: 'https://image.tmdb.org/t/p/original/4M63kIEVB84SH8Uh55UBxFAcfAa.jpg',
    film: 'Phoenix',
    timestamp: '01:32:20',
    director: 'Christian Petzold',
    studio: 'Sundance Selects',
    year: 2014,
    tags: {
      composition: ['elegant', 'formal'],
      color: ['muted', 'post-war'],
      shotType: ['medium', 'interior'],
      mood: ['elegant', 'melancholic']
    }
  },
  {
    id: '91',
    url: 'https://image.tmdb.org/t/p/original/dh4WnMOlQNjIiKCKVKKNi66I5p7.jpg',
    film: 'The Wailing',
    timestamp: '01:45:15',
    director: 'Na Hong-jin',
    studio: 'Well Go USA',
    year: 2016,
    tags: {
      composition: ['wide', 'rural'],
      color: ['grey', 'muted', 'rain'],
      shotType: ['wide', 'landscape'],
      mood: ['horror', 'mysterious']
    }
  },
  {
    id: '92',
    url: 'https://image.tmdb.org/t/p/original/kCWqHH1m6wQ5EQwGJ1uRKJd1VgS.jpg',
    film: 'Cold War',
    timestamp: '00:52:30',
    director: 'Paweł Pawlikowski',
    studio: 'Amazon Studios',
    year: 2018,
    tags: {
      composition: ['centered', 'elegant'],
      color: ['black-white', 'monochrome'],
      shotType: ['medium', 'portrait'],
      mood: ['romantic', 'elegant']
    }
  },
  {
    id: '93',
    url: 'https://image.tmdb.org/t/p/original/1MX7uqUgMsHB5TJpkW76lWF8ifo.jpg',
    film: 'The Witch',
    timestamp: '00:25:45',
    director: 'Robert Eggers',
    studio: 'A24',
    year: 2015,
    tags: {
      composition: ['wide', 'period'],
      color: ['dark', 'grey', 'natural'],
      shotType: ['wide', 'exterior'],
      mood: ['ominous', 'period']
    }
  },
  {
    id: '94',
    url: 'https://image.tmdb.org/t/p/original/oILyo3hbHR28n3CzZzJIvJpd4hO.jpg',
    film: 'Moonlight',
    timestamp: '01:05:20',
    director: 'Barry Jenkins',
    studio: 'A24',
    year: 2016,
    tags: {
      composition: ['intimate', 'centered'],
      color: ['blue', 'moonlight'],
      shotType: ['close-up', 'portrait'],
      mood: ['intimate', 'tender']
    }
  },
  {
    id: '95',
    url: 'https://image.tmdb.org/t/p/original/xVHNqPJV5HhfQlRUNVlELwKz4W8.jpg',
    film: 'Possession',
    timestamp: '01:22:15',
    director: 'Andrzej Żuławski',
    studio: 'Criterion',
    year: 1981,
    tags: {
      composition: ['chaotic', 'visceral'],
      color: ['dark', 'intense'],
      shotType: ['close-up', 'handheld'],
      mood: ['psychological', 'visceral']
    }
  },
  {
    id: '96',
    url: 'https://image.tmdb.org/t/p/original/8TdqXrHLGCZ7IlgNNTa5lPm1ysJ.jpg',
    film: 'You Were Never Really Here',
    timestamp: '00:48:30',
    director: 'Lynne Ramsay',
    studio: 'Amazon Studios',
    year: 2017,
    tags: {
      composition: ['tight', 'psychological'],
      color: ['dark', 'urban'],
      shotType: ['close-up', 'interior'],
      mood: ['dark', 'psychological']
    }
  },
  {
    id: '97',
    url: 'https://image.tmdb.org/t/p/original/yQGoQ6byvxCF1SWPfD5EgPQdsSC.jpg',
    film: 'The Neon Demon',
    timestamp: '00:42:15',
    director: 'Nicolas Winding Refn',
    studio: 'Amazon Studios',
    year: 2016,
    tags: {
      composition: ['geometric', 'abstract'],
      color: ['neon', 'pink', 'blue'],
      shotType: ['wide', 'stylized'],
      mood: ['surreal', 'fashion']
    }
  },
  {
    id: '98',
    url: 'https://image.tmdb.org/t/p/original/hON9UKowWP0U5bR79XnDLqTdv49.jpg',
    film: 'Green Room',
    timestamp: '00:55:20',
    director: 'Jeremy Saulnier',
    studio: 'A24',
    year: 2015,
    tags: {
      composition: ['tight', 'claustrophobic'],
      color: ['green', 'punk'],
      shotType: ['medium', 'interior'],
      mood: ['tense', 'brutal']
    }
  },
  {
    id: '99',
    url: 'https://image.tmdb.org/t/p/original/hV4t0yQ89dzmSHUAYdLQpOUcqcq.jpg',
    film: 'Blue Is the Warmest Color',
    timestamp: '01:35:45',
    director: 'Abdellatif Kechiche',
    studio: 'Sundance Selects',
    year: 2013,
    tags: {
      composition: ['intimate', 'close'],
      color: ['blue', 'warm'],
      shotType: ['close-up', 'portrait'],
      mood: ['intimate', 'romantic']
    }
  },
  {
    id: '100',
    url: 'https://image.tmdb.org/t/p/original/7LrwN2MgxBCGLMQxJHD0K1RLSy0.jpg',
    film: 'The Lighthouse',
    timestamp: '01:32:20',
    director: 'Robert Eggers',
    studio: 'A24',
    year: 2019,
    tags: {
      composition: ['vertical', 'aspect-ratio'],
      color: ['black-white', 'monochrome'],
      shotType: ['medium', 'interior'],
      mood: ['claustrophobic', 'madness']
    }
  },
  {
    id: '101',
    url: 'https://image.tmdb.org/t/p/original/c00aQKHhZuVZqRKdcJAGKt1V0gy.jpg',
    film: 'The Turin Horse',
    timestamp: '01:15:30',
    director: 'Béla Tarr',
    studio: 'Cinema Guild',
    year: 2011,
    tags: {
      composition: ['minimalist', 'long-take'],
      color: ['black-white', 'monochrome'],
      shotType: ['wide', 'landscape'],
      mood: ['existential', 'desolate']
    }
  },
  {
    id: '102',
    url: 'https://image.tmdb.org/t/p/original/aJJV7PxPq3WyFR0KtLzVZ2DGWxv.jpg',
    film: 'Cure',
    timestamp: '01:05:45',
    director: 'Kiyoshi Kurosawa',
    studio: 'Daiei',
    year: 1997,
    tags: {
      composition: ['minimalist', 'centered'],
      color: ['muted', 'grey'],
      shotType: ['medium', 'interior'],
      mood: ['psychological', 'eerie']
    }
  },
  {
    id: '103',
    url: 'https://image.tmdb.org/t/p/original/kvRDWtlC5kGljSxOzT7YD1M9pGH.jpg',
    film: 'Dunkirk',
    timestamp: '00:52:30',
    director: 'Christopher Nolan',
    studio: 'Warner Bros',
    year: 2017,
    tags: {
      composition: ['wide', 'epic'],
      color: ['cool', 'blue', 'grey'],
      shotType: ['wide', 'landscape'],
      mood: ['epic', 'tense']
    }
  },
  {
    id: '104',
    url: 'https://image.tmdb.org/t/p/original/wCKnEdRqjK6CbhNGFvXLwzMh1mn.jpg',
    film: 'Climax',
    timestamp: '01:12:15',
    director: 'Gaspar Noé',
    studio: 'A24',
    year: 2018,
    tags: {
      composition: ['chaotic', 'dynamic'],
      color: ['red', 'neon'],
      shotType: ['wide', 'dance'],
      mood: ['frenzied', 'psychedelic']
    }
  },
  {
    id: '105',
    url: 'https://image.tmdb.org/t/p/original/tlKWlKijGCKyuE6m7kkb9tPJnwv.jpg',
    film: 'Personal Shopper',
    timestamp: '00:48:20',
    director: 'Olivier Assayas',
    studio: 'IFC Films',
    year: 2016,
    tags: {
      composition: ['minimalist', 'urban'],
      color: ['cool', 'paris'],
      shotType: ['medium', 'interior'],
      mood: ['mysterious', 'contemplative']
    }
  }
]

// Visual filter options
export const COMPOSITION_TYPES = [
  'symmetrical', 'centered', 'rule-of-thirds', 'minimalist', 'wide',
  'tight', 'natural', 'framed', 'chaotic', 'layered'
]

export const COLOR_PALETTES = [
  'blue', 'red', 'yellow', 'green', 'orange', 'pink', 'purple',
  'black-white', 'monochrome', 'neon', 'warm', 'cool', 'muted', 'vibrant'
]

export const SHOT_TYPES = [
  'wide', 'medium', 'close-up', 'portrait', 'landscape',
  'interior', 'exterior', 'aerial', 'handheld'
]

export const MOODS = [
  'intimate', 'tense', 'romantic', 'mysterious', 'epic',
  'contemplative', 'surreal', 'dark', 'bright', 'elegant'
]

// Legacy support - keep A24_SCENES export for backwards compatibility
export const A24_SCENES = FILM_SCENES
