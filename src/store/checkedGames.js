export default {
  state: {
    objectGames: {},
    objectImage: {},
    massGames: [
      {
        path: require("./../assets/image/cod-page.jpg"),
        name: "Call of Duty: WWII",
        released: " 23/11/2017",
        order:
          "https://www.xbox.com/ru-RU/games/store/call-of-duty-wwii-nabor-divizij/C4THQD1K12KQ/0001",
        description: "The C.O.D.E. Bravery Packis now available in WWII",
        links: "/game/cod",
        trailerEmbed: "https://www.youtube.com/embed/D4Q_XYVescc",
        firstTitle: "The best modern equipment",
        secondTitle: "Realistic shooting",
      },
      {
        path: require("./../assets/image/destiny-page.jpg"),
        name: "Destiny 2",
        released: " 24/10/2017",
        order: "https://www.xbox.com/ru-RU/games/destiny-2",
        description:
          "You are the Guardian, protector of the Last City of humanity in the solar system",
        links: "/game/dst",
        trailerEmbed: "https://www.youtube.com/embed/hdWkpbPTpmE",
        firstTitle: "Guardian - protector of the last safe city on Earth",
        secondTitle:
          "Еxploration of the world with the search for hidden secrets",
      },
      {
        path: require("./../assets/image/steep-page.jpg"),
        name: "STEEP",
        released: "02/12/2016",
        order: "https://www.xbox.com/ru-ru/games/store/steep/c350vbggcl6p",
        description:
          "These are your mountains. Buckle up, put on your suit and go!",
        links: "/game/stp",
        trailerEmbed: "https://www.youtube.com/embed/XznTHeUkGXA",
        firstTitle: "Participation in several disciplines of winter sports",
        secondTitle: "Rocket-powered wingsuit flight",
      },
      {
        path: require("./../assets/image/forza-page.jpg"),
        name: "Forza Motorsport 7",
        released: "03/10/2017",
        order:
          "https://www.xbox.com/ru-RU/games/store/forza-motorsport-7-standartnoe-izdanie/9N3NK5WW05HT",
        description:
          "This is a whole community of fans of racing, drifting, drag racing and tuning.",
        links: "/game/fmt",
        trailerEmbed: "https://www.youtube.com/embed/9aAr5blVy0g",
        firstTitle: "700 vehicles and over 200 different configurations",
        secondTitle: "Street circuit in Dubai is one of the new schemes",
      },
    ],
  },
  getters: {
    objectGames(state) {
      return state.objectGames;
    },
    objectImage(state) {
      return state.objectImage;
    },
    massGames(state) {
      return state.massGames;
    },
  },
  mutations: {
    CHECK_VALUE(state, payload) {
      for (let i = 0; i < state.massGames.length; i++) {
        if (state.massGames[i].links === payload) {
          state.objectGames = state.massGames[i];
        }
      }
      state.objectImage.first_image = require(`@/assets/image/img-game-section/${payload.slice(
        6,
        9
      )}-first.png`);
      state.objectImage.second_image = require(`@/assets/image/img-game-section/${payload.slice(
        6,
        9
      )}-second.png`);
    },
  },
  actions: {
    callCheckValue({ commit }, payload) {
      commit("CHECK_VALUE", payload);
    },
  },
};
