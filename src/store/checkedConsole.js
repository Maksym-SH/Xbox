export default {
  state: {
    objectConsole: {},
    massConsole: [
      {
        path: require("./../assets/image/360.png"),
        description:
          "The Xbox 360 is Microsoft's second game console to follow the Xbox. The Xbox 360 competes with the Sony PlayStation 3 and Nintendo Wii for its seventh generation gaming system. Some of the main features of the Xbox 360 are represented by the Xbox Live service, which allows you to play over the Internet, as well as download a variety of content - video games, demos, trailers, music, TV shows, and more.",
        links: "/console/360",
        massDesc: [
          {
            heading: "ABSOLUTE CONTROL",
            performance:
              "The textured surface of the triggers and bumpers allows for a secure grip and prevents the controller from slipping out.",
          },
          {
            heading: "YOUR WIN!",
            performance: "Show off your victories on our official website",
          },
          {
            heading: "FULL CIRCLE",
            performance:
              "Renewal in all directions. The hybrid crosspiece design allows you to confidently navigate the toughest combinations without relying on luck alone.",
          },
        ],
      },
      {
        path: require("./../assets/image/one.png"),
        description:
          "Xbox One is Microsoft's third game console and successor to the Xbox 360. Xbox One's eighth generation gaming platforms are Sony Computer Entertainment's PlayStation 4, Nintendo's Wii U and Nintendo Switch.",
        links: "/console/one",
      },
      {
        path: require("./../assets/image/ones.png"),
        description:
          "According to Microsoft, the case of the console has become smaller by 40% than in the previous version. Xbox One S received support for 4K and HDR resolution. Also, another difference is the built-in power supply.",
        links: "/console/ones",
      },
      {
        path: require("./../assets/image/onex.png"),
        description:
          "Xbox Series X is compatible with some of the older Xbox titles, but not all of them. The console will support both disks and virtual copies of games",
        links: "/console/onex",
        massDesc: [
          {
            heading: "ABSOLUTE CONTROL",
            performance:
              "The textured surface of the triggers and bumpers allows for a secure grip and prevents the controller from slipping out.",
          },
          {
            heading: "YOUR WIN!",
            performance: "Show off your victories on our official website",
          },
          {
            heading: "FULL CIRCLE",
            performance:
              "Renewal in all directions. The hybrid crosspiece design allows you to confidently navigate the toughest combinations without relying on luck alone.",
          },
        ],
      },
    ],
  },
  getters: {
    massConsole(state) {
      return state.massConsole;
    },
    objectConsole(state) {
      return state.objectConsole;
    },
  },
  mutations: {
    CHECK_CONSOLE(state, payload) {
      for (let i = 0; i < state.massConsole.length; i++) {
        if (state.massConsole[i].links === payload) {
          state.objectConsole = state.massConsole[i];
        }
      }
    },
  },
  actions: {
    callCheckConsole({ commit }, payload) {
      commit("CHECK_CONSOLE", payload);
    },
  },
};
