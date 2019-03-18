stealAllTheColors = () => {
  var h = x =>
    '#' +
        x
          .match(/\d+/g)
          .map((y = z => (+z < 16 ? '0' : '') + (+z).toString(16)))
          .join('');

  let items = $('div.collection-assets-item').toArray();
  let colorSchemes = [];

  items.forEach(item => {
    const schemeName = $(item)
      .find('a.ctooltip')
      .text()
      .trim();
    const colors = $(item)
      .find('div.frame.ctooltip')
      .children()
      .toArray()
      .map(c => h(c.style.background));

    colorSchemes.push({ schemeName, colors });
  });

  console.log(JSON.stringify(colorSchemes, null, 4));
};

stealAllTheColors();

/*
[
    {
        "schemeName": "sandy stone beach ocean diver",
        "colors": [
            "#e6e2af",
            "#a7a37e",
            "#efecca",
            "#046380",
            "#002f2f"
        ]
    },
    {
        "schemeName": "Firenze",
        "colors": [
            "#468966",
            "#fff0a5",
            "#ffb03b",
            "#b64926",
            "#8e2800"
        ]
    },
    {
        "schemeName": "Neutral Blue",
        "colors": [
            "#fcfff5",
            "#d1dbbd",
            "#91aa9d",
            "#3e606f",
            "#193441"
        ]
    },
    {
        "schemeName": "Phaedra",
        "colors": [
            "#ff6138",
            "#ffff9d",
            "#beeb9f",
            "#79bd8f",
            "#00a388"
        ]
    },
    {
        "schemeName": "Flat UI",
        "colors": [
            "#2c3e50",
            "#e74c3c",
            "#ecf0f1",
            "#3498db",
            "#2980b9"
        ]
    },
    {
        "schemeName": "Aspirin C",
        "colors": [
            "#225378",
            "#1695a3",
            "#acf0f2",
            "#f3ffe2",
            "#eb7f00"
        ]
    },
    {
        "schemeName": "Honey Pot",
        "colors": [
            "#105b63",
            "#fffad5",
            "#ffd34e",
            "#db9e36",
            "#bd4932"
        ]
    },
    {
        "schemeName": "Vitamin C",
        "colors": [
            "#004358",
            "#1f8a70",
            "#bedb39",
            "#ffe11a",
            "#fd7400"
        ]
    },
    {
        "schemeName": "Sea Wolf",
        "colors": [
            "#dc3522",
            "#d9cb9e",
            "#374140",
            "#2a2c2b",
            "#1e1e20"
        ]
    },
    {
        "schemeName": "Circus III",
        "colors": [
            "#2e0927",
            "#d90000",
            "#ff2d00",
            "#ff8c00",
            "#04756f"
        ]
    },
    {
        "schemeName": "Cherry Cheesecake",
        "colors": [
            "#b9121b",
            "#4c1b1b",
            "#f6e497",
            "#fcfae1",
            "#bd8d46"
        ]
    },
    {
        "schemeName": "Vintage Ralph Lauren",
        "colors": [
            "#703030",
            "#2f343b",
            "#7e827a",
            "#e3cda4",
            "#c77966"
        ]
    },
    {
        "schemeName": "CS04",
        "colors": [
            "#f6f792",
            "#333745",
            "#77c4d3",
            "#daede2",
            "#ea2e49"
        ]
    },
    {
        "schemeName": "Friends and foes",
        "colors": [
            "#2f2933",
            "#01a2a6",
            "#29d9c2",
            "#bdf271",
            "#ffffa6"
        ]
    },
    {
        "schemeName": "zen and tea",
        "colors": [
            "#10222b",
            "#95ab63",
            "#bdd684",
            "#e2f0d6",
            "#f6ffe0"
        ]
    },
    {
        "schemeName": "Times Changing",
        "colors": [
            "#332532",
            "#644d52",
            "#f77a52",
            "#ff974f",
            "#a49a87"
        ]
    },
    {
        "schemeName": "Ocean Sunset",
        "colors": [
            "#405952",
            "#9c9b7a",
            "#ffd393",
            "#ff974f",
            "#f54f29"
        ]
    },
    {
        "schemeName": "Pear Lemon Fizz",
        "colors": [
            "#04bfbf",
            "#cafcd8",
            "#f7e967",
            "#a9cf54",
            "#588f27"
        ]
    },
    {
        "schemeName": "Birdfolio Blues",
        "colors": [
            "#2b3a42",
            "#3f5765",
            "#bdd4de",
            "#efefef",
            "#ff530d"
        ]
    },
    {
        "schemeName": "Gettysburg",
        "colors": [
            "#962d3e",
            "#343642",
            "#979c9c",
            "#f2ebc7",
            "#348899"
        ]
    },
    {
        "schemeName": "Ventana Azul",
        "colors": [
            "#f2385a",
            "#f5a503",
            "#e9f1df",
            "#4ad9d9",
            "#36b1bf"
        ]
    },
    {
        "schemeName": "pomegranate explosion",
        "colors": [
            "#63a69f",
            "#f2e1ac",
            "#f2836b",
            "#f2594b",
            "#cd2c24"
        ]
    },
    {
        "schemeName": "28X Dusty Petrol",
        "colors": [
            "#292929",
            "#5b7876",
            "#8f9e8b",
            "#f2e6b6",
            "#412a22"
        ]
    },
    {
        "schemeName": "Salmon on Ice",
        "colors": [
            "#3e454c",
            "#2185c5",
            "#7ecefd",
            "#fff6e5",
            "#ff7f66"
        ]
    },
    {
        "schemeName": "Cote Azur",
        "colors": [
            "#00585f",
            "#009393",
            "#fffcc4",
            "#f0edbb",
            "#ff3800"
        ]
    },
    {
        "schemeName": "Garden swimming pool",
        "colors": [
            "#96ca2d",
            "#b5e655",
            "#edf7f2",
            "#4bb5c1",
            "#7fc6bc"
        ]
    },
    {
        "schemeName": "unlike",
        "colors": [
            "#88a825",
            "#35203b",
            "#911146",
            "#cf4a30",
            "#ed8c2b"
        ]
    },
    {
        "schemeName": "Flat design colors 1",
        "colors": [
            "#334d5c",
            "#45b29d",
            "#efc94c",
            "#e27a3f",
            "#df5a49"
        ]
    },
    {
        "schemeName": "Quiet Cry",
        "colors": [
            "#1c1d21",
            "#31353d",
            "#445878",
            "#92cdcf",
            "#eeeff7"
        ]
    },
    {
        "schemeName": "Japanese Garden",
        "colors": [
            "#d8caa8",
            "#5c832f",
            "#284907",
            "#382513",
            "#363942"
        ]
    },
    {
        "schemeName": "Granny Smith Apple",
        "colors": [
            "#85db18",
            "#cde855",
            "#f5f6d4",
            "#a7c520",
            "#493f0b"
        ]
    },
    {
        "schemeName": "afternoon chai",
        "colors": [
            "#cfc291",
            "#fff6c5",
            "#a1e8d9",
            "#ff712c",
            "#695d46"
        ]
    },
    {
        "schemeName": "Beach Time",
        "colors": [
            "#96ceb4",
            "#ffeead",
            "#ff6f69",
            "#ffcc5c",
            "#aad8b0"
        ]
    },
    {
        "schemeName": "View over the town",
        "colors": [
            "#ff5335",
            "#b39c85",
            "#306e73",
            "#3b424d",
            "#1d181f"
        ]
    },
    {
        "schemeName": "Keep the Change",
        "colors": [
            "#6b0c22",
            "#d9042b",
            "#f4cb89",
            "#588c8c",
            "#011c26"
        ]
    },
    {
        "schemeName": "Blue Sky",
        "colors": [
            "#16193b",
            "#35478c",
            "#4e7ac7",
            "#7fb2f0",
            "#add5f7"
        ]
    },
    {
        "schemeName": "Mountains of Burma",
        "colors": [
            "#354242",
            "#acebae",
            "#ffff9d",
            "#c9de55",
            "#7d9100"
        ]
    },
    {
        "schemeName": "Corporate Orange  Blue",
        "colors": [
            "#304269",
            "#91bed4",
            "#d9e8f5",
            "#ffffff",
            "#f26101"
        ]
    },
    {
        "schemeName": "Woman in purple dress",
        "colors": [
            "#f9e4ad",
            "#e6b098",
            "#cc4452",
            "#723147",
            "#31152b"
        ]
    },
    {
        "schemeName": "Optimist",
        "colors": [
            "#6c6e58",
            "#3e423a",
            "#417378",
            "#a4cfbe",
            "#f4f7d9"
        ]
    },
    {
        "schemeName": "Friends and foes",
        "colors": [
            "#2f2933",
            "#01a2a6",
            "#29d9c2",
            "#bdf271",
            "#ffffa6"
        ]
    },
    {
        "schemeName": "vintage card",
        "colors": [
            "#5c4b51",
            "#8cbeb2",
            "#f2ebbf",
            "#f3b562",
            "#f06060"
        ]
    },
    {
        "schemeName": "Bloggy Gradient Blues",
        "colors": [
            "#e1e6fa",
            "#c4d7ed",
            "#abc8e2",
            "#375d81",
            "#183152"
        ]
    },
    {
        "schemeName": "KnotJustNautical",
        "colors": [
            "#2c3e50",
            "#fc4349",
            "#d7dadb",
            "#6dbcdb",
            "#ffffff"
        ]
    },
    {
        "schemeName": "Bogart",
        "colors": [
            "#dddcc5",
            "#958976",
            "#611427",
            "#1d2326",
            "#6a6a61"
        ]
    },
    {
        "schemeName": "This Green",
        "colors": [
            "#00261c",
            "#044d29",
            "#168039",
            "#45bf55",
            "#96ed89"
        ]
    },
    {
        "schemeName": "lollapalooza",
        "colors": [
            "#002635",
            "#013440",
            "#ab1a25",
            "#d97925",
            "#efe7be"
        ]
    },
    {
        "schemeName": "clean modern",
        "colors": [
            "#272f32",
            "#9dbdc6",
            "#ffffff",
            "#ff3d2e",
            "#daeaef"
        ]
    },
    {
        "schemeName": "Dolores",
        "colors": [
            "#e8e595",
            "#d0a825",
            "#40627c",
            "#26393d",
            "#fffae4"
        ]
    },
    {
        "schemeName": "Life Is Beautiful () La vita e bella",
        "colors": [
            "#801637",
            "#047878",
            "#ffb733",
            "#f57336",
            "#c22121"
        ]
    },
    {
        "schemeName": "Campfire",
        "colors": [
            "#588c7e",
            "#f2e394",
            "#f2ae72",
            "#d96459",
            "#8c4646"
        ]
    },
    {
        "schemeName": "Buddha in Rain",
        "colors": [
            "#ff8000",
            "#ffd933",
            "#cccc52",
            "#8fb359",
            "#192b33"
        ]
    },
    {
        "schemeName": "Kayak",
        "colors": [
            "#36362c",
            "#5d917d",
            "#a8ad80",
            "#e6d4a7",
            "#825534"
        ]
    },
    {
        "schemeName": "Avoidance",
        "colors": [
            "#5e0042",
            "#2c2233",
            "#005869",
            "#00856a",
            "#8db500"
        ]
    },
    {
        "schemeName": "sun splash",
        "colors": [
            "#002f32",
            "#42826c",
            "#a5c77f",
            "#ffc861",
            "#c84663"
        ]
    },
    {
        "schemeName": "Pistachio",
        "colors": [
            "#b0cc99",
            "#677e52",
            "#b7ca79",
            "#f6e8b1",
            "#89725b"
        ]
    },
    {
        "schemeName": "Flat Design Colors",
        "colors": [
            "#334d5c",
            "#45b29d",
            "#efc94c",
            "#e27a3f",
            "#df5a49"
        ]
    },
    {
        "schemeName": "Digerati",
        "colors": [
            "#52656b",
            "#ff3b77",
            "#cdff00",
            "#ffffff",
            "#b8b89f"
        ]
    },
    {
        "schemeName": "Dream",
        "colors": [
            "#174c4f",
            "#207178",
            "#ff9666",
            "#ffe184",
            "#f5e9be"
        ]
    },
    {
        "schemeName": "Salamander",
        "colors": [
            "#b8ecd7",
            "#083643",
            "#b1e001",
            "#cef09d",
            "#476c5e"
        ]
    },
    {
        "schemeName": "Beetle Bus goes Jamba Juice",
        "colors": [
            "#730046",
            "#bfbb11",
            "#ffc200",
            "#e88801",
            "#c93c00"
        ]
    },
    {
        "schemeName": "Elemental",
        "colors": [
            "#e64661",
            "#ffa644",
            "#998a2f",
            "#2c594f",
            "#002d40"
        ]
    },
    {
        "schemeName": "Red  Hot",
        "colors": [
            "#450003",
            "#5c0002",
            "#94090d",
            "#d40d12",
            "#ff1d23"
        ]
    },
    {
        "schemeName": "Aviator",
        "colors": [
            "#6a7059",
            "#fdeea7",
            "#9bcc93",
            "#1a9481",
            "#003d5c"
        ]
    },
    {
        "schemeName": "Appalachian Spring",
        "colors": [
            "#c24704",
            "#d9cc3c",
            "#ffeb79",
            "#a0e0a9",
            "#00ada7"
        ]
    },
    {
        "schemeName": "Sunshine over glacier",
        "colors": [
            "#004056",
            "#2c858d",
            "#74ceb7",
            "#c9ffd5",
            "#ffffcb"
        ]
    },
    {
        "schemeName": "Dreams Forever",
        "colors": [
            "#211426",
            "#413659",
            "#656f8c",
            "#9bbfab",
            "#f2efdf"
        ]
    },
    {
        "schemeName": "Herbs and Spice",
        "colors": [
            "#5a1f00",
            "#d1570d",
            "#fde792",
            "#477725",
            "#a9cc66"
        ]
    },
    {
        "schemeName": "harbor",
        "colors": [
            "#d5fbff",
            "#9fbcbf",
            "#647678",
            "#2f3738",
            "#59d8e6"
        ]
    },
    {
        "schemeName": "Subtlety of Hue The Spa",
        "colors": [
            "#484a47",
            "#c1ce96",
            "#ecebf0",
            "#687d77",
            "#353129"
        ]
    },
    {
        "schemeName": "My Portfolio",
        "colors": [
            "#f2f2f2",
            "#c6e070",
            "#91c46c",
            "#287d7d",
            "#1c344d"
        ]
    },
    {
        "schemeName": "Purple Rain",
        "colors": [
            "#25064d",
            "#36175e",
            "#553285",
            "#7b52ab",
            "#9768d1"
        ]
    },
    {
        "schemeName": "Blue Sky Moisty",
        "colors": [
            "#1a1f2b",
            "#30395c",
            "#4a6491",
            "#85a5cc",
            "#d0e4f2"
        ]
    },
    {
        "schemeName": "Happy Mom",
        "colors": [
            "#3fb8af",
            "#7fc7af",
            "#dad8a7",
            "#ff9e9d",
            "#ff3d7f"
        ]
    },
    {
        "schemeName": "Black Cherry Mocha",
        "colors": [
            "#705b35",
            "#c7b07b",
            "#e8d9ac",
            "#fff6d9",
            "#570026"
        ]
    },
    {
        "schemeName": "Hipster Haven",
        "colors": [
            "#42282f",
            "#74a588",
            "#d6ccad",
            "#dc9c76",
            "#d6655a"
        ]
    },
    {
        "schemeName": "QB Studio",
        "colors": [
            "#ffbc67",
            "#da727e",
            "#ac6c82",
            "#685c79",
            "#455c7b"
        ]
    },
    {
        "schemeName": "pink peppermint",
        "colors": [
            "#f6b1c3",
            "#f0788c",
            "#de264c",
            "#bc0d35",
            "#a20d1e"
        ]
    },
    {
        "schemeName": "Midori and Madoka",
        "colors": [
            "#0f2d40",
            "#194759",
            "#296b73",
            "#3e8c84",
            "#d8f2f0"
        ]
    },
    {
        "schemeName": "Fossil Vintage",
        "colors": [
            "#cfca4c",
            "#fcf5bf",
            "#9fe5c2",
            "#5eb299",
            "#745a33"
        ]
    },
    {
        "schemeName": "Metropolitan",
        "colors": [
            "#cc3910",
            "#f1f2c0",
            "#ccc59e",
            "#8fa68e",
            "#332f29"
        ]
    },
    {
        "schemeName": "organic pull 2",
        "colors": [
            "#776045",
            "#a8c545",
            "#dfd3b6",
            "#ffffff",
            "#0092b2"
        ]
    },
    {
        "schemeName": "Green  Dark Blue",
        "colors": [
            "#ffffff",
            "#aeaeae",
            "#e64c66",
            "#2d3e50",
            "#1bbc9b"
        ]
    },
    {
        "schemeName": "Winter Road",
        "colors": [
            "#1b1d26",
            "#425955",
            "#778c7a",
            "#f1f2d8",
            "#bfbd9f"
        ]
    },
    {
        "schemeName": "anggo djago",
        "colors": [
            "#002a4a",
            "#17607d",
            "#fff1ce",
            "#ff9311",
            "#d64700"
        ]
    },
    {
        "schemeName": "Bordeaux",
        "colors": [
            "#f7f2b2",
            "#adcf4f",
            "#84815b",
            "#4a1a2c",
            "#8e3557"
        ]
    },
    {
        "schemeName": "Bahamas",
        "colors": [
            "#003056",
            "#04518c",
            "#00a1d9",
            "#47d9bf",
            "#f2d03b"
        ]
    },
    {
        "schemeName": "Citrus",
        "colors": [
            "#ff6600",
            "#c13b00",
            "#5e6d70",
            "#424e4f",
            "#1b1d1e"
        ]
    },
    {
        "schemeName": "Cinnamon Mint",
        "colors": [
            "#14a697",
            "#f2c12e",
            "#f29d35",
            "#f27649",
            "#f25252"
        ]
    },
    {
        "schemeName": "olde tyme",
        "colors": [
            "#597533",
            "#332f28",
            "#61b594",
            "#e6dea5",
            "#c44e18"
        ]
    },
    {
        "schemeName": "DSPIP Blue",
        "colors": [
            "#3399cc",
            "#67b8de",
            "#91c9e8",
            "#b4dced",
            "#e8f8ff"
        ]
    },
    {
        "schemeName": "Colors of Rio",
        "colors": [
            "#e83a25",
            "#ffe9a3",
            "#98cc96",
            "#004563",
            "#191b28"
        ]
    },
    {
        "schemeName": "Painted peacock",
        "colors": [
            "#e6dd00",
            "#8cb302",
            "#008c74",
            "#004c66",
            "#332b40"
        ]
    },
    {
        "schemeName": "only human",
        "colors": [
            "#e0ffb3",
            "#61c791",
            "#31797d",
            "#2a2f36",
            "#f23c55"
        ]
    },
    {
        "schemeName": "Copy of vintage card",
        "colors": [
            "#5c4b51",
            "#8cbeb2",
            "#f2ebbf",
            "#f3b562",
            "#f06060"
        ]
    },
    {
        "schemeName": "The kiss",
        "colors": [
            "#56626b",
            "#6c9380",
            "#c0ca55",
            "#f07c6c",
            "#ad5472"
        ]
    },
    {
        "schemeName": "Jejune",
        "colors": [
            "#289976",
            "#67cc8e",
            "#b1ff91",
            "#ffe877",
            "#ff5600"
        ]
    },
    {
        "schemeName": "DermInc 02",
        "colors": [
            "#1a212c",
            "#1d7872",
            "#71b095",
            "#dedba7",
            "#d13f32"
        ]
    },
    {
        "schemeName": "Here We Are",
        "colors": [
            "#3f0b1b",
            "#7a1631",
            "#cf423c",
            "#fc7d49",
            "#ffd462"
        ]
    },
    {
        "schemeName": "Bonsai Sprouts",
        "colors": [
            "#302b1d",
            "#3f522b",
            "#737d26",
            "#a99e46",
            "#d9cb84"
        ]
    },
    {
        "schemeName": "H A I T I  R E L I E F",
        "colors": [
            "#32450c",
            "#717400",
            "#dc8505",
            "#ec5519",
            "#be2805"
        ]
    },
    {
        "schemeName": "Dogwoods on a Dreary Day",
        "colors": [
            "#fcfad0",
            "#a1a194",
            "#5b605f",
            "#464646",
            "#a90641"
        ]
    },
    {
        "schemeName": "heirloom one",
        "colors": [
            "#c7b773",
            "#e3db9a",
            "#f5fcd0",
            "#b1c2b3",
            "#778691"
        ]
    },
    {
        "schemeName": "Corporate Blew",
        "colors": [
            "#00305a",
            "#004b8d",
            "#0074d9",
            "#4192d9",
            "#7abaf2"
        ]
    },
    {
        "schemeName": "Draw With Me",
        "colors": [
            "#3cbac8",
            "#93edd4",
            "#f3f5c4",
            "#f9cb8f",
            "#f19181"
        ]
    },
    {
        "schemeName": "Saltillo",
        "colors": [
            "#7d2a35",
            "#cc9258",
            "#917a56",
            "#b4ba6c",
            "#feffc2"
        ]
    },
    {
        "schemeName": "Cherry Bomb",
        "colors": [
            "#262526",
            "#404040",
            "#8c8979",
            "#f2f2f2",
            "#f60a20"
        ]
    },
    {
        "schemeName": "Black Math",
        "colors": [
            "#eb5937",
            "#1c1919",
            "#403d3c",
            "#456f74",
            "#d3cbbd"
        ]
    },
    {
        "schemeName": "MOON",
        "colors": [
            "#092140",
            "#024959",
            "#f2c777",
            "#f24738",
            "#bf2a2a"
        ]
    },
    {
        "schemeName": "Sunset Camping",
        "colors": [
            "#2d112c",
            "#530031",
            "#820233",
            "#ca293e",
            "#ef4339"
        ]
    },
    {
        "schemeName": "Das Boot",
        "colors": [
            "#2f3540",
            "#666a73",
            "#f2ede4",
            "#d9d1c7",
            "#8c8681"
        ]
    },
    {
        "schemeName": "Call me chatime",
        "colors": [
            "#f2385a",
            "#f5a503",
            "#e9f1df",
            "#56d9cd",
            "#3aa1bf"
        ]
    },
    {
        "schemeName": "Copy of granada  azafran",
        "colors": [
            "#57385c",
            "#a75265",
            "#ec7263",
            "#febe7e",
            "#ffedbc"
        ]
    },
    {
        "schemeName": "Sushi Maki",
        "colors": [
            "#261f27",
            "#fee169",
            "#cdd452",
            "#f9722e",
            "#c9313d"
        ]
    },
    {
        "schemeName": "Freshaliciousness",
        "colors": [
            "#0c273d",
            "#54d0ed",
            "#fffef1",
            "#70b85d",
            "#2c5e2e"
        ]
    },
    {
        "schemeName": "Early Winter Morning",
        "colors": [
            "#2f3837",
            "#c5c7b6",
            "#fff8d3",
            "#4c493e",
            "#222028"
        ]
    },
    {
        "schemeName": "Beach Umbrella",
        "colors": [
            "#ff2151",
            "#ff7729",
            "#ffad29",
            "#ffebca",
            "#1ab58a"
        ]
    },
    {
        "schemeName": "Moon Landing",
        "colors": [
            "#98a89e",
            "#bac0ac",
            "#fafac6",
            "#ff4411",
            "#d40015"
        ]
    },
    {
        "schemeName": "London Underground",
        "colors": [
            "#e3cbac",
            "#9c9985",
            "#c46d3b",
            "#788880",
            "#324654"
        ]
    },
    {
        "schemeName": "retro air",
        "colors": [
            "#404040",
            "#024959",
            "#037e8c",
            "#f2efdc",
            "#f24c27"
        ]
    },
    {
        "schemeName": "Modern Office",
        "colors": [
            "#14212b",
            "#293845",
            "#4f6373",
            "#8f8164",
            "#d9d7ac"
        ]
    },
    {
        "schemeName": "beachside shopping",
        "colors": [
            "#feffff",
            "#3c3f36",
            "#9fb03e",
            "#ebe9dc",
            "#72918b"
        ]
    },
    {
        "schemeName": "Paris",
        "colors": [
            "#ffffff",
            "#e5e1d1",
            "#52616d",
            "#2c343b",
            "#c44741"
        ]
    },
    {
        "schemeName": "SOFT",
        "colors": [
            "#0092c7",
            "#9fe0f6",
            "#f3e59a",
            "#f3b59b",
            "#f29c9c"
        ]
    },
    {
        "schemeName": "Orange Crush",
        "colors": [
            "#ef5411",
            "#fa5b0f",
            "#ff6517",
            "#ff6d1f",
            "#ff822e"
        ]
    },
    {
        "schemeName": "Miami Sunset",
        "colors": [
            "#ffaa5c",
            "#da727e",
            "#ac6c82",
            "#685c79",
            "#455c7b"
        ]
    },
    {
        "schemeName": "Avant",
        "colors": [
            "#0e3d59",
            "#88a61b",
            "#f29f05",
            "#f25c05",
            "#d92525"
        ]
    },
    {
        "schemeName": "Oahu",
        "colors": [
            "#292929",
            "#2bbfbd",
            "#f2b33d",
            "#f29b30",
            "#f22e2e"
        ]
    },
    {
        "schemeName": "vintage blue",
        "colors": [
            "#cddec6",
            "#4daaab",
            "#1e4f6a",
            "#2a423c",
            "#93a189"
        ]
    },
    {
        "schemeName": "Limekiln",
        "colors": [
            "#006d8d",
            "#008a6e",
            "#549e39",
            "#8ab833",
            "#c0cf3a"
        ]
    },
    {
        "schemeName": "Clean and simple",
        "colors": [
            "#d74b4b",
            "#dcddd8",
            "#475f77",
            "#354b5e",
            "#ffffff"
        ]
    },
    {
        "schemeName": "Sonic Threshold",
        "colors": [
            "#c4d4cb",
            "#55665e",
            "#30282a",
            "#542733",
            "#e84167"
        ]
    },
    {
        "schemeName": "Milan Week",
        "colors": [
            "#41434a",
            "#6e9489",
            "#dedcc3",
            "#f2f1e9",
            "#877963"
        ]
    },
    {
        "schemeName": "Johnny Cash Tribute",
        "colors": [
            "#73603d",
            "#bf8a49",
            "#f2ca80",
            "#5e5a59",
            "#0d0d0d"
        ]
    },
    {
        "schemeName": "Cirque",
        "colors": [
            "#96526b",
            "#d17869",
            "#ebad60",
            "#f5cf66",
            "#8bab8d"
        ]
    },
    {
        "schemeName": "beach glass",
        "colors": [
            "#fff6c9",
            "#c8e8c7",
            "#a4deab",
            "#85cc9f",
            "#499e8d"
        ]
    },
    {
        "schemeName": "OIL FLAME",
        "colors": [
            "#282e33",
            "#25373a",
            "#164852",
            "#495e67",
            "#ff3838"
        ]
    },
    {
        "schemeName": "Dribble",
        "colors": [
            "#3d4c53",
            "#70b7ba",
            "#f1433f",
            "#e7e1d4",
            "#ffffff"
        ]
    },
    {
        "schemeName": "Cinderella from Nam",
        "colors": [
            "#425957",
            "#81ac8b",
            "#f2e5a2",
            "#f89883",
            "#d96666"
        ]
    },
    {
        "schemeName": "Corporate Orange",
        "colors": [
            "#313732",
            "#8aa8b0",
            "#dedede",
            "#ffffff",
            "#f26101"
        ]
    },
    {
        "schemeName": "modern retro",
        "colors": [
            "#979926",
            "#38ccb5",
            "#eeff8e",
            "#ffd767",
            "#cc2a09"
        ]
    },
    {
        "schemeName": "Red Embrace",
        "colors": [
            "#f2f2f2",
            "#bf0404",
            "#8c0303",
            "#590202",
            "#400101"
        ]
    },
    {
        "schemeName": "Business Casual",
        "colors": [
            "#133463",
            "#365fb7",
            "#799ae0",
            "#f4efdc",
            "#ba9b65"
        ]
    },
    {
        "schemeName": "Firefly in the night",
        "colors": [
            "#0d1c33",
            "#17373c",
            "#2b6832",
            "#4f9300",
            "#a1d700"
        ]
    },
    {
        "schemeName": "Alternative bananas",
        "colors": [
            "#112f41",
            "#068587",
            "#4fb99f",
            "#f2b134",
            "#ed553b"
        ]
    },
    {
        "schemeName": "summer twilight",
        "colors": [
            "#3b596a",
            "#427676",
            "#3f9a82",
            "#a1cd73",
            "#ecdb60"
        ]
    },
    {
        "schemeName": "Blackcurrent Birds",
        "colors": [
            "#94b34d",
            "#d3ff82",
            "#363d52",
            "#121d2b",
            "#111b1c"
        ]
    },
    {
        "schemeName": "Laboratory",
        "colors": [
            "#fffefc",
            "#e2e3df",
            "#515b5e",
            "#2e3233",
            "#caf200"
        ]
    },
    {
        "schemeName": "Window Light Lavender",
        "colors": [
            "#49404f",
            "#596166",
            "#d1ffcd",
            "#a9bd8b",
            "#948a54"
        ]
    },
    {
        "schemeName": "Blues",
        "colors": [
            "#0b3c4d",
            "#0e5066",
            "#136480",
            "#127899",
            "#1a8bb3"
        ]
    },
    {
        "schemeName": "thanks a latte",
        "colors": [
            "#fff6b8",
            "#abcca7",
            "#403529",
            "#7a5e2f",
            "#a68236"
        ]
    },
    {
        "schemeName": "Buoy",
        "colors": [
            "#1b2b32",
            "#37646f",
            "#a3abaf",
            "#e1e7e8",
            "#b22e2f"
        ]
    },
    {
        "schemeName": "Teal  Orange",
        "colors": [
            "#002e40",
            "#2a5769",
            "#ffffff",
            "#fabd4a",
            "#fa9600"
        ]
    },
    {
        "schemeName": "Veerle bio",
        "colors": [
            "#4f1025",
            "#c5003e",
            "#d9ff5b",
            "#78aa00",
            "#15362d"
        ]
    },
    {
        "schemeName": "Franky Demon",
        "colors": [
            "#22475e",
            "#75b08a",
            "#f0e797",
            "#ff9d84",
            "#ff5460"
        ]
    },
    {
        "schemeName": "vintage green",
        "colors": [
            "#bddfb3",
            "#2baa9c",
            "#2f2e2e",
            "#0f2625",
            "#465f3f"
        ]
    },
    {
        "schemeName": "Spring Happiness",
        "colors": [
            "#af7575",
            "#efd8a1",
            "#bcd693",
            "#afd7db",
            "#3d9ca8"
        ]
    },
    {
        "schemeName": "conky",
        "colors": [
            "#212b40",
            "#c2e078",
            "#ffffff",
            "#badcdd",
            "#547b97"
        ]
    },
    {
        "schemeName": "The Architect",
        "colors": [
            "#c1e1ed",
            "#76c7c6",
            "#273d3b",
            "#131a19",
            "#e35c14"
        ]
    },
    {
        "schemeName": "mind warp",
        "colors": [
            "#012530",
            "#28544b",
            "#acbd86",
            "#ffd6a0",
            "#ff302c"
        ]
    },
    {
        "schemeName": "Faber Castell Campaign",
        "colors": [
            "#325a66",
            "#fff8b2",
            "#dea140",
            "#a32b26",
            "#590d0b"
        ]
    },
    {
        "schemeName": "various vintage ver 01",
        "colors": [
            "#c5d9b2",
            "#53a194",
            "#572c2c",
            "#3d2324",
            "#695a3b"
        ]
    },
    {
        "schemeName": "Five Oranges",
        "colors": [
            "#b33600",
            "#ff8a00",
            "#ffc887",
            "#cc5400",
            "#b31e00"
        ]
    },
    {
        "schemeName": "french",
        "colors": [
            "#76a19a",
            "#272123",
            "#a68d60",
            "#b0c5bb",
            "#d9593d"
        ]
    },
    {
        "schemeName": "Bagway Gradient",
        "colors": [
            "#5c2849",
            "#a73e5c",
            "#ec4863",
            "#ff733f",
            "#ffd285"
        ]
    },
    {
        "schemeName": "Martinis At Lunchtime",
        "colors": [
            "#222130",
            "#464d57",
            "#d4e8d3",
            "#fffcfb",
            "#ed8917"
        ]
    },
    {
        "schemeName": "Summer Daydream",
        "colors": [
            "#5c2849",
            "#a73e5c",
            "#ec4863",
            "#ffda66",
            "#1fcecb"
        ]
    },
    {
        "schemeName": "Retro",
        "colors": [
            "#024959",
            "#037e8c",
            "#fffffa",
            "#f24c27",
            "#5f5448"
        ]
    },
    {
        "schemeName": "Stream IN",
        "colors": [
            "#2c3e50",
            "#fc4349",
            "#6dbcdb",
            "#d7dadb",
            "#ffffff"
        ]
    },
    {
        "schemeName": "brilliant vintage",
        "colors": [
            "#302b2f",
            "#696153",
            "#ffa600",
            "#9bb58f",
            "#ffd596"
        ]
    },
    {
        "schemeName": "MWAD",
        "colors": [
            "#70e8cb",
            "#ffe9c7",
            "#ff5b5b",
            "#545454",
            "#2d2d2f"
        ]
    },
    {
        "schemeName": "Copy of Flat Design Colors v2",
        "colors": [
            "#334d5c",
            "#45b29d",
            "#efc94c",
            "#e27a3f",
            "#df4949"
        ]
    },
    {
        "schemeName": "Retro package",
        "colors": [
            "#f2e6ce",
            "#8ab39f",
            "#606362",
            "#593325",
            "#1d1d1f"
        ]
    },
    {
        "schemeName": "agave",
        "colors": [
            "#2e95a3",
            "#50b8b4",
            "#c6fffa",
            "#e2ffa8",
            "#d6e055"
        ]
    },
    {
        "schemeName": "Sparkling Sife",
        "colors": [
            "#17111a",
            "#321433",
            "#660c47",
            "#b33467",
            "#ccbb51"
        ]
    },
    {
        "schemeName": "The Bizzniss",
        "colors": [
            "#202b30",
            "#4e7178",
            "#4fa9b8",
            "#74c0cf",
            "#f1f7e2"
        ]
    },
    {
        "schemeName": "Blue for Marine Brochure",
        "colors": [
            "#0eeaff",
            "#15a9fa",
            "#1b76ff",
            "#1c3ffd",
            "#2c1dff"
        ]
    },
    {
        "schemeName": "refreshing melon",
        "colors": [
            "#f7e4a2",
            "#a7bd5b",
            "#dc574e",
            "#8dc7b8",
            "#ed9355"
        ]
    },
    {
        "schemeName": "Cloud in the Sky",
        "colors": [
            "#023b47",
            "#295e52",
            "#f2e085",
            "#fcab55",
            "#ee7f38"
        ]
    },
    {
        "schemeName": "Retro Vintage",
        "colors": [
            "#524656",
            "#cf4747",
            "#ea7a58",
            "#e4dccb",
            "#a6c4bc"
        ]
    },
    {
        "schemeName": "Ground Control to Major Tom",
        "colors": [
            "#2b2e2e",
            "#595855",
            "#a2aba5",
            "#cae6e8",
            "#313f54"
        ]
    },
    {
        "schemeName": "Bold  Justified The Huge World of Typography  infographic",
        "colors": [
            "#458c6b",
            "#f2d8a7",
            "#d9a86c",
            "#d94436",
            "#a62424"
        ]
    },
    {
        "schemeName": "mute mint",
        "colors": [
            "#1b1e26",
            "#f2efbd",
            "#b6d051",
            "#70a99a",
            "#2f6d7a"
        ]
    },
    {
        "schemeName": "Crying in the Rain",
        "colors": [
            "#302c29",
            "#d1d1bc",
            "#a7c4bb",
            "#6c8c84",
            "#466964"
        ]
    },
    {
        "schemeName": "Rise",
        "colors": [
            "#2b3a42",
            "#3f5765",
            "#bdd4de",
            "#efefef",
            "#e74c3c"
        ]
    },
    {
        "schemeName": "creamy grey",
        "colors": [
            "#fffbdc",
            "#bfbca5",
            "#7f7d6e",
            "#3f3e37",
            "#e5e2c6"
        ]
    },
    {
        "schemeName": "Avoid the Norm",
        "colors": [
            "#ffa340",
            "#38001c",
            "#571133",
            "#017a74",
            "#00c2ba"
        ]
    },
    {
        "schemeName": "Banana Flambe",
        "colors": [
            "#f0c755",
            "#e2ad3b",
            "#bf5c00",
            "#901811",
            "#5c110f"
        ]
    },
    {
        "schemeName": "The Lady is a Spy",
        "colors": [
            "#3b3b3b",
            "#a8877e",
            "#ffa49d",
            "#ff7474",
            "#ff476c"
        ]
    },
    {
        "schemeName": "Siberian Winter",
        "colors": [
            "#35262d",
            "#fffbff",
            "#e8eced",
            "#a4b7bb",
            "#76a0b0"
        ]
    },
    {
        "schemeName": "Skin Tone Colours",
        "colors": [
            "#ffe2c5",
            "#ffeedd",
            "#ffddaa",
            "#ffc484",
            "#ffdd99"
        ]
    },
    {
        "schemeName": "Adrift in Dreams via colourlovers",
        "colors": [
            "#cff09e",
            "#a8dba8",
            "#79bd9a",
            "#3b8686",
            "#0b486b"
        ]
    },
    {
        "schemeName": "Seattle Sunset",
        "colors": [
            "#324152",
            "#47535e",
            "#796466",
            "#c1836a",
            "#dea677"
        ]
    },
    {
        "schemeName": "Adobe Ideas Theme",
        "colors": [
            "#404040",
            "#024959",
            "#037e8c",
            "#f2efdc",
            "#f24c27"
        ]
    },
    {
        "schemeName": "gradient green",
        "colors": [
            "#e1e6b9",
            "#c4d7a4",
            "#abc8a4",
            "#375d3b",
            "#183128"
        ]
    },
    {
        "schemeName": "Graceful",
        "colors": [
            "#3e3947",
            "#735360",
            "#d68684",
            "#f1b0b0",
            "#ebd0c4"
        ]
    },
    {
        "schemeName": "stay summer",
        "colors": [
            "#468071",
            "#ffe87a",
            "#ffca53",
            "#ff893b",
            "#e62738"
        ]
    },
    {
        "schemeName": "identification",
        "colors": [
            "#0a3a4a",
            "#196674",
            "#33a6b2",
            "#9ac836",
            "#d0e64b"
        ]
    },
    {
        "schemeName": "Flat rainbow",
        "colors": [
            "#f15a5a",
            "#f0c419",
            "#4eba6f",
            "#2d95bf",
            "#955ba5"
        ]
    },
    {
        "schemeName": "olive tree",
        "colors": [
            "#003647",
            "#00717d",
            "#f2d8a7",
            "#a4a66a",
            "#515932"
        ]
    },
    {
        "schemeName": "Black Swan",
        "colors": [
            "#010712",
            "#13171f",
            "#1c1f26",
            "#24262d",
            "#961227"
        ]
    },
    {
        "schemeName": "Desert",
        "colors": [
            "#c74029",
            "#fae8cd",
            "#128085",
            "#385052",
            "#f0ad44"
        ]
    },
    {
        "schemeName": "cool-one",
        "colors": [
            "#3c989e",
            "#5db5a4",
            "#f4cda5",
            "#f57a82",
            "#ed5276"
        ]
    },
    {
        "schemeName": "CoolGrays",
        "colors": [
            "#686e75",
            "#9baac1",
            "#82787b",
            "#e4f1db",
            "#aac19b"
        ]
    },
    {
        "schemeName": "Park Avenue Shift",
        "colors": [
            "#61e8d2",
            "#fceeb9",
            "#302f25",
            "#704623",
            "#bbe687"
        ]
    },
    {
        "schemeName": "landscape architect",
        "colors": [
            "#f0e6b1",
            "#b5d6aa",
            "#99a37a",
            "#70584b",
            "#3d3536"
        ]
    },
    {
        "schemeName": "TOOL",
        "colors": [
            "#010000",
            "#393845",
            "#9b96a3",
            "#5c0009",
            "#940315"
        ]
    },
    {
        "schemeName": "Magellan Orange",
        "colors": [
            "#d23600",
            "#d95100",
            "#de6d00",
            "#ee8900",
            "#fca600"
        ]
    },
    {
        "schemeName": "Tenacity",
        "colors": [
            "#f78f00",
            "#c43911",
            "#75003c",
            "#37154a",
            "#0f2459"
        ]
    },
    {
        "schemeName": "Pearberry",
        "colors": [
            "#ffffe4",
            "#f2e5bd",
            "#b9bf8e",
            "#a69f7c",
            "#8c6865"
        ]
    },
    {
        "schemeName": "elevation",
        "colors": [
            "#fafac0",
            "#c4be90",
            "#8c644c",
            "#594d37",
            "#293033"
        ]
    },
    {
        "schemeName": "Ocean",
        "colors": [
            "#003840",
            "#005a5b",
            "#007369",
            "#008c72",
            "#02a676"
        ]
    },
    {
        "schemeName": "Fresh Money",
        "colors": [
            "#2f400d",
            "#8cbf26",
            "#a8ca65",
            "#e8e5b0",
            "#419184"
        ]
    },
    {
        "schemeName": "Wildflower",
        "colors": [
            "#036f73",
            "#84cdc2",
            "#fef2d8",
            "#f18c79",
            "#ef504f"
        ]
    },
    {
        "schemeName": "Sprinkler days",
        "colors": [
            "#003b59",
            "#00996d",
            "#a5d900",
            "#f2e926",
            "#ff930e"
        ]
    },
    {
        "schemeName": "tasty",
        "colors": [
            "#f34a53",
            "#fae3b4",
            "#aac789",
            "#437356",
            "#1e4147"
        ]
    },
    {
        "schemeName": "Paparazzi",
        "colors": [
            "#4f3130",
            "#ff1f3d",
            "#5be3e3",
            "#fdfff1",
            "#8b9698"
        ]
    },
    {
        "schemeName": "Feeling Etsy",
        "colors": [
            "#dcebdd",
            "#a0d5d6",
            "#789aa1",
            "#304345",
            "#ad9a27"
        ]
    },
    {
        "schemeName": "Infographics 1",
        "colors": [
            "#0a7b83",
            "#2aa876",
            "#ffd265",
            "#f19c65",
            "#ce4d45"
        ]
    },
    {
        "schemeName": "Visual Narrative A",
        "colors": [
            "#f5ecd9",
            "#2bacb5",
            "#b4ccb9",
            "#e84d5b",
            "#3b3b3b"
        ]
    },
    {
        "schemeName": "Autumn berries",
        "colors": [
            "#588c7e",
            "#f2e394",
            "#f2ae72",
            "#d96459",
            "#8c4646"
        ]
    },
    {
        "schemeName": "main cxcedar",
        "colors": [
            "#23a38f",
            "#b7c11e",
            "#eff1c2",
            "#f0563d",
            "#2e313d"
        ]
    },
    {
        "schemeName": "Candy Coated",
        "colors": [
            "#f41c54",
            "#ff9f00",
            "#fbd506",
            "#a8bf12",
            "#00aab5"
        ]
    },
    {
        "schemeName": "Vanilla Coffee",
        "colors": [
            "#a8baa9",
            "#fff5cf",
            "#dbcdad",
            "#b39c7d",
            "#806854"
        ]
    },
    {
        "schemeName": "Waterlime",
        "colors": [
            "#5c8a2d",
            "#afd687",
            "#ffffff",
            "#00c3a9",
            "#008798"
        ]
    },
    {
        "schemeName": "Satellite of Love",
        "colors": [
            "#fdff98",
            "#a7db9e",
            "#211426",
            "#6b073b",
            "#da8c25"
        ]
    },
    {
        "schemeName": "Furious",
        "colors": [
            "#e0401c",
            "#e6b051",
            "#272f30",
            "#f7edb7",
            "#9e2b20"
        ]
    },
    {
        "schemeName": "mountains",
        "colors": [
            "#012340",
            "#026873",
            "#83a603",
            "#bbbf45",
            "#f2f0ce"
        ]
    },
    {
        "schemeName": "Copy of Stormy Orange",
        "colors": [
            "#fffffa",
            "#a1a194",
            "#5b605f",
            "#464646",
            "#ff6600"
        ]
    },
    {
        "schemeName": "21 Flat Business Icons",
        "colors": [
            "#343844",
            "#2ab69d",
            "#e65848",
            "#fdc536",
            "#fcf2d7"
        ]
    },
    {
        "schemeName": "Chuck Howard Poster",
        "colors": [
            "#a3d9b0",
            "#93bf9e",
            "#f2f0d5",
            "#8c8474",
            "#40362e"
        ]
    },
    {
        "schemeName": "Oregon Coast",
        "colors": [
            "#21455b",
            "#567d8c",
            "#a59e8c",
            "#8c8372",
            "#f2f2f2"
        ]
    },
    {
        "schemeName": "Chlorophyll",
        "colors": [
            "#a5eb3c",
            "#60c21e",
            "#159e31",
            "#53db50",
            "#c5ffcb"
        ]
    },
    {
        "schemeName": "Red Hot Revisited",
        "colors": [
            "#420000",
            "#600000",
            "#790000",
            "#931111",
            "#bf1616"
        ]
    },
    {
        "schemeName": "Orange and Blue Corporate",
        "colors": [
            "#003354",
            "#91bed4",
            "#d9e8f5",
            "#ffffff",
            "#f26101"
        ]
    },
    {
        "schemeName": "Blue Jeans and",
        "colors": [
            "#2a7a8c",
            "#176273",
            "#063540",
            "#e6d9cf",
            "#403d3a"
        ]
    },
    {
        "schemeName": "MGswatch 2",
        "colors": [
            "#00a19a",
            "#04bf9d",
            "#f2e85c",
            "#f53d54",
            "#404040"
        ]
    },
    {
        "schemeName": "october full moon",
        "colors": [
            "#002f36",
            "#142426",
            "#d1b748",
            "#eddb43",
            "#fffd84"
        ]
    },
    {
        "schemeName": "Cool Blues orange accent",
        "colors": [
            "#0a111f",
            "#263248",
            "#7e8aa2",
            "#e3e3e3",
            "#c73226"
        ]
    },
    {
        "schemeName": "Old Camera",
        "colors": [
            "#174040",
            "#888c65",
            "#d9ca9c",
            "#d98162",
            "#a65858"
        ]
    },
    {
        "schemeName": "The 50s",
        "colors": [
            "#3da8a4",
            "#7accbe",
            "#fffff7",
            "#ff99a1",
            "#ff5879"
        ]
    },
    {
        "schemeName": "Eduardo",
        "colors": [
            "#59535e",
            "#faeeff",
            "#f1baf3",
            "#5d4970",
            "#372049"
        ]
    },
    {
        "schemeName": "Japanese Modern",
        "colors": [
            "#000000",
            "#910000",
            "#cbb370",
            "#fffbf1",
            "#21786c"
        ]
    },
    {
        "schemeName": "Blue Sky Day",
        "colors": [
            "#56797f",
            "#87a0a4",
            "#fcfbdc",
            "#f2ddb6",
            "#a6937c"
        ]
    },
    {
        "schemeName": "SOFT",
        "colors": [
            "#7ba3a8",
            "#f4f3de",
            "#bead92",
            "#f35a4a",
            "#5b4947"
        ]
    },
    {
        "schemeName": "yellow",
        "colors": [
            "#ffbe00",
            "#ffdc00",
            "#ffd10f",
            "#ffde20",
            "#e8ca00"
        ]
    },
    {
        "schemeName": "Limestone Quarry",
        "colors": [
            "#60655f",
            "#ab9675",
            "#ffe0c9",
            "#d4ccba",
            "#cf8442"
        ]
    },
    {
        "schemeName": "zen master II",
        "colors": [
            "#5d7370",
            "#7fa6a1",
            "#b8d9b8",
            "#d6edbd",
            "#fff5bc"
        ]
    },
    {
        "schemeName": "Tibet inspiration",
        "colors": [
            "#11151e",
            "#212426",
            "#727564",
            "#b9aa81",
            "#690c07"
        ]
    },
    {
        "schemeName": "Rio",
        "colors": [
            "#e34517",
            "#f5ff53",
            "#b4e85e",
            "#00bd72",
            "#0b4239"
        ]
    },
    {
        "schemeName": "Blues",
        "colors": [
            "#e1e6fa",
            "#c4d7ed",
            "#abc8e2",
            "#375d81",
            "#183152"
        ]
    },
    {
        "schemeName": "Beautiful landscapes",
        "colors": [
            "#3b3140",
            "#bfb8a3",
            "#f2e0c9",
            "#f2b9ac",
            "#d97e7e"
        ]
    }
]
*/
