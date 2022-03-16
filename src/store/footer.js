export default {
  state: {
    xboxName: "XBOX",
    devName: "Developers",
    followName: "Follow Us",
    footerNavXBOX: [
      { navName: "Support", path: "https://support.xbox.com/en-US/" },
      {
        navName: "Contact us",
        path: "https://support.xbox.com/en-US/contact-us",
      },
      {
        navName: "Privacy & cookies ",
        path: "https://privacy.microsoft.com/ru-ru/privacystatement",
      },
      {
        navName: "Terms of use ",
        path: "https://www.microsoft.com/en-us/legal/terms-of-use",
      },
    ],
    footerNavDevelopers: [
      {
        navName: "Games",
        path: "https://www.xbox.com/ru-RU/games/all-games",
      },
      {
        navName: "Windows 10",
        path: "https://www.xbox.com/ru-RU/xbox-game-pass/pc-games",
      },
      {
        navName: "Creators Program",
        path: "https://www.xbox.com/ru-RU/developers/creators-program",
      },
      {
        navName: "Designed for XBOX",
        path: "https://www.figma.com/file/ykE2koNH98kf6AHQpaXAKi/xbox",
      },
    ],
    footerSocial: [
      {
        name: "Facebook",
        path: require("@/assets/icon/facebook.svg"),
        links: "https://uk-ua.facebook.com/",
      },
      {
        name: "Twitter",
        path: require("@/assets/icon/twitter.svg"),
        links: "https://twitter.com/?lang=ru",
      },
      {
        name: "Instagram",
        path: require("@/assets/icon/instagram.svg"),
        links: "https://www.instagram.com/?hl=ru",
      },
    ],
  },
  getters: {
    xboxName(state) {
      return state.xboxName;
    },
    devName(state) {
      return state.devName;
    },
    followName(state) {
      return state.followName;
    },
    footerNavXBOX(state) {
      return state.footerNavXBOX;
    },
    footerNavDevelopers(state) {
      return state.footerNavDevelopers;
    },
    footerSocial(state) {
      return state.footerSocial;
    },
  },
};
