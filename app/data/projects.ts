export interface WorkProject {
  id: number;
  image: string[];
  title: string;
  description: string;
  genre: string[];
  releaseYear: number;
  cast: { name: string; character: string }[];
  crew: { name: string; role: string[] }[];
  links: { name: string; link: string }[];
  quotes?: string[];
  accolades?: string[];
  groupings?: { name: string; group: string[] }[];
  lukeWork?: boolean;
  noahWork?: boolean;
  comingSoon?: boolean;
  gifLink?: string;
}
// first image in image array is the poster image

// order of projects that should be near the top
// Yell Occult - Mr. Toad’s Wild Ride (Official Music Video)
// Untitled Documentary short on Tusheti, Georgia
// Chet Larson
// Chet Larson Coda
// Convenience
// The Small Victorian Boy
// Who Is It That is Going to Carry My Pain? And For Whom?
// President TV of The United States - Did (Official Music Video)
// The Energy Solution - The End of 2010 (Official Music Video)
// The Energy Solution - Talk to Me (Official Music Video)

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
    lukeWork: true,
    noahWork: true,
    genre: ["Mockumentary", "Comedy", "Coming of Age", "Mumblecore"],
    releaseYear: 2021,
    cast: [
      { name: "Luke or Noah Clarke", character: "Chet Larson" },
      { name: "Sam Kanda", character: "Ernie Jackson" },
      { name: "Joey Cocci", character: "Gary Nealon" },
      { name: "Edwin Michael Sheriff", character: "Himself" },
      { name: "Hugh Turner", character: "Himself" },
      { name: "Keith Antoniacci", character: "Himself" },
      { name: "Dominic Mukherjee", character: "Don Mukrejee" },
      { name: "Brandee Kaplan", character: "Fan" },
      { name: "Sam Herath", character: "Himself" },
      { name: "Asahi Lunde", character: "Himself" },
      { name: "Martin Clarke", character: "Mr. Larson" },
      { name: "Michelle Clarke", character: "Mrs. Larson" },
      { name: "Robert Heng", character: "Himself" },
    ],
    crew: [
      { name: "Luke & Noah Clarke", role: ["Writer", "Director", "Editor"] },
      { name: "Noah Clarke", role: ["Producer"] },
      { name: "Hugh Turner", role: ["Second Unit Director", "Best Boy"] },
      { name: "Eve Orellana", role: ["Production Assistants"] },
      { name: "Marco Panic", role: ["Production Assistants"] },
    ],
    links: [
      {
        name: "Youtube",
        link: "https://youtu.be/rCY0UI7DADE?si=uhjO-9GepSD9lp-n",
      },
      { name: "Letterboxd", link: "https://letterboxd.com/film/chet-larson/" },
      {
        name: "Rateyourmusic",
        link: "https://rateyourmusic.com/film/chet-larson/",
      },
      { name: "IMDB", link: "https://www.imdb.com/title/tt31960957/" },
      {
        name: "Trailer",
        link: "https://youtu.be/tEatKWZEHjg?si=jkPaNg4RBuOrdUWW",
      },
    ],
    quotes: [
      "Genuinely one of the funniest things I've seen in a while. Great visual comedy. Charming at every beat.",
      "A hilarious, heartfelt lo-fi mockumentary that reads as a love letter to e-celeb culture as much as it does a death threat.",
      "An incredibly impressive low budget film made by people who just simply love watching, talking about, and creating movies. 100% worth your time!",
      "They definitely were limited in what they had at their disposal, but that doesn't take away from the fact that this script is honestly funnier and more nuanced than other scripts you see in most major films you see today.",
      "Chet Larson also provides a brilliant commentary on the age of post-irony on the internet, examining the cost of genuine self-expression in an era dominated by shitposting",
    ],
    groupings: [
      {
        name: "Luke",
        group: ["Directing", "Writing", "Editing", "Cinematography"],
      },
      {
        name: "Noah",
        group: ["Directing", "Producing", "Writing", "Editing", "Acting"],
      },
    ],
  },
  {
    id: 2,
    image: ["/images/moviePosters/chetLarsonCodaVertical.jpg", "/images/moviePosters/chetLarsonCoda.jpg"],
    title: "Chet Larson Coda",
    description:
      "Following the moderate success of the eponymous documentary made about him, former internet personality and content creator Chet Larson decides to direct the films direct sequel with the help of the originals director, Ernie Jackson. However, as filming progresses, Ernie realizes that he and Chet's personalities are too contrasting for this artistic partnership to continue flourishing.",
    genre: ["Mockumentary", "Comedy", "Coming of Age"],
    lukeWork: true,
    noahWork: true,
    releaseYear: 2022,
    cast: [
      { name: "Luke or Noah Clarke", character: "Chet Larson" },
      { name: "Julianna Gibbons", character: "The Figure" },
      { name: "Sam Kanda", character: "Ernie Jackson" },
      { name: "Konstantine Kahadze", character: "Konstantine" },
      { name: "Edwin Michael Sheriff", character: "Sergei" },
      { name: "Sam Herath", character: "Kaleb" },
      { name: "Joey Cocci", character: "Gary Nealon" },
      { name: "Osquinn", character: "Herself" },
      { name: "Michael Scherer", character: "Mr. Young" },
      { name: "Violet Barnhart", character: "Alex" },
    ],
    crew: [
      { name: "Luke & Noah Clarke", role: ["Writer", "Director", "Editor"] },
      { name: "Noah Clarke", role: ["Producer"] },
      { name: "Julianna Gibbons", role: ["Storyboards"] },
      { name: "Zoe Davidson", role: ["Assistant Camera Operators"] },
      { name: "Tuesday Kalota", role: ["Assistant Camera Operators"] },
      { name: "Eve Orellena", role: ["Assistant Camera Operators"] },
      { name: "Sam Ingram", role: ["Production Assistant"] },
      { name: "Kayla Shomar-Corbett", role: ["Post Production Sound Mixing"] },
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
    groupings: [
      {
        name: "Luke",
        group: ["Directing", "Writing", "Editing", "Cinematography"],
      },
      {
        name: "Noah",
        group: ["Directing", "Producing", "Writing", "Editing", "Acting"],
      },
    ],
  },
  {
    id: 3,
    image: ["/images/moviePosters/convenienceVertical.jpg", "/images/moviePosters/convenience.jpg"],
    gifLink: "/images/convenience/convenience.mp4",
    title: "Convenience",
    lukeWork: true,
    noahWork: true,
    description:
      "After running into her ex with her new girlfriend at a convenience store they used to frequent, Mindy finds herself trapped in a continuous time loop.",
    genre: ["Drama", "Romance"],
    releaseYear: 2024,
    cast: [
      { name: "Vinh Hoang", character: "Tony" },
      { name: "Mallika Rangi", character: "June" },
      { name: "Elena Brace", character: "Mindy" },
    ],
    crew: [
      { name: "Luke & Noah Clarke", role: ["Writer", "Director", "Editor"] },
      { name: "Luke Clarke", role: ["Producer"] },
      {
        name: "Samuel Correa",
        role: ["Director of Photography", "Color Grading"],
      },
      { name: "Jaden Garcia", role: ["Key Grip"] },
      {
        name: "Jalen Rayno",
        role: ["Production Sound Engineer", "Sound Design"],
      },
      { name: "Gabrielle Wallace", role: ["Script Supervisors"] },
      { name: "Yami", role: ["Script Supervisors"] },
      { name: "Cory Cannarozzi", role: ["Production Assistants"] },
      { name: "Ethan Hernandez", role: ["Production Assistants"] },
      { name: "Hugh Turner", role: ["Best Boy"] },
      { name: "Andre Forbes", role: ["VFX Editor"] },
      { name: "GTA Rosas", role: ["Original Score"] },
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
      { name: "Trailer", link: "https://www.instagram.com/p/C-nernfxRCW/" },
    ],
    accolades: [
      "Official Selection - Movies Plus Film Festival (2024)",
      "Official Selection - Full Circle Film Festival (2024)",
      "Official Selection - Tampa Bay Underground Film Festival (2024)",
      "Trevy Award Winner - Best Screenplay (2024)",
    ],
    groupings: [
      { name: "Luke", group: ["Directing", "Producing", "Writing", "Editing"] },
      { name: "Noah", group: ["Directing", "Writing", "Editing"] },
    ],
  },
  {
    id: 4,
    image: [
      "/images/victorianBoy/victorianBoyVertical.jpg",
      "/images/victorianBoy/screenshot.png",
      "/images/moviePosters/victorianBoy.jpg",
    ],
    gifLink: "/images/victorianBoy/victorianBoy.mp4",
    title: "The Small Victorian Boy",
    description:
      "In post Civil War West Virginia, 9 year old Little Jamie has his life forever changed when he unexpectedly meets his Uncle Vernon, who tells him that both his parents died only two nights ago. However, not all is as it seems with this strange man.",
    genre: ["Comedy", "Mystery", "Historical"],
    lukeWork: true,
    noahWork: true,
    releaseYear: 2025,
    cast: [
      { name: "Luke Clarke", character: "Little Jamie" },
      { name: "Sam Ingram", character: "Uncle Vernon" },
    ],
    crew: [
      { name: "Luke & Noah Clarke", role: ["Writer", "Director", "Editor"] },
      { name: "Luke Clarke", role: ["Producer"] },
      { name: "Noah Clarke", role: ["Producer", "Cinematography"] },
      { name: "Sam Ingram", role: ["Producer"] },
      { name: "Patrick Ibanez", role: ["Key Grip"] },
      { name: "Konstantine Kahadze", role: ["Key Grip"] },
      {
        name: "Sebastian Mann",
        role: ["Key Grip", "Production Sound Engineers"],
      },
      { name: "Julianna Gibbons", role: ["Production Sound Engineers"] },
      { name: "Matthewos Mesfin", role: ["Production Sound Engineers"] },
      { name: "Evelyn Orellana", role: ["Soup Wrangler"] },
      { name: "Michelle Clarke", role: ["Location Supervisor"] },
      { name: "Hugh Turner", role: ["Best Boy"] },
    ],
    links: [
      {
        name: "Youtube",
        link: "https://youtu.be/fSvC047OZB4?si=GrBVTShMqOvG_dQN",
      },
      {
        name: "Letterboxd",
        link: "https://letterboxd.com/film/the-small-victorian-boy/",
      },
      {
        name: "Rateyourmusic",
        link: "https://rateyourmusic.com/film/the-small-victorian-boy/",
      },
      {
        name: "IMDB",
        link: "https://www.imdb.com/title/tt33998394/?ref_=nm_knf_t_1",
      },
      { name: "Trailer 1", link: "https://www.instagram.com/p/DCkB3kRR-E7/" },
      { name: "Trailer 2", link: "https://www.instagram.com/p/DCkB3kRR-E7/" },
    ],
    groupings: [
      {
        name: "Luke",
        group: ["Directing", "Producing", "Writing", "Editing", "Acting"],
      },
      {
        name: "Noah",
        group: [
          "Directing",
          "Producing",
          "Writing",
          "Editing",
          "Cinematography",
        ],
      },
    ],
  },
  {
    id: 5,
    image: ["/images/carryMyPain/posterVertical.jpg", "/images/carryMyPain/screenshot.jpg"],
    gifLink: "/images/carryMyPain/whoIsIt.mp4",
    title: "Who Is It That Is Going To Carry My Pain? And For Whom?",
    description:
      "In this short parody of classic American soap operas, Williamson discovers that his wife is having an affair with their pastor.",
    lukeWork: true,
    noahWork: true,
    genre: ["Comedy", "Soap Opera", "Parody"],
    releaseYear: 2020,
    cast: [
      { name: "Marco Panic", character: "Williamson" },
      { name: "Cali Silva", character: "Jane" },
      { name: "Dan Amzallag", character: "Esteban" },
      { name: "Jaden Kanda", character: "Little Jimmy" },
      { name: "Keith Antoniacci", character: "Narrator" },
    ],
    crew: [
      { name: "Luke & Noah Clarke", role: ["Writer", "Director"] },
      { name: "Luke Clarke", role: ["Producer", "Editor"] },
      { name: "Derrice Dean", role: ["Director of Photography"] },
      {
        name: "India Soodoo",
        role: ["Director of Photography", "Lighting", "Sound Mixing"],
      },
      {
        name: "Jimmy Albert",
        role: ["Lighting", "Studio Supervisors", "Stage Supervisors"],
      },
      { name: "Noah Clarke", role: ["Sound Editing", "Music"] },
      { name: "Bradley Fisher", role: ["Tapes"] },
      { name: "Ally Potter", role: ["Studio Supervisors"] },
      { name: "Dee Willet", role: ["Stage Supervisors"] },
      { name: "Catalina Carrasco", role: ["Production Assistant"] },
      { name: "Sam Kanda", role: ["Transportation"] },
      { name: "Hugh Turner", role: ["Best Boy"] },
    ],
    links: [
      {
        name: "Youtube",
        link: "https://youtu.be/M0TAiDSJjsE?si=Sfu5Kr3U9WyZdjf1",
      },
    ],
    groupings: [
      { name: "Luke", group: ["Directing", "Producing", "Writing", "Editing"] },
      { name: "Noah", group: ["Directing", "Writing", "Editing"] },
    ],
  },
  {
    id: 6,
    image: ["/images/presidentTV/posterVertical.jpg", "/images/presidentTV/screenshot.jpeg"],
    gifLink: "/images/presidentTV/presidentTVGif.mp4",
    title: "President TV of The United States - Did (Official Music Video)",
    description:
      "In the first ever music video for President TV of the United States, a man sees his understanding of the world around shift as he wakes up with this music video on. Achieved through a mixture of footage shot on an Xbox Kinect, visual overlay trickery, and traditionally shot camera work, this video marks a visual turning point for Luke and Noah as directors.",
    lukeWork: true,
    genre: ["Music Video", "Folk"],
    releaseYear: 2024,
    cast: [
      { name: "Terese Corbin", character: "" },
      { name: "Joshua Echevarria", character: "" },
    ],
    crew: [
      { name: "Luke & Noah Clarke", role: ["Director", "Editor"] },
      { name: "Luke Clarke", role: ["Producer"] },
      {
        name: "Amulya Chalapathy",
        role: ["Producer", "Pre-Production Coordinator", "Camera Operators"],
      },
      {
        name: "Sarvani Eleswarapu",
        role: ["Pre-Production Coordinator", "Camera Operators"],
      },
      { name: "Adam Salerno", role: ["Pre-Production Coordinator"] },
      { name: "Arman Rezaian", role: ["Special Effects Supervisor"] },
      { name: "Jordan Tomasello", role: ["Additional Camerawork"] },
      { name: "Hugh Turner", role: ["Best Boy"] },
    ],
    links: [
      {
        name: "Youtube",
        link: "https://youtu.be/NfIOq610rSo?si=88NQleOMxMZS07HW",
      },
      { name: "Trailer", link: "https://www.instagram.com/reel/C7fNtJ2P21H/" },
    ],
    groupings: [
      {
        name: "Luke",
        group: [
          "Directing",
          "Producing",
          "Editing",
          "Cinematography",
          "Music Video",
        ],
      },
      { name: "Noah", group: ["Directing", "Editing", "Music Video"] },
    ],
  },
  {
    id: 7,
    image: ["/images/energySolution/2010Vertical.jpg", "/images/energySolution/2010_screenshot.jpg"],
    gifLink: "/images/energySolution/endOf2010.mp4",
    title: "The Energy Solution - The End of 2010 (Official Music Video)",
    description:
      "In the first ever music video for the Energy Solution, wealthy musician and entrepreneur Sam lives a life of wealth and decadence. However, loneliness and isolation plague the Washington DC native deep in the heart of Pittsburgh.",
    lukeWork: true,
    noahWork: true,
    genre: ["Music Video", "Electronic"],
    releaseYear: 2025,
    cast: [{ name: "Samuel Ingram", character: "" }],
    crew: [
      {
        name: "Luke & Noah Clarke",
        role: ["Director", "Editor", "Cinematographer"],
      },
      { name: "Luke Clarke", role: ["Producer"] },
      { name: "Noah Clarke", role: ["Producer"] },
      { name: "Samuel ingram", role: ["Producer"] },
      { name: "Bailey Hall", role: ["Production Assistants"] },
      { name: "Kyle Hoffpauir", role: ["Production Assistants"] },
    ],
    links: [
      {
        name: "Youtube",
        link: "https://www.youtube.com/watch?v=eW3gz6-foxY&ab_channel=TheEnergySolution",
      },
      { name: "Trailer", link: "https://www.instagram.com/p/DI14RG-xreY/" },
    ],
    groupings: [
      {
        name: "Luke",
        group: [
          "Directing",
          "Producing",
          "Editing",
          "Cinematography",
          "Music Video",
        ],
      },
      {
        name: "Noah",
        group: [
          "Directing",
          "Producing",
          "Editing",
          "Cinematography",
          "Music Video",
        ],
      },
    ],
  },
  {
    id: 8,
    image: ["/images/energySolution/talkToMeVertical.jpg", "/images/energySolution/talkToMe.png"],
    gifLink: "/images/energySolution/talkToMe.mp4",
    title: "The Energy Solution - Talk to Me (Official Music Video)",
    description:
      "In Luke and Noah's second music video for the Energy Solution, wealthy musician and entrepreneur Sam lives a life of wealth and decadence in Pittsburgh, Pennsylvania that is contrasted by isolation and depression. This is brought on by his love of Washington DC's hockey team, aka Pittsburgh's rivals. He must make a decision if he is going to give it all up to embrace the team he loves.",
    noahWork: true,
    genre: ["Music Video", "Electronic"],
    releaseYear: 2025,
    cast: [{ name: "Samuel Ingram", character: "" }],
    crew: [
      {
        name: "Luke & Noah Clarke",
        role: ["Director", "Editor", "Cinematographer"],
      },
      { name: "Luke Clarke", role: ["Producer"] },
      { name: "Noah Clarke", role: ["Producer"] },
      { name: "Samuel ingram", role: ["Producer"] },
      { name: "Bailey Hall", role: ["Production Assistants"] },
      { name: "Kyle Hoffpauir", role: ["Production Assistants"] },
    ],
    links: [],
    groupings: [
      {
        name: "Luke",
        group: [
          "Directing",
          "Producing",
          "Editing",
          "Cinematography",
          "Music Video",
        ],
      },
      {
        name: "Noah",
        group: [
          "Directing",
          "Producing",
          "Editing",
          "Cinematography",
          "Music Video",
        ],
      },
    ],
  },
  {
    id: 47,
    image: ["/images/yellOccult/screenshot.png"],
    title: "Yell Occult - Mr. Toad's Wild Ride (Music Video)",
    gifLink: "/images/yellOccult/toadGif.mp4",
    description:
      "In this music video for experimental rock and electronic group Yell Occult, the band is drawn into a wild ride at the hands of a strange entity as they attempt to flee the desolate waste of Florida for greener pastures up North.",
    genre: ["Music Video", "Horror", "Art-House", "Experimental"],
    releaseYear: 2025,
    comingSoon: true,
    cast: [
      { name: "Lilith Videt Weeks", character: "Herself" },
      { name: "Isaac Lucy", character: "Himself" },
      { name: "Arianna Ganley", character: "Herself" },
      { name: "Patrick Flanagan", character: "Himself" },
    ],
    crew: [
      {
        name: "Luke & Noah Clarke",
        role: ["Director", "Editor", "Cinematographer"],
      },
      { name: "Luke Clarke", role: ["Producer"] },
      { name: "Julianna Gibbons", role: ["Key Grip"] },
      { name: "Samuel Ingram", role: ["Key Grip"] },
      { name: "Elena Brace", role: ["Production Assistant"] },
      { name: "Abbie Greene", role: ["Production Assistant"] },
      { name: "Yamile Abuid", role: ["Additional Photography"] },
    ],
    links: [],
    groupings: [
      {
        name: "Luke",
        group: [
          "Directing",
          "Producing",
          "Editing",
          "Cinematography",
          "Music Video",
        ],
      },
      {
        name: "Noah",
        group: ["Directing", "Editing", "Cinematography", "Music Video"],
      },
    ],
  },
  {
    id: 49,
    image: ["/images/tsovaTushDocu/screenshot.jpg"],
    gifLink: "/images/tsovaTushDocu/georgiaDoc.mp4",
    title: "Untitled Documentary Short (Tsova-Tush community)",
    description:
      "This documentary short will focus on the Tsova-Tush community from Tusheti, who speak the critically endangered Tsova-Tush language. With fewer than a couple hundred fluent speakers remaining, the language faces extinction within decades. This ambitious project, which is set to be filmed this summer, will help to document the Tsova-Tush language, culture, and traditions in the short time that it is still possible.",
    genre: ["Documentary"],
    releaseYear: 2025,
    comingSoon: true,
    cast: [],
    crew: [
      {
        name: "Luke & Noah Clarke",
        role: ["Director" ],
      },
      { name: "Luke Clarke", role: ["Producer"] },
      { name: "Noah Clarke", role: ["Producer"] },
      { name: "Konstantine Kahadze", role: ["Producer"] },
      { name: "Tornike Koplatadze", role: ["Executive Producer"] },
      { name: "Howard Cui", role: ["Production Sound Engineer"] },
    ],
    links: [],
    groupings: [
      { name: "Luke", group: ["Directing", "Producing"] },
      { name: "Noah", group: ["Directing", "Producing"] },
    ],
  },
  {
    id: 9,
    image: [
      "/images/wvfs2024/nabihahCover.jpeg",
      "/images/wvfs2024/nabihah.jpeg",
    ],
    title: "Nabihah Iqbal Interview | WVFS at SXSW 2024",
    description:
      "In the fourth and final interview conducted by the staff of the WVFS radio station at the 2024 SXSW festival in Austin Texas, interviewer Rory Donohue talks with acclaimed British indie artist Nabihah Iqbal. This was the only of the 4 interviews not shot by Luke, who edited this installment alongside audio editing from Noah.",
    genre: ["Interview"],
    releaseYear: 2024,
    cast: [
      { name: "Rory Donohue", character: "Interviewer" },
      { name: "Nabihah Iqbal", character: "Interviewee" },
    ],
    crew: [
      { name: "Arman Sean Rezaian", role: ["Camera Operator"] },
      { name: "Luke Clarke", role: ["Editor"] },
      { name: "Noah Clarke", role: ["Sound Mixing"] },
      { name: "Casey Chapter", role: ["Production Sound Engineer"] },
      { name: "Krystel Sanon", role: ["WVFS Graphic Design"] },
    ],
    links: [
      {
        name: "Youtube",
        link: "https://youtu.be/PHD26y4FzKY?si=XO7vo59QefGcnFtV",
      },
      {
        name: "Instagram Ad",
        link: "https://www.instagram.com/p/DA9YNsTTGsT/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      },
    ],
    groupings: [
      { name: "Luke", group: ["Producing", "Editing", "Documentary"] },
      { name: "Noah", group: ["Producing", "Editing", "Documentary"] },
    ],
  },
  {
    id: 10,
    image: [
      "/images/wvfs2024/ellieBleachCover.png",
      "/images/wvfs2024/ellieBleach.jpeg",
    ],
    title: "Ellie Bleach Interview | WVFS at SXSW 2024",
    description:
      "In the third interview conducted by the staff of the WVFS radio station at the 2024 SXSW festival in Austin Texas, interviewer Arman Rezaian talks with British singer and songwriter Ellie Bleach. This interview was shot by Luke, who edited this installment alongside Noah.",
    genre: ["Interview"],
    releaseYear: 2024,
    cast: [
      { name: "Arman Rezaian", character: "Interviewer" },
      { name: "Ellie Bleach", character: "Interviewee" },
    ],
    crew: [
      { name: "Luke Clarke", role: ["Camera Operator"] },
      { name: "Luke & Noah Clarke", role: ["Editor"] },
    ],
    links: [
      {
        name: "Youtube",
        link: "https://youtu.be/tNfOeDrN8RI?si=GN82oPrCaH6oYSjL",
      },
      {
        name: "Instagram Ad",
        link: "https://www.instagram.com/p/C_1BdEPSFWp/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      },
    ],
    groupings: [
      {
        name: "Luke",
        group: ["Producing", "Cinematography", "Editing", "Documentary"],
      },
      { name: "Noah", group: ["Producing", "Editing", "Documentary"] },
    ],
  },
  {
    id: 11,
    image: ["/images/wvfs2024/velasquez.jpeg"],
    title: "Mali Velasquez Interview | WVFS at SXSW 2024",
    description:
      "In the second interview conducted by the staff of the WVFS radio station at the 2024 SXSW festival in Austin Texas, interviewer Casey Chapter talks with Nashville singer and songwriter Mali Velasquez along with band members Jarrod Gee and Maddy Young. This interview was shot by Luke, who edited this installment alongside Noah.",
    genre: ["Interview"],
    releaseYear: 2024,
    cast: [
      { name: "Casey Chapter", character: "Interviewer" },
      { name: "Mali Velasquez", character: "Interviewee" },
      { name: "Jarrod Gee", character: "Interviewee" },
      { name: "Maddy Young", character: "Interviewee" },
    ],
    crew: [
      { name: "Luke Clarke", role: ["Camera Operator"] },
      { name: "Luke & Noah Clarke", role: ["Editor"] },
      { name: "Rory Donohue", role: ["Additional Camerawork"] },
    ],
    links: [
      {
        name: "Youtube",
        link: "https://youtu.be/JzDk4MkXuu4?si=mrhanFL8WiBZst0P",
      },
      {
        name: "Instagram Ad",
        link: "https://www.instagram.com/p/C_glO65SSlW/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      },
    ],
    groupings: [
      {
        name: "Luke",
        group: ["Producing", "Cinematography", "Editing", "Documentary"],
      },
      { name: "Noah", group: ["Producing", "Editing", "Documentary"] },
    ],
  },
  {
    id: 12,
    image: ["/images/wvfs2024/friko.jpeg"],
    title: "Friko Interview | WVFS at SXSW 2024",
    description:
      "In the first interview conducted by the staff of the WVFS radio station at the 2024 SXSW festival in Austin Texas, interviewer Rory Donohue talks with acclaimed Chicago based indie rock band Friko, hot off the release of their debut album Where We've Been, Where We Go From Here. This interview was shot by Luke, who edited this installment alongside Noah.",
    genre: ["Interview"],
    releaseYear: 2024,
    cast: [
      { name: "Rory Donohue", character: "Interviewer" },
      { name: "Niko Kapetan", character: "Interviewee" },
      { name: "Bailey Minzenberger", character: "Interviewee" },
      { name: "David Fuller", character: "Interviewee" },
    ],
    crew: [
      { name: "Luke Clarke", role: ["Camera Operator"] },
      { name: "Luke & Noah Clarke", role: ["Editor"] },
    ],
    links: [
      {
        name: "Youtube",
        link: "https://youtu.be/HC2sfEHVE-U?si=wt9Bz6FvHhBU3nFz",
      },
      {
        name: "Instagram ad",
        link: "https://www.instagram.com/p/C9IeuMLuV0D/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      },
    ],
    groupings: [
      {
        name: "Luke",
        group: ["Producing", "Cinematography", "Editing", "Documentary"],
      },
      { name: "Noah", group: ["Producing", "Editing", "Documentary"] },
    ],
  },
  {
    id: 13,
    image: [
      "/images/fsu/campusTours/fsu_campus_1.png",
      "/images/fsu/campusTours/fsu_campus_2.png",
    ],
    title: "FSU Campus Tours Featurette",
    description:
      "This news featurette, written by reporter Kailey Schuchts, highlights FSU's campus tours programs, designed to show off the college to incoming students.",
    genre: ["News Featurette"],
    releaseYear: 2024,
    cast: [],
    crew: [
      { name: "Luke Clarke", role: ["Producer", "Editor", "Cinematography"] },
      { name: "Coco Li", role: ["Producer", "Editor", "Cinematography"] },
      { name: "Kailey Schuchts", role: ["Writer", "Reporter"] },
    ],
    links: [
      {
        name: "Youtube",
        link: "https://youtu.be/XD8iid7oFDk?si=2UbcVBmh94Wjn9cr",
      },
    ],
    groupings: [
      { name: "Luke", group: ["Producing", "Editing", "Cinematography"] },
    ],
  },
  {
    id: 14,
    image: ["/images/fsu/mentorTransfer/screenshot.png"],
    title: "FSU Mentor Transfer Program Featurette",
    description:
      "This news featurette, written by reporter Kaitlyn Walsh, highlights FSU's mentor program to help assist incoming transfer students.",
    genre: ["News Featurette"],
    releaseYear: 2023,
    cast: [],
    crew: [
      { name: "Luke Clarke", role: ["Producer", "Cinematographer", "Editor"] },
      { name: "Andrew Zoch", role: ["Producer", "Cinematographer"] },
      { name: "Kaitlyn Walsh", role: ["Writer", "Reporter"] },
    ],
    links: [
      {
        name: "Youtube",
        link: "https://youtu.be/m_wgR5POErM?si=uaWabSSewS1XUyTS",
      },
    ],
    groupings: [
      { name: "Luke", group: ["Producing", "Cinematography", "Editing"] },
    ],
  },
  {
    id: 15,
    image: [
      "/images/fsu/softball/screenshotOne.png",
      "/images/fsu/softball/screenshotTwo.png",
    ],
    title: "FSU Club Softball Feature",
    description:
      "This news featurette written by reporter Maddy Branning highlights FSU's club softball program.",
    genre: ["News Featurette"],
    releaseYear: 2023,
    cast: [],
    crew: [
      { name: "Luke Clarke", role: ["Director", "Producer", "Editor"] },
      {
        name: "Gabriel Curtis",
        role: ["Director", "Producer", "Editor", "Director of Photography"],
      },
      { name: "Maddy Branning", role: ["Writer", "Reporter"] },
    ],
    links: [
      {
        name: "Youtube",
        link: "https://youtu.be/Tz9oBflSkkc?si=f3oIs1W8kDc88veU",
      },
    ],
    groupings: [{ name: "Luke", group: ["Producing", "Editing"] }],
  },
  {
    id: 16,
    image: [
      "/images/southOfSoho/screenshotOne.png",
      "/images/southOfSoho/screenshotTwo.png",
    ],
    title: "South of Soho Featurette",
    description:
      "This short news featurette highlights the South of Soho art gallery in Tallahassee, Florida.",
    genre: ["News Featurette"],
    releaseYear: 2023,
    cast: [],
    crew: [
      {
        name: "Luke Clarke",
        role: ["Producer", "Editor", "Director of Photography"],
      },
      {
        name: "Christian Summersill",
        role: ["Director of Photography", "Editor"],
      },
    ],
    links: [
      { name: "Youtube", link: "https://www.youtube.com/watch?v=KQBKVpktF-E" },
    ],
    groupings: [{ name: "Luke", group: ["Producing", "Editing"] }],
  },
  {
    id: 17,
    image: [
      "/images/marchingChiefs/screenshotTwo.png",
      "/images/marchingChiefs/screenshotOne.png",
    ],
    title: "Marching Chiefs News Featurette",
    description:
      "This short news featurette highlights the Florida State University Marching band known as the Marching Chiefs.",
    genre: ["News Featurette"],
    releaseYear: 2024,
    cast: [],
    crew: [
      { name: "Noah Clarke", role: ["Producer", "Editor", "Cinematography"] },
      { name: "Katie Fites", role: ["Writer", "Reporter"] },
    ],
    links: [
      {
        name: "Youtube",
        link: "https://youtu.be/YYEZO-EVRUM?si=I2Wew95VGf379X9w",
      },
    ],
    groupings: [
      { name: "Noah", group: ["Producing", "Editing", "Cinematography"] },
    ],
  },
  {
    id: 18,
    image: ["/images/fsu/gaming/gaming.jpg"],
    title: "FSU Gaming Committee News Featurette",
    description:
      "This short news featurette highlights the Florida State University Gaming Committee club and the community these members have found amongst each other.",
    genre: ["News Featurette"],
    releaseYear: 2024,
    cast: [],
    crew: [
      { name: "Noah Clarke", role: ["Producer", "Editor", "Cinematography"] },
      { name: "Nacho Bermudez", role: ["Writer", "Reporter"] },
    ],
    links: [
      {
        name: "Youtube",
        link: "https://youtu.be/sQLuCec7Fqo?si=UulCmL-UTvU8VRn2",
      },
    ],
    groupings: [
      { name: "Noah", group: ["Producing", "Editing", "Cinematography"] },
    ],
  },
  {
    id: 19,
    image: ["/images/gramps10Year/screenshot.jpg"],
    title: "Gramps: The Movie - 10 Year Anniversary Commentary",
    description:
      "For the 10 year anniversary of our first ever short film, Gramps: The Movie (made at the age of 12), we decided to record a video commentary track in which we watch the short film 7 times in a row. As the commentary track goes on, our thoughts on the movie become more and more particular and irrational.",
    genre: ["Reaction Video"],
    releaseYear: 2024,
    cast: [{ name: "Luke & Noah Clarke", character: "Starring" }],
    crew: [{ name: "Luke & Noah Clarke", role: ["Editor"] }],
    links: [
      {
        name: "Youtube",
        link: "https://youtu.be/rs9yS0W6NLs?si=5NO3V65c_SvAR-0V",
      },
    ],
    groupings: [
      { name: "Luke", group: ["Producing", "Editing", "Documentary"] },
      { name: "Noah", group: ["Producing", "Editing", "Documentary"] },
    ],
  },
  {
    id: 20,
    image: ["/images/chetLarson/introduction/introduction.jpg"],
    title: "Chet Larson - Introduction feat. osquinn",
    description:
      "During the livestream premiere of Chet Larson, an introductory skit, written and directed by Luke & Noah and featuring popular recording artist Quinn, was included before the movie itself. This short shows a stage interaction between Quinn and the fictionalized Chet and Ernie characters.",
    genre: ["Mockumentary", "Comedy"],
    releaseYear: 2024,
    cast: [
      { name: "Luke or Noah Clarke", character: "Chet Larson" },
      { name: "Sam Kanda", character: "Ernie Jackson" },
      { name: "Osquinn", character: "Herself" },
    ],
    crew: [],
    links: [],
    groupings: [
      { name: "Luke", group: ["Producing", "Writing"] },
      { name: "Noah", group: ["Producing", "Writing", "Acting"] },
    ],
  },
  {
    id: 21,
    image: ["/images/threeTorches/screenshot.png"],
    title: "Three Torches: Spring Episode 3",
    description:
      "This news feature compiles several shorter, news featurettes into one complete episode of news from FSU in the spring of 2024. These news featurettes are brought together by sections filmed with Sarah Grace Hutchinson.",
    genre: ["News Feature"],
    releaseYear: 2024,
    cast: [{ name: "Sarah Grace Hutchinson", character: "Show Host" }],
    crew: [
      { name: "Jim Garbarino", role: ["Executive Producer", "Graphics"] },
      { name: "Sheridan Skinner", role: ["Producer"] },
      { name: "Jack Arduser", role: ["Producer"] },
      { name: "Luke Clarke", role: ["Producer"] },
    ],
    links: [
      {
        name: "Youtube",
        link: "https://youtu.be/DDBvj73K1FI?si=GjCMotcZElOohT_r",
      },
    ],
    groupings: [{ name: "Luke", group: ["Producing", "Editing"] }],
  },
  {
    id: 22,
    image: ["/images/ghostAtCostumeParty/screenshot.jpg"],
    title: "A Ghost at a Costume Party",
    description:
      "This 2024 short film by animator Giovanni Rodriguez features the debut voice acting performance of Luke Clarke, which appears throughout the first minute and a half.",
    genre: ["Animation", "Comedy", "Drama"],
    releaseYear: 2024,
    cast: [
      { name: "Luke Clarke", character: "Adam" },
      { name: "Noah Alewel", character: "Dillan" },
      { name: "Meg Cunningham", character: "Lisa" },
      { name: "Dylan Fisherman", character: "DJ" },
      { name: "Joseph Nguyen", character: "Sammy" },
    ],
    crew: [
      { name: "Giovanni Rodriguez", role: ["Directed", "edited", "animated"] },
    ],
    links: [
      {
        name: "Youtube",
        link: "https://youtu.be/wz4dkEWw9QI?si=SanGmepsVuO5f7eg",
      },
    ],
    groupings: [{ name: "Luke", group: ["Acting"] }],
  },
  {
    id: 23,
    image: ["/images/inWithTheNew/screenshot.png"],
    title: "...In with the New",
    description:
      "In this 2023 black and white dramedy short by writer and director Kane Bumpers, we follow a mime going about their lonely, day to day tasks. In the film, Luke plays a thief who steals what little money the mime makes busking.",
    genre: ["Drama", "Comedy"],
    releaseYear: 2023,
    cast: [
      { name: "Antonia Pack-Brown", character: "Mime" },
      { name: "Sam Boyer", character: "Musician" },
      { name: "Luke Clarke", character: "Thief" },
      { name: "James Carrillo", character: "Phone Guy" },
      { name: "Rebecca Borgioli", character: "Dismissive Phone Girl" },
      { name: "Shirval Custis", character: "Walking Girl" },
      { name: "Deltron Johnson", character: "Musician Audience" },
      { name: "River Watson", character: "Stretching Guy" },
      { name: "Sara Gonzalez", character: "Girl in Dream" },
      { name: "Logan Licini", character: "Mime Stand-In" },
      { name: "Kane Bumpers", character: "Smelly Guy" },
    ],
    crew: [
      {
        name: "Kane Bumpers",
        role: [
          "Writer",
          "Director",
          "Editor",
          "Cinematography",
          "Sound Design",
        ],
      },
      { name: "Sam Boyer", role: ["Gaffer"] },
      { name: "Sara Gonzalez", role: ["Lighting Technician"] },
    ],
    links: [
      {
        name: "Youtube",
        link: "https://youtu.be/NdQt2LJwoz4?si=sgyROYCmrJjuBWBl",
      },
    ],
    groupings: [{ name: "Luke", group: ["Acting"] }],
  },
  {
    id: 24,
    image: ["/images/atomBomb/screenshot.JPEG"],
    title: "Atom Bomb",
    description:
      "In this 2023 dramatic comedy short by writer and director Tommy Adzema, various characters react to the news that Oklahoma City has been annihilated by a nuclear bomb. In the film, Noah gives a comedic turn as the character tasked with delivering the news of the bombing to the protagonist. However, he is more concerned with attempting to get fellatio from a barista at the coffee shop they find themselves at.",
    genre: ["Drama", "Comedy"],
    releaseYear: 2023,
    cast: [
      { name: "Cole Taylor", character: "Ben" },
      { name: "Noah Clarke", character: "Jay" },
      { name: "Jonathan (jonny) Gold", character: "Daniel Martin" },
      { name: "Elena Brace", character: "Shell" },
      { name: "Terese Corbin", character: "Leni" },
    ],
    crew: [
      { name: "Tommy Adzema", role: ["Writer", "Director", "Editor"] },
      { name: "Ariya Beckler", role: ["Producer"] },
      {
        name: "Isabela de la Grana",
        role: ["Director of Photography", "Editor"],
      },
      { name: "Sebastian Brito", role: ["Assistant Director"] },
      { name: "Terese Corbin", role: ["Script Supervisor"] },
      { name: "Madeleine Tremblay", role: ["Sound Mixer"] },
      { name: "Kane Bumpers", role: ["Production Assistant"] },
      { name: "Jonathan (jonny) Gold", role: ["Music"] },
    ],
    links: [
      {
        name: "Youtube",
        link: "https://youtu.be/kzYM4O359_g?si=MstHv-ZrINmsQdXY",
      },
    ],
    groupings: [{ name: "Noah", group: ["Acting"] }],
  },
  {
    id: 25,
    image: ["/images/hairlessDog/hairlessDogVertical.jpg", "/images/hairlessDog/screenshot.jpg"],
    title: "Hairless Dog",
    description:
      "In this 2023 black and white dramedy short by writer and director Tommy Adzema, Noah plays Ian alongside Sara Gonzalez as Lucy.",
    genre: ["Drama"],
    noahWork: true,
    releaseYear: 2023,
    cast: [
      { name: "Noah Clarke", character: "Ian" },
      { name: "Sara Gonzalez", character: "Lucy" },
    ],
    crew: [
      { name: "Tommy Adzema", role: ["Writer", "Director", "Editor", "Music"] },
      { name: "Bryan Herrera", role: ["Producer"] },
      { name: "Sebastian Brito", role: ["Director of Photography"] },
      { name: "Terese Corbin", role: ["Production Designer"] },
      { name: "Juan Martinez", role: ["First Assistant Camera"] },
      {
        name: "Jalen Rayno",
        role: ["First Assistant Camera", "Grip & Electric"],
      },
      { name: "Logan James", role: ["Second Assistant Camera"] },
      { name: "Cole Taylor", role: ["Second Assistant Director"] },
      { name: "Max Losson", role: ["Script Supervisor"] },
      { name: "Blake Hallman", role: ["Gaffer"] },
      { name: "Dylan Jampol", role: ["Sound Mixer"] },
      { name: "Alexa Palen", role: ["Production Assistant"] },
    ],
    links: [
      {
        name: "Youtube",
        link: "https://youtu.be/-b4cW_N0l70?si=R_Ui77UG6C_8BoKU",
      },
    ],
    groupings: [{ name: "Noah", group: ["Acting"] }],
  },
  {
    id: 26,
    image: ["/images/whoKilledGeorge/screenshot.png"],
    title: "Okay, Who Killed George?",
    description:
      "In this 2023 horror comedy short by director Chris J. Lopez, Luke is mistaken for a serial killer, or is he?",
    genre: ["Comedy", "Horror"],
    releaseYear: 2023,
    cast: [
      { name: "PJ Simon", character: "Dave" },
      { name: "Elijah Duckworth", character: "Peter" },
      { name: "Luke Clarke", character: "Jeremy" },
      { name: "Chris J. Lopez", character: "Suited Moron" },
      { name: "Dean Diodato", character: "George" },
    ],
    crew: [
      {
        name: "Chris J. Lopez",
        role: ["Writer", "Director", "Editor", "Music"],
      },
      { name: "Sean Denney", role: ["Director of Photography"] },
    ],
    links: [
      {
        name: "Youtube",
        link: "https://youtu.be/VDSDr50GNKY?si=oH6WE-M8MWIzaVKZ",
      },
    ],
    groupings: [{ name: "Luke", group: ["Acting"] }],
  },
  {
    id: 27,
    image: ["/images/theFearsWeCantEscape/screenshot.jpg"],
    title: "The Fears We Can't Escape",
    description:
      "This experimental short film from director Samuel Correa (who would go on to be the director of photography on Convenience) sees Noah acting as the roommate to future collaborator Jaden Garcia.",
    genre: ["Drama", "Experimental"],
    releaseYear: 2022,
    cast: [
      { name: "Jaden Garcia", character: "" },
      { name: "Virginia Monasterio", character: "" },
      { name: "Noah Clarke", character: "" },
      { name: "Mikhelon Arnold", character: "" },
    ],
    crew: [{ name: "Samuel Correa", role: ["Director", "Cinematographer"] }],
    links: [
      {
        name: "Youtube",
        link: "https://youtu.be/f_ASjhGXifA?si=7eDSGvwwgR6lLia5",
      },
    ],
    groupings: [{ name: "Noah", group: ["Acting"] }],
  },
  {
    id: 28,
    image: ["/images/rumorOfRealThings/screenshot.jpeg"],
    title: "The Rumor of Real Things | STITCH Runway | SS24",
    description:
      "In this recording of the Spring 2024 Stitch Fashion Runway, Luke acted as one of four camera operators tasked with recording the event. On top of this, Luke assisted in the construction and breakdown of equipment for this show at the direction of close collaborator Jay Rayno.",
    genre: ["Fashion Runway", "Abstract"],
    releaseYear: 2024,
    cast: [],
    crew: [
      { name: "Zaheen Rahman", role: ["Director"] },
      { name: "Jay Rayno", role: ["Editor"] },
      { name: "Luke Clarke", role: ["Camera Operators"] },
      { name: "Jaden Garcia", role: ["Camera Operators"] },
      { name: "Mikhelon Arnold", role: ["Camera Operators"] },
      { name: "Kevin Huang", role: ["Design Director"] },
    ],
    links: [
      {
        name: "Youtube",
        link: "https://youtu.be/NNTxKOtRJGo?si=IEDyDx_-tYWLEvxf",
      },
    ],
    groupings: [{ name: "Luke", group: ["Cinematography"] }],
  },
  {
    id: 29,
    image: ["/images/seminoleScoop/screenshot.png"],
    title: "Seminole Scoop Episodes 24-34",
    description:
      "Luke was the set director and primary sound coordinator on a season's worth of episodes of The Seminole Scoop, a weekly, social media based, news show for the FSView & Florida Flambeau. Luke would also occasionally assist in editing, color grading, and general direction.",
    genre: ["Weekly news show"],
    releaseYear: 2024,
    cast: [{ name: "Benjamin Taubman", character: "Host" }],
    crew: [
      { name: "Isabella Ensign", role: ["Executive Producer"] },
      { name: "Christopher Monzon", role: ["Director of Photography"] },
      { name: "Jaden Garcia", role: ["Editor"] },
      { name: "Luke Clarke", role: ["Set Director", "Audio Coordinator"] },
      { name: "Samson McCarthy", role: ["Boom Mic Operator"] },
    ],
    links: [
      {
        name: "Instagram 1",
        link: "https://www.instagram.com/fsview/reel/C3D6ntVr5OS/",
      },
      {
        name: "Instagram 2",
        link: "https://www.instagram.com/fsview/reel/C3YzsvLL_JU/",
      },
      {
        name: "Instagram 3",
        link: "https://www.instagram.com/fsview/reel/C3neagwLo-D/",
      },
      {
        name: "Instagram 4",
        link: "https://www.instagram.com/fsview/reel/C33gA2-rocR/",
      },
      {
        name: "Instagram 5",
        link: "https://www.instagram.com/fsview/reel/C4MZSVhLNne/",
      },
      {
        name: "Instagram 6",
        link: "https://www.instagram.com/fsview/reel/C4tnv7ZLuLG/",
      },
      {
        name: "Instagram 7",
        link: "https://www.instagram.com/fsview/reel/C4_Cm5urNjD/",
      },
      {
        name: "Instagram 8",
        link: "https://www.instagram.com/fsview/reel/C5PHYK_rszt/",
      },
      {
        name: "Instagram 9",
        link: "https://www.instagram.com/fsview/reel/C5lmbA7rb5A/",
      },
      {
        name: "Instagram 10",
        link: "https://www.instagram.com/fsview/reel/C51hDVMu2x3/",
      },
      {
        name: "Instagram 11",
        link: "https://www.instagram.com/fsview/reel/C6JyvKvLh36/",
      },
    ],
    groupings: [
      { name: "Luke", group: ["Producing", "Editing", "Documentary"] },
    ],
  },
  {
    id: 30,
    image: ["/images/toro/screenshot.jpg"],
    title: "Toro Portuguese Photoshoot",
    description:
      'A photoshoot for the DMV based, post-hardcore/shoegaze band "Toro" at a Portuguese restaurant located in Wheaton, Maryland. These decadent photos were taken in support of their then recently released single "Latin Kobe"',
    genre: ["Photography"],
    releaseYear: 2025,
    cast: [],
    crew: [],
    links: [
      {
        name: "Instagram",
        link: "https://www.instagram.com/p/DLGejUsRbzR/?img_index=1",
      },
      {
        name: "Linkedin",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7355206388966453250/",
      },
    ],
    groupings: [
      { name: "Luke", group: ["Photography"] },
      { name: "Noah", group: ["Photography"] },
    ],
  },
  {
    id: 31,
    image: ["/images/mountains/mountainsVertical.jpg", "/images/mountains/screenshot.jpg"],
    title: "Mountains",
    description:
      "An abstract portrayal of mountains created, shot, and edited by Luke",
    lukeWork: true,
    genre: ["Abstract Art", "Photography"],
    releaseYear: 2025,
    cast: [],
    crew: [],
    links: [
      {
        name: "Instagram",
        link: "https://www.instagram.com/p/DGi_dhbRwZ2/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      },
    ],
    groupings: [{ name: "Luke", group: ["Photography"] }],
  },
  {
    id: 32,
    image: ["/images/artificeCD/artificeVertical.jpeg", "/images/artificeCD/cd_3.jpeg", "/images/artificeCD/cd_7.jpeg"],
    title: "Artifice CD Art Direction",
    description:
      "Cover Art, CD design, and general art direction for the release of the Ambient Electronic EP Artifice by Virginia based musician Perky. The art was designed to reflect the seasonal themes and soothing tones of the works 4 songs.",
    lukeWork: true,
    noahWork: true,
    genre: ["Abstract Art", "Photography", "Physical Media"],
    releaseYear: 2025,
    cast: [],
    crew: [],
    links: [
      {
        name: "Luke's Instagram Post",
        link: "https://www.instagram.com/p/DKAcBANxHlW/?img_index=1",
      },
      {
        name: "Noah's Instagram Post",
        link: "https://www.instagram.com/p/DKF-d11RY0w/?img_index=1",
      },
    ],
    groupings: [
      { name: "Luke", group: ["Photography", "Music"] },
      { name: "Noah", group: ["Photography", "Music"] },
    ],
  },
  {
    id: 33,
    image: ["/images/roadside/actors.jpg", "/images/roadside/crew.jpg"],
    title: "Roadside BTS Photography",
    description:
      "Behind the scenes photos taken during the filming of Jalen Rayno's short film Roadside",
    genre: ["Photography"],
    releaseYear: 2024,
    cast: [],
    crew: [],
    links: [],
    groupings: [{ name: "Luke", group: ["Photography"] }],
  },
  {
    id: 34,
    image: ["/images/soMuch/albumCover.jpg"],
    title: "So Much",
    description:
      "Luke & Noah worked closely with recording artist Roxy Phantom in executive-producing their debut album, So Much. From notes on mixing to helping to curate the albums unique, genre-bending sequencing, Luke and Noah helped to construct the album So Much became (in fact Noah came up with the name). All credit goes to Roxy Phantom though, the production, songwriting, and vocals on this are all top notch, and is definitely worth a listen.",
    genre: ["Psychedelic Folk", "Ambient Pop", "Glitch", "Singer-Songwriter"],
    releaseYear: 2022,
    cast: [],
    crew: [
      { name: "Kayla Shomar-Corbett", role: ["Songwriter", "Producer"] },
      { name: "Luke & Noah Clarke", role: ["Executive Producer"] },
    ],
    links: [
      {
        name: "Bandcamp",
        link: "https://roxyphantom.bandcamp.com/album/so-much",
      },
      {
        name: "Spotify",
        link: "https://open.spotify.com/album/1sA11z4tmIMqF1MlSigHoN?si=_0MFZx1aQAGe_yO5tqCq6A",
      },
      {
        name: "Rateyourmusic",
        link: "https://rateyourmusic.com/release/album/roxy-phantom/so-much/",
      },
    ],
    groupings: [
      { name: "Luke", group: ["Music"] },
      { name: "Noah", group: ["Music"] },
    ],
  },
  {
    id: 35,
    image: ["/images/maizes/screenshot.png"],
    title: "MAIZE5 DJ Mix",
    description:
      "To mark the 5 year anniversary of their now defunct mashup channel Maize Music, Luke & Noah released their third DJ Mix, MAIZE5. Compiling the best mashups the two had constructed over the preceding half decade, this journey through popular recorded music is a perfect send off to this era of their work.",
    genre: ["Plunderphonics", "Mashup", "Comedy"],
    releaseYear: 2022,
    cast: [],
    crew: [],
    links: [
      {
        name: "Youtube",
        link: "https://youtu.be/8YCHZt_fvW8?si=cNVEvnCfT0IZmddz",
      },
      { name: "Soundcloud", link: "https://soundcloud.com/maize-music/maize5" },
      {
        name: "Rateyourmusic",
        link: "https://rateyourmusic.com/release/djmix/maize-music/maize5/",
      },
    ],
    groupings: [
      { name: "Luke", group: ["Music"] },
      { name: "Noah", group: ["Music"] },
    ],
  },
  {
    id: 36,
    image: ["/images/chetLarson/soundtrack/soundtrack.jpg"],
    title: "Chet Larson (Original Motion Picture Soundtrack)",
    description:
      "In promotion of the film Chet Larson, outsider house artist DJ Sabrina the Teenage DJ helped curate the officially released soundtrack for the film. Made up of 6 previously released tracks from her discography, this EP's songs were both sequenced and re-edited by Luke & Noah to make for a breezy, 32 minute listen.",
    genre: [
      "House",
      "Plunderphonics",
      "Dance-pop",
      "Outsider House",
      "Nu Disco",
    ],
    releaseYear: 2021,
    cast: [],
    crew: [],
    links: [
      {
        name: "Spotify",
        link: "https://open.spotify.com/album/0RrGvAD0uRywqUNoZCILCB?si=5MNAjwW1QjyoMpVMZIGSUg",
      },
      {
        name: "Apple Music",
        link: "https://music.apple.com/us/album/chet-larson-original-motion-picture-soundtrack-ep/1588324301",
      },
      { name: "Tidal", link: "https://tidal.com/browse/album/199544011" },
      {
        name: "Genius",
        link: "https://genius.com/albums/Dj-sabrina-the-teenage-dj/Chet-larson-original-motion-picture-soundtrack",
      },
      {
        name: "Rateyourmusic",
        link: "https://rateyourmusic.com/release/ep/dj-sabrina-the-teenage-dj/chet-larson/",
      },
      { name: "Instagram", link: "https://www.instagram.com/p/CUpmgRlg1L2/" },
    ],
    groupings: [
      { name: "Luke", group: ["Music"] },
      { name: "Noah", group: ["Music"] },
    ],
  },
  {
    id: 37,
    image: ["/images/songsThatDont/screenshot.png"],
    title: "Songs That Don't Get the Crowd Goin",
    description:
      "Luke and Noah's second DJ Mix in only a month, this body of work finds the pair expanding upon the sounds explored in their first. More firmly cementing a chopped and screwed and dream pop sound, Songs That Don't Get the Crowd Goin manages to stand alone as a well curated collection of distorted samples that never sacrifices the comedic spirit of its predecessor.",
    genre: ["Plunderphonics", "Mashup", "Chopped & Screwed"],
    releaseYear: 2021,
    cast: [],
    crew: [],
    links: [
      {
        name: "Youtube",
        link: "https://youtu.be/VGmhaUlVwk0?si=QuRpjJDvCe92LEAL",
      },
      {
        name: "Soundcloud",
        link: "https://on.soundcloud.com/zvCKeS4pUG5HyFRH1C",
      },
      {
        name: "Rateyourmusic",
        link: "https://rateyourmusic.com/release/djmix/songs-that-dont-get-the-crowd-goin/songs-that-dont-get-the-crowd-goin/",
      },
    ],
    groupings: [
      { name: "Luke", group: ["Music"] },
      { name: "Noah", group: ["Music"] },
    ],
  },
  {
    id: 38,
    image: ["/images/songsThatDo/screenshot.png"],
    title: "Songs That Get the Crowd Goin",
    description:
      "During the Covid-19 Pandemic, Luke and Noah unveiled their debut DJ Mix to the unsuspecting crowd of Bangerfest 2's virtual concert goers across the globe. This absurd 25 minute mashup of popular recorded music with original songs is a perfect time capsule of a culture in lockdown",
    genre: ["Plunderphonics", "Mashup", "Comedy"],
    releaseYear: 2021,
    cast: [],
    crew: [],
    links: [
      {
        name: "Youtube",
        link: "https://youtu.be/sL9xs9mqIhM?si=BgYtzJS958G0F-ye",
      },
      {
        name: "Soundcloud",
        link: "https://on.soundcloud.com/W9YiwFu1C4kH47x8VF",
      },
      {
        name: "Rateyourmusic",
        link: "https://rateyourmusic.com/release/djmix/_vuestela-affiliates-luke-and-noah-clarke-present-songs-that-get-the-crowd-goin-a-dj-mix-by-maize-music-hosted-by-ig-philbin-sponsored-by-ben-and-jerrys-chetlarsoncomingsoon/_vuestela-affiliates-luke-and-noah-clarke-present-%E2%80%9Csongs-that-get-the-crowd-goin%E2%80%9D-a-dj-mix-by-maize-music-hosted-by-ig-philbin-sponsored-by-ben-and-jerry%E2%80%99s-chetlarsoncomingsoon/",
      },
    ],
    groupings: [
      { name: "Luke", group: ["Music"] },
      { name: "Noah", group: ["Music"] },
    ],
  },
  {
    id: 39,
    image: ["/images/teachersMinecraft/ep1/screenshot.png"],
    title: "Teachers Playing Minecraft: Episode 1",
    description:
      "Episode 1 of a three part series produced and edited by Luke & Noah that finds their high school teachers attempting to play Minecraft with one another on school computers.",
    genre: ["Let's Play", "Reaction Video"],
    releaseYear: 2019,
    cast: [],
    crew: [],
    links: [
      {
        name: "Youtube",
        link: "https://youtu.be/EFj5xkfwyiA?si=1xnkTmeYCUMB5-AD",
      },
    ],
    groupings: [
      { name: "Luke", group: ["Producing", "Editing"] },
      { name: "Noah", group: ["Producing", "Editing"] },
    ],
  },
  {
    id: 40,
    image: ["/images/teachersMinecraft/ep2/screenshot.png"],
    title: "Teachers Playing Minecraft: Episode 2",
    description:
      "Episode 2 of a three part series produced and edited by Luke & Noah that finds their high school teachers attempting to play Minecraft with one another on school computers.",
    genre: ["Let's Play", "Reaction Video"],
    releaseYear: 2020,
    cast: [],
    crew: [],
    links: [
      {
        name: "Youtube",
        link: "https://youtu.be/tylOd67C3ls?si=AfISM0VFyk16ChrX",
      },
    ],
    groupings: [
      { name: "Luke", group: ["Producing", "Editing"] },
      { name: "Noah", group: ["Producing", "Editing"] },
    ],
  },
  {
    id: 41,
    image: ["/images/teachersMinecraft/ep3/screenshot.png"],
    title: "Teachers Playing Minecraft: Episode 3",
    description:
      "The final episode of a three part series produced and edited by Luke & Noah that finds their high school teachers attempting to play Minecraft with one another on school computers.",
    genre: ["Let's Play", "Reaction Video"],
    releaseYear: 2020,
    cast: [],
    crew: [],
    links: [
      {
        name: "Youtube",
        link: "https://youtu.be/gtuDdYze0uo?si=ev4pn1ObHL7UVHEN",
      },
    ],
    groupings: [
      { name: "Luke", group: ["Producing", "Editing"] },
      { name: "Noah", group: ["Producing", "Editing"] },
    ],
  },
  {
    id: 42,
    image: ["/images/cougarClub/graduation/screenshot.jpg"],
    title: "2019 Cougar Cub Graduation",
    description:
      'The first episode of a series produced and edited by Luke and Noah chronicling Quince Orchard High School\'s day care students. This episode focuses on the "graduating class" of 2019.',
    genre: ["Interview", "News Featurette", "Comedy"],
    releaseYear: 2019,
    cast: [],
    crew: [],
    links: [
      {
        name: "Youtube",
        link: "https://youtu.be/JE3cymBDgVk?si=gy2Ga5KBRcMIes4L",
      },
    ],
    groupings: [
      { name: "Luke", group: ["Producing", "Editing", "Documentary"] },
      { name: "Noah", group: ["Producing", "Editing", "Documentary"] },
    ],
  },
  {
    id: 43,
    image: ["/images/cougarClub/spooktacular/screenshot.jpg"],
    title: "Cougar Cubs Spooktacular",
    description:
      "The second episode of a series produced and edited by Luke and Noah chronicling Quince Orchard High School's day care students. This episode, which initially premiered as a part of QOTV's weekly news show, follows Quince Orchard's daycare students as they participate in Halloween themed activities.",
    genre: ["Interview", "News Featurette", "Comedy"],
    releaseYear: 2019,
    cast: [],
    crew: [],
    links: [
      {
        name: "Youtube",
        link: "https://youtu.be/3Wok_xY8QJQ?si=f7QTVt9TKWljUtQn",
      },
    ],
    groupings: [
      { name: "Luke", group: ["Producing", "Editing", "Documentary"] },
      { name: "Noah", group: ["Producing", "Editing", "Documentary"] },
    ],
  },
  {
    id: 44,
    image: ["/images/cougarClub/thankstacular/screenshot.jpg"],
    title: "Cougar Cubs Thankstacular",
    description:
      "The third episode of a series produced and edited by Luke and Noah chronicling Quince Orchard High School's day care students. This episode, which initially premiered as a part of QOTV's weekly news show, follows Quince Orchard's daycare students as they participate in Thanksgiving themed activities.",
    genre: ["Interview", "News Featurette", "Comedy"],
    releaseYear: 2019,
    cast: [],
    crew: [],
    links: [
      {
        name: "Youtube",
        link: "https://youtu.be/5Qjr0z-zAXw?si=BD7aQIbfDSgrRl5S",
      },
    ],
    groupings: [
      { name: "Luke", group: ["Producing", "Editing", "Documentary"] },
      { name: "Noah", group: ["Producing", "Editing", "Documentary"] },
    ],
  },
  {
    id: 45,
    image: ["/images/cougarClub/wintacular/screenshot.jpg"],
    title: "Cougar Cubs Wintacular",
    description:
      "The fourth episode of a series produced and edited by Luke and Noah chronicling Quince Orchard High School's day care students. This episode, which initially premiered as a part of QOTV's weekly news show, follows Quince Orchard's daycare students as they participate in Christmas and Winter themed activities.",
    genre: ["Interview", "News Featurette", "Comedy"],
    releaseYear: 2020,
    cast: [],
    crew: [],
    links: [
      {
        name: "Youtube",
        link: "https://youtu.be/dVtAxK0pxGM?si=AzP8gudVrPxQ_nj3",
      },
    ],
    groupings: [
      { name: "Luke", group: ["Producing", "Editing", "Documentary"] },
      { name: "Noah", group: ["Producing", "Editing", "Documentary"] },
    ],
  },
  {
    id: 46,
    image: [
      "/images/letsTalkMoco/screenshotOne.jpg",
      "/images/letsTalkMoco/screenshotTwo.jpg",
    ],
    title: "Let's Talk Moco: Visarts Center",
    description:
      "A news featurette created as a part of the Montgomery Community Media Television Series Let’s Talk Moco. This short documentary segment chronicles the Visarts community center located in the heart of downtown Rockville, Maryland. This segment would go on to win Luke and Noah the award for best student production at MCM’s in house 2019 Monty awards.",
    genre: ["Documentary", "News Featurette"],
    releaseYear: 2019,
    accolades: ["Monty Award Winner - Best Student Production (2019)"],
    cast: [],
    crew: [],
    links: [],
    groupings: [
      { name: "Luke", group: ["Producing", "Documentary"] },
      { name: "Noah", group: ["Producing", "Documentary"] },
    ],
  },
  // projects that are coming soon
  
  {
    id: 48,
    image: ["/images/bigScruff/screenshot.png"],
    title: "Big Scruff - Remind EP (Music Video)",
    description:
      "Created from the most abstract footage shot while creating the music video for Mr. Toad’s Wild Wide, this music video will find Luke & Noah creating their most experimental and least literal work yet.",
    genre: ["Music Video", "Experimental", "Art-House"],
    releaseYear: 2025,
    comingSoon: true,
    cast: [
      { name: "Lilith Videt Weeks", character: "Herself" },
      { name: "Isaac Lucy", character: "Himself" },
      { name: "Arianna Ganley", character: "Herself" },
      { name: "Patrick Flanagan", character: "Himself" },
    ],
    crew: [
      {
        name: "Luke & Noah Clarke",
        role: ["Director", "Editor", "Cinematographer"],
      },
      { name: "Luke Clarke", role: ["Producer"] },
    ],
    links: [],
    groupings: [
      {
        name: "Luke",
        group: [
          "Directing",
          "Producing",
          "Editing",
          "Cinematography",
          "Music Video",
        ],
      },
      {
        name: "Noah",
        group: ["Directing", "Editing", "Cinematography", "Music Video"],
      },
    ],
  },
  
  {
    id: 50,
    image: ["/images/wvfsDocu/screenshot.jpg"],
    title: "Untitled Documentary Short (WVFS Radio Station)",
    description: "Filmed in 2024, this documentary short will focus on the history and continued importance of the WVFS radio station to the city of Tallahassee.",
    genre: ["Documentary"],
    releaseYear: 2025,
    comingSoon: true,
    cast: [],
    crew: [
      {
        name: "Luke & Noah Clarke",
        role: ["Director"],
      },
      { name: "Luke Clarke", role: ["Producer"] },
      { name: "Noah Clarke", role: ["Producer"] },
      { name: "Donovan Lough", role: ["Producer"] },
    ],
    links: [],
    groupings: [
      { name: "Luke", group: ["Directing", "Producing", "Editing", "Cinematography"] },
      { name: "Noah", group: ["Directing", "Editing"] },
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

// get projects by lukeWork
export function getLukeProjects(): WorkProject[] {
  return workProjects.filter((project) => project.lukeWork);
}

// get projects by noahWork
export function getNoahProjects(): WorkProject[] {
  return workProjects.filter((project) => project.noahWork);
}
