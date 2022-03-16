export default {
  state: {
    inputValue: "",
    menuOpen: false,
    signValue: "You are not signed in yet",
    xboxGames: [
      { game: "Call of Duty: WWII", value: "/game/cod" },
      { game: "Destiny 2", value: "/game/dst" },
      { game: "STEEP", value: "/game/stp" },
      { game: "Forza Motorsport 7", value: "/game/fmt" },
    ],
    xboxConsoles: [
      { console: "Xbox 360", value: "/console/360" },
      { console: "Xbox One", value: "/console/one" },
      { console: "Xbox One S", value: "/console/ones" },
      { console: "Xbox One X", value: "/console/onex" },
    ],
    accountXbox: [
      { action: "Sign in to your account", path: "/sign" },
      { action: "Create an account", path: "/registration" },
    ],
  },
  getters: {
    inputValue(state) {
      return state.inputValue;
    },
    menuOpen(state) {
      return state.menuOpen;
    },
    signValue(state) {
      return state.signValue;
    },
    xboxGames(state) {
      return state.xboxGames;
    },
    xboxConsoles(state) {
      return state.xboxConsoles;
    },
    accountXbox(state) {
      return state.accountXbox;
    },
  },
  mutations: {
    UPDATE_SIGN(state, payload) {
      state.sign = payload;
    },
    UPDATE_INPUT_SEARCH(state, payload) {
      state.inputValue = payload;
    },
    MENU_OPEN_CHANGE(state, payload) {
      state.menuOpen = payload;
    },
  },
  actions: {
    callUpdateSign({ commit }, payload) {
      commit("UPDATE_SIGN", payload);
    },
    callUpdateInputSearch({ commit }, payload) {
      commit("UPDATE_INPUT_SEARCH", payload);
    },
    callMenuOpenChange({ commit }, payload) {
      commit("MENU_OPEN_CHANGE", payload);
    },
  },
};
