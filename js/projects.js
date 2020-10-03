const projectsObjs = [
  {
    name: "Counting Rows",
    description: [
      "A tool to keep track of the number of rows I've knitted of various charts and/or patterns.",
      "Similar extant tools have intrusive ads and/or too many unnecessary features for my liking. Since knitting is already complicated enough, I sought to make something barebones.",
      "Each counter is saved to and loaded from localStorage for extra simplicity.",
      "Made with Svelte and TailwindCSS."
    ],
    demo: "https://countingrows.netlify.app/",
    source: "https://github.com/jasmwebb/counting-rows",
    thumbnail: "/images/thumbs/countingrowsthumb.png"
  },
  {
    name: "K-STAN (code name)",
    description: [
      "The simplest analogy would be \"Yelp for K-Pop Stans.\"",
      "Aims to aggregate K-Pop locations of interest (e.g., cafes/restuarants owned by K-Pop idols or their family members) on one platform.", 
      "K-Pop fans who are planning a trip to Korea have a covenient way to access this information in one place, as opposed to having to piece it together from several fan sites, the number of which grows exponentially by the number of groups the fan supports.",
      "This is a collaborative project that currently has no code; but we are aiming to deploy K-STAN as a JAMstack application."
    ],
    demo: "https://www.figma.com/file/lvdKpHHm7cok0fVFtGHdEM/Prototypes?node-id=0%3A1",
    source: null,
    thumbnail: "/images/thumbs/kstanframes.png"
  },
  {
    name: "Kamatimer",
    description: [
      "Just a pomodoro timer written in vanilla JavaScript, HTML5, and SCSS."
    ],
    demo: "https://jasmwebb.github.io/kamatimer/",
    source: "https://github.com/jasmwebb/kamatimer",
    thumbnail: "/images/thumbs/kamatimerthumb.png"
  },
  {
    name: "Portfolio",
    description: [
      "This very portfolio was made with ♡ with vanilla JavaScript, HTML5, and SCSS. The project section is even programmatically generated from JSON!",
      "The bear graphics were also drawn by me."
    ],
    demo: null,
    source: "https://github.com/jasmwebb/jasmwebbdev",
    thumbnail: "/images/ghost_bear_t.png"
  }
];

export default projectsObjs;
