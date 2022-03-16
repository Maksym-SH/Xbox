import Vue from "vue";
import Vuex from "vuex";
import header from "./header.js";
import selectGames from "./selectGames.js";
import shapeBestValue from "./shapeBestValue.js";
import footer from "./footer.js";
import designLab from "./designLab.js";
import checkedConsole from "./checkedConsole.js";
import checkedGames from "./checkedGames.js";
import community from "./community.js";
import app from "./app.js";
import homeSection from "./homeSection.js";
import loginAccount from "./loginAccount.js";
Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    app,
    header,
    selectGames,
    shapeBestValue,
    footer,
    designLab,
    checkedConsole,
    checkedGames,
    community,
    homeSection,
    loginAccount,
  },
});
