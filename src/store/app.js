export default {
  state: {
    issm: false,
    ismd: false,
  },
  getters: {
    ismd(state) {
      return state.ismd;
    },
    issm(state) {
      return state.issm;
    },
  },
  mutations: {
    CHECK_WIDTH(state, payload) {
      payload <= 980 ? (state.ismd = true) : (state.ismd = false),
        payload <= 720 ? (state.issm = true) : (state.issm = false);
    },
  },
  actions: {
    callCheckWidth({ commit }, payload) {
      commit("CHECK_WIDTH", payload);
    },
  },
};
