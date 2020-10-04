const projectsObjs = [
  {
    name: "Counting Rows",
    description: [
      "A tool to keep track of the number of rows I've knitted of various charts and/or patterns.",
      "Similar extant tools have intrusive ads and/or too many unnecessary features for my liking. Since knitting is already complicated enough, I sought to make something barebones.",
      "Each counter is saved to and loaded from <em class='highlight2'>localStorage</em> for extra simplicity.",
      "Made with <em class='highlight2'>Svelte</em> and <em class='highlight2'>TailwindCSS</em>."
    ],
    demo: "https://countingrows.netlify.app/",
    source: "https://github.com/jasmwebb/counting-rows",
    thumbnail: "/static/thumbs/countingrowsthumb.png"
  },
  {
    name: "K-STAN (code name)",
    description: [
      "The simplest analogy would be <em class='highlight2'>Yelp for K-Pop Stans</em>.",
      "A one-stop resource to locate and bookmark cafes, restaurants, etc. associated with popular Korean Pop idols.", 
      "K-Pop fans who are planning a trip to Korea have a covenient way to access this information in one place, as opposed to having to piece it together from several fan sites, the number of which grows exponentially by the number of groups the fan supports.",
      "This is a collaborative project that currently has no code; but we are aiming to deploy K-STAN as a <em class='highlight2'>JAMstack</em> application."
    ],
    demo: "https://www.figma.com/file/lvdKpHHm7cok0fVFtGHdEM/Prototypes?node-id=0%3A1",
    source: null,
    thumbnail: "/static/thumbs/kstanframes.png"
  },
  {
    name: "Kumho (금호) Compiler",
    description: [
      "A <em class='highlight2'>command-line interface</em> written in <em class='highlight2'>Python</em> for a friend’s business. It automates the process of combing through a large volume of files for data and synthesizing that data into Microsoft Excel tables and graphs.",
      "<em class='highlight'>Note:</em> The above thumbnail shows all the prompts and processes, however, since a data set is not specified in prompt #2, that particular execution did nothing."
    ],
    demo: null,
    source: "https://github.com/jasmwebb/kumho-compiler",
    thumbnail: "/static/thumbs/kumhocompilerthumb.png"
  },
  {
    name: "Kamatimer",
    description: [
      "Just a pomodoro timer written in vanilla <em class='highlight2'>JavaScript</em>, <em class='highlight2'>HTML5</em>, and <em class='highlight2'>SCSS</em>."
    ],
    demo: "https://jasmwebb.github.io/kamatimer/",
    source: "https://github.com/jasmwebb/kamatimer",
    thumbnail: "/static/thumbs/kamatimerthumb.png"
  },
  {
    name: "Portfolio",
    description: [
      "This very portfolio was made with <em class='highlight2' style='font-style: normal;'>♡</em> with vanilla <em class='highlight2'>JavaScript</em>, <em class='highlight2'>HTML5</em>, and <em class='highlight2'>SCSS</em>. The project section is even programmatically <em class='highlight2'>generated from JSON</em>!",
      "The bear graphics were also drawn by me."
    ],
    demo: null,
    source: "https://github.com/jasmwebb/jasmwebbdev",
    thumbnail: "/static/ghost_bear_t.png"
  }
];

export default projectsObjs;
