export default {
  state: {
    accountData: [{}],
    createdAccount: false,
    email: "",
    password: "",
    repeatPassword: "",
    signCompleted: false,
    isnew: true,
    isWrong: false,
    massSigned: [],
    buttonDisabled: false,
    typePage: "sign",
    sign: false,
  },
  getters: {
    sign(state) {
      return state.sign;
    },
    accountData(state) {
      return state.accountData;
    },
    createdAccount(state) {
      return state.createdAccount;
    },
    getEmail(state) {
      return state.email;
    },
    getPassword(state) {
      return state.password;
    },
    getRepeatPassword(state) {
      return state.repeatPassword;
    },
    signCompleted(state) {
      return state.signCompleted;
    },
    isnew(state) {
      return state.isnew;
    },
    isWrong(state) {
      return state.isWrong;
    },
    massSigned(state) {
      return state.massSigned;
    },
    buttonDisabled(state) {
      return state.buttonDisabled;
    },
  },
  mutations: {
    NEW_EMAIL(state, payload) {
      state.email = payload;
    },
    NEW_PASSWORD(state, payload) {
      state.password = payload;
    },
    NEW_REPEAT_PASSWORD(state, payload) {
      state.repeatPassword = payload;
    },
    CHECKOUT_DATA(state) {
      if (
        (state.email.includes("@") &&
          state.email.includes(".") &&
          state.password.length >= 8) ||
        (state.typePage === "registration" &&
          state.repeatPassword.length >= 8 &&
          state.password === state.repeatPassword)
      ) {
        state.signCompleted = true;
        state.massSigned.push(state.signCompleted, state.email);
        state.sign = state.massSigned;
        state.email = state.password = state.repeatPassword = "";
        state.buttonDisabled = true;
      } else {
        state.isWrong = true;
        setTimeout(() => {
          state.isWrong = false;
        }, 2000);
      }
    },
    TYPE_PAGE(state, payload) {
      if (payload === "sign") {
        state.accountData.unshift("Sign to account", "Sign");
      } else {
        state.accountData.unshift("Registration", "Registration");
        state.isnew = false;
      }
      state.createdAccount = true;
    },
  },
  actions: {
    callCheckoutData({ commit }, payload) {
      commit("CHECKOUT_DATA", payload);
    },
    callTypePage({ commit }, payload) {
      commit("TYPE_PAGE", payload);
    },
    callChangeEmail({ commit }) {
      commit("CHANGE_EMAIL");
    },
    callChangePassword({ commit }) {
      commit("CHANGE_PASSWORD");
    },
    callChangeRepeatPassword({ commit }) {
      commit("CHANGE_REPEAT_PASSWORD");
    },
    callNewEmail({ commit }, payload) {
      commit("NEW_EMAIL", payload);
    },
    callNewPassword({ commit }, payload) {
      commit("NEW_PASSWORD", payload);
    },
    callNewRepeatPassword({ commit }, payload) {
      commit("NEW_REPEAT_PASSWORD", payload);
    },
  },
};
