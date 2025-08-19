export interface WorkProject {
  id: number;
  image: string[];
  title: string;
  description: string;
  genre: string[];
  releaseYear: number;
  cast: {name: string; character: string}[];
  crew: { name: string; role: string[] }[];
  links: { name: string; link: string }[];
}

export const workProjects: WorkProject[] = [
  {
    id: 1,
    image: [
      "/images/moviePosters/chetLarson.jpeg",
      "/images/chetLarson/screenshot.jpeg",
    ],
    title: "Chet Larson",
    description:
      "Chet Larson is a former internet personality and content creator best known for his inflammatory presence across numerous platforms, ranging from comments on instagram to vlogs on youtube. His stature grew throughout 2017 and into 2018, when it seemed like he was destined to truly blow. However, one earth shattering incident sent him spiraling and forced him completely offline. This video, captured two years later in the Summer of 2020, was intended to merely document his turbulent past. As filming progressed, though, it became clear that he was using this as an opportunity to stage an impulsive comeback. The events that transpired in the wake of his new posts would alter his life forever.",
    genre: ["Mockumentary", "Comedy", "Coming of Age", "Mumblecore"],
    releaseYear: 2021,
    cast: [
      {name: "Luke or Noah Clarke", character: "Chet Larson"},
      {name: "Sam Kanda", character: "Ernie Jackson"},
      {name: "Joey Cocci", character: "Gary Nealon"},
      {name: "Edwin Michael Sheriff", character: "Himself"},
      {name: "Hugh Turner", character: "Himself"}, 
      {name: "Keith Antoniacci", character: "Himself"},
      {name: "Dominic Mukherjee", character: "Don Mukrejee"},
      {name: "Brandee Kaplan", character: "Fan"},
      {name: "Sam Herath", character: "Himself"},
      {name: "Asahi Lunde", character: "Himself"},
      {name: "Martin Clarke", character: "Mr. Larson"},
      {name: "Michelle Clarke", character: "Mrs. Larson"},
      {name: "Robert Heng", character: "Himself"},
    ],
    crew: [
      {
        name: "Luke Clarke",
        role: ["Director", "Editor", "Writer"],
      },
      {
        name: "Noah Clarke",
        role: ["Director", "Editor", "Writer", "Producer"],
      },
      {
        name: "Hugh Turner",
        role: ["Second Unit Director", "Best Boy"],
      },
      {
        name: "Eve Orellana",
        role: ["Production Assistant"],
      },
      {
        name: "Marco Panic",
        role: ["Production Assistant"],
      },
    ],
    links: [
      {
        name: "Youtube",
        link: "https://youtu.be/rCY0UI7DADE?si=uhjO-9GepSD9lp-n",
      },
      {
        name: "Letterboxd",
        link: "https://letterboxd.com/film/chet-larson/",
      },
      {
        name: "Rateyourmusic",
        link: "https://rateyourmusic.com/film/chet-larson/",
      },
      {
        name: "IMDB",
        link: "https://www.imdb.com/title/tt31960957/",
      },
      {
        name: "Trailer",
        link: "https://youtu.be/tEatKWZEHjg?si=jkPaNg4RBuOrdUWW",
      },
    ],
  },
  {
    id: 2,
    image: [
      "/images/moviePosters/chetLarsonCoda.jpg",
    ],
    title: "Chet Larson Coda",
    description:
      "Following the moderate success of the eponymous documentary made about him, former internet personality and content creator Chet Larson decides to direct the films direct sequel with the help of the originals director, Ernie Jackson. However, as filming progresses, Ernie realizes that he and Chet’s personalities are too contrasting for this artistic partnership to continue flourishing.",
    genre: ["Mockumentary", "Comedy", "Coming of Age"],
    releaseYear: 2021,
    cast: [
      {name: "Luke or Noah Clarke", character: "Chet Larson"},
      {name: "Julianna Gibbons", character: "The Figure"},
      {name: "Sam Kanda", character: "Ernie Jackson"},
      {name: "Konstantin Kahadzadze", character: "Konstantin"},
      {name: "Edwin Michael Sheriff", character: "Sergei"},
      {name: "Sam Herath", character: "Kaleb"},
      {name: "Joey Cocci", character: "Gary Nealon"},
      {name: "Osquinn", character: "Herself"},
      {name: "Michael Scherer", character: "Mr. Young"},
      {name: "Violet Barnhart", character: "Alex"},
    ],  
    crew: [
      {
        name: "Luke Clarke",
        role: ["Director", "Editor", "Writer"],
      },
      {
        name: "Noah Clarke",
        role: ["Director", "Editor", "Writer", "Producer"],
      },
      {
        name: "Julianna Gibbons",
        role: ["Storyboard Artist"],
      },
      {
        name: "Zoe Davidzon",
        role: ["Assistant Camera Operator"],
      },
      {
        name: "Tuesday Kalota",
        role: ["Production Assistant"],
      },
      {
        name: "Eve Orellana",
        role: ["Production Assistant"],
      },
      {
        name: "Sam Ingram",
        role: ["Production Assistant"],
      },
      {
        name: "Kayla Shomar-Corbett",
        role: ["Post-Production Sound Mixer"],
      },
      { name: "Hugh Turner", role: ["Best Boy"] },
    ],
    links: [
      {
        name: "Youtube",
        link: "https://youtu.be/pJZMi_rg00g?si=LOaxcGby5rirDYhx",
      },
      {
        name: "Letterboxd",
        link: "https://letterboxd.com/film/chet-larson-coda/",
      },
      {
        name: "Rateyourmusic",
        link: "https://rateyourmusic.com/film/chet-larson-2/",
      },
    ],
  },
  {
    id: 3,
    image: ["/images/moviePosters/convenience.jpg"],
    title: "Convenience",
    description:
      "After running into her ex with her new girlfriend at a convenience store they used to frequent, Mindy finds herself trapped in a continuous time loop.",
    genre: ["Drama", "Romance"],
    releaseYear: 2024,
    cast: [
      {name: "Vinh Hoang", character: "Tony"},
      {name: "Mallika Rangi", character: "June"},
      {name: "Elena Brace", character: "Mindy"},
    ],
    crew: [
      {
        name: "Luke Clarke",
        role: ["Director", "Editor", "Writer"],
      },
      {
        name: "Noah Clarke",
        role: ["Director", "Editor", "Writer", "Producer"],
      },
      {
        name: "Samuel Correa",
        role: ["Director of Photography and Color Grading"],
      },
      {
        name: "Jaden Garcia",
        role: ["Key Grip"],
      },
      {
        name: "Jalen Rayno",
        role: ["Production Sound Engineer", "Sound Design"],
      },
      {
        name: "Gabrielle Wallace",
        role: ["Script Supervisor"],
      },
      {
        name: "Yami",
        role: ["Script Supervisor"],
      },
      {
        name: "Cory Cannarozzi",
        role: ["Production Assistant"],
      },
      {
        name: "Ethan Hernandez",
        role: ["Production Assistant"],
      },
      { name: "Hugh Turner", role: ["Best Boy"] },
      {name: "Andre Forbes", role: ["VFX Editor"]},
      {name: "GTA Rosas", role: ["Original Score"]}
    ],
    links: [
      {
        name: "Youtube",
        link: "https://youtu.be/FBVMGRyXjCE?si=wCmET54VQlbmdnc6",
      },
      {
        name: "Letterboxd",
        link: "https://letterboxd.com/film/convenience-2024/",
      },
      {
        name: "Trailer",
        link: "https://www.instagram.com/p/C-nernfxRCW/",
      },
    ],
  },
];

// Function to get project by grid index
export function getProjectByGridIndex(gridIndex: number): WorkProject | null {
  const projectIndex = (gridIndex - 1) % workProjects.length;
  return workProjects[projectIndex] || null;
}

// Function to filter projects by release year
export function getProjectsAfterYear(year: number): WorkProject[] {
  return workProjects.filter((project) => project.releaseYear > year);
}

// Function to get recent projects (after 2021)
export function getRecentProjects(): WorkProject[] {
  return getProjectsAfterYear(2020);
}
