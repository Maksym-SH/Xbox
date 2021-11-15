<template>
  <footer class="footer">
    <div class="container d-flex justify-content-between" v-if="!issm">
      <div>
        <h3>{{ footerNavXBOX[0] }}</h3>
        <p
          class="footer__nav"
          v-for="item in footerNavXBOX"
          :key="item.navName"
        >
          <a :href="item.path" target="_blank">{{ item.navName }}</a>
        </p>
      </div>
      <div>
        <h3>{{ footerNavDevelopers[0] }}</h3>
        <p
          class="footer__nav"
          v-for="secondItem in footerNavDevelopers"
          :key="secondItem.navName"
        >
          <a :href="secondItem.path" target="_blank">{{
            secondItem.navName
          }}</a>
        </p>
      </div>
      <div class="text-center">
        <h3>{{ footerSocial[0] }}</h3>
        <div class="footer__images">
          <a
            v-for="itemThird in footerSocial"
            :key="itemThird.name"
            :href="itemThird.links"
          >
            <img :src="itemThird.path" :alt="itemThird.name" />
          </a>
        </div>
      </div>
    </div>
    <div v-if="issm" class="footer__nav-collapse container">
      <b-button v-b-toggle.collapse-xbox class="m-1 footer__collapse"
        >XBOX</b-button
      >
      <b-collapse
        id="collapse-xbox"
        class="mt-2"
        v-for="item in footerNavXBOX.slice(1, footerNavXBOX.length)"
        :key="item.navName"
      >
        <a :href="item.path" target="_blank"
          ><b-card> {{ item.navName }}</b-card>
        </a>
      </b-collapse>
      <b-button v-b-toggle.collapse-developers class="m-1 footer__collapse"
        >Developers</b-button
      >
      <b-collapse
        id="collapse-developers"
        class="mt-2"
        v-for="item in footerNavDevelopers.slice(1, footerNavXBOX.length)"
        :key="item.navName"
      >
        <a :href="item.path" target="_blank"
          ><b-card> {{ item.navName }}</b-card>
        </a>
      </b-collapse>
      <b-button v-b-toggle.collapse-follow-Us class="m-1 footer__collapse"
        >Follow Us</b-button
      >
      <b-collapse
        id="collapse-follow-Us"
        class="mt-2"
        v-for="item in footerSocial.slice(1, footerNavXBOX.length)"
        :key="item.name"
      >
        <a :href="item.links" target="_blank"
          ><b-card
            ><img :src="item.path" :alt="item.name" /> {{ item.name }}</b-card
          >
        </a>
      </b-collapse>
    </div>
    <div class="container">
      <div class="footer__line"></div>
      <div class="d-flex justify-content-between footer__rights">
        <span>English (United States)</span>
        <span>© Microsoft 2017</span>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    issm: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      footerNavXBOX: [
        "XBOX",
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
        "Developers",
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
        "Follow Us",
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
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
.footer {
  width: 100%;
  background: $dark-grey;
  padding-top: 60px;
  @media (max-width: $media-sm) {
    padding-top: 5px;
  }
  &__images {
    display: flex;
    img {
      padding: 0 10px;
      &:first-child {
        padding-left: 0px;
      }
    }
  }
  h3 {
    font-size: 18px;
    line-height: 21px;
    color: $light-green;
  }
  a {
    color: $white;
  }
  &__nav {
    font-size: 14px;
    margin: 15px 0px;
  }
  &__collapse {
    width: 98%;
  }
  &__nav-collapse {
    padding-bottom: 15px;
    a {
      color: $black;
    }
  }
  &__rights {
    color: $white;
    span {
      margin: 19px 0px;
    }
  }
  &__line {
    height: 1px;
    background: $white;
    width: 100%;
  }
}
</style>
