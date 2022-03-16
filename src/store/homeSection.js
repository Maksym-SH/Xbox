export default {
  state: {
    links: [
      "https://www.youtube.com/watch?v=xHutJNEoIx0&ab_channel=StopGame.Ru",
      "https://www.ea.com/ru-ru/games/starwars/battlefront/star-wars-battlefront-2",
    ],
  },
  getters: {
    links(state) {
      return state.links;
    },
  },
};
