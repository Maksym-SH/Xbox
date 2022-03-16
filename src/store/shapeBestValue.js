export default {
  state: {
    shapeDesc: ["The best value", "in games and entertainment"],
    shapeCard: [
      {
        path: require("@/assets/image/xbox-card.png"),
        name: "XBOX ONE X",
        description: "Faster Processing Smoother Gameplay",
        buttonDescription: "Explore Consoles & Accessories",
        links: "https://www.xbox.com/en-US/consoles",
      },
      {
        path: require("@/assets/image/mixer-card.png"),
        name: "mixer Streaming",
        description: "The Next Generation Of Life Game Streaming",
        buttonDescription: "Start Watching mixer",
        links: "https://varvid.com/broadcast-platforms/mixer/",
      },
      {
        path: require("@/assets/image/gamesGold-card.png"),
        name: "Free Games Every Month",
        description: "Get up to $700 in free games",
        buttonDescription: "Get Free Games",
        links: "https://www.xbox.com/ru-RU/live/gold",
      },
    ],
  },
  getters: {
    shapeDesc(state) {
      return state.shapeDesc;
    },
    shapeCard(state) {
      return state.shapeCard;
    },
  },
};
