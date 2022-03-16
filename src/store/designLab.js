export default {
  state: {
    designDesc: [
      "Xbox Design Lab",
      "Make yours one in a billion with new colors, metallic finishes and rubberized grips.",
    ],
    designButt: [
      "Design Yours",
      "https://www.figma.com/file/ykE2koNH98kf6AHQpaXAKi/xbox?node-id=0%3A1",
      "Explore Consoles & Accessories",
      "https://www.xbox.com/en-US/consoles",
    ],
  },
  getters: {
    designDesc(state) {
      return state.designDesc;
    },
    designButt(state) {
      return state.designButt;
    },
  },
};
