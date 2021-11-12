<template>
  <header class="header">
    <div class="container-lg">
      <nav class="header__navbar navbar-expand-lg">
        <router-link to="/"
          ><img src="@/assets/icon/logo.svg" alt="Xbox Logo"
        /></router-link>
        <span
          ><img
            src="@/assets/icon/menuBurger.svg"
            alt=""
            v-if="!menuOpen && ismd"
            @click="menuOpen = true"
        /></span>
        <span
          ><img
            class="header__close-icon"
            src="@/assets/icon/closeMenu.svg"
            alt=""
            v-if="menuOpen && ismd"
            @click="menuOpen = false"
        /></span>
        <ul class="header__list" v-if="!ismd || menuOpen">
          <li>
            <b-dropdown
              text="Games"
              variant="outline-none border-none text-white"
            >
              <a
                class="header__links"
                v-for="item in xboxGames"
                :key="item.value"
                :href="item.value"
              >
                <b-dropdown-item-button>{{ item.game }}</b-dropdown-item-button>
              </a>
            </b-dropdown>
          </li>
          <li>
            <b-dropdown
              text="Consoles"
              variant="outline-none border-none text-white"
            >
              <a
                class="header__links"
                v-for="item in xboxConsoles"
                :key="item.value"
                :href="item.value"
              >
                <b-dropdown-item-button>{{
                  item.console
                }}</b-dropdown-item-button>
              </a>
            </b-dropdown>
          </li>
          <li>
            <router-link to="/community"
              ><b-button variant="outline-none border-none text-white"
                >Community</b-button
              ></router-link
            >
          </li>
          <li>
            <b-form-input
              size="sm"
              class="py-2 header__input"
              placeholder="Search"
            ></b-form-input>
          </li>
          <li>
            <img v-if="!ismd" src="@/assets/icon/Shape.svg" alt="" />
            <b-dropdown
              text="My XBOX"
              variant="outline-none border-none text-white"
              class="header__dropdown"
            >
              <b-dropdown-item-button
                v-for="item in accountXbox"
                :key="item.path"
                ><a :href="item.path" class="header__links">{{
                  item.action
                }}</a>
              </b-dropdown-item-button>
            </b-dropdown>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    ismd: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      menuOpen: false,
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
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
.header {
  width: 100%;
  background-color: $dark-grey;
  position: fixed;
  z-index: +99;
  top: 0px;
  left: 0px;
  right: 0px;
  max-height: 64px;
  .container {
    margin: 0 auto;
    width: 76%;
  }
  &__menu-burger {
    display: block;
    position: fixed;
  }
  &__navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: $media-md) {
      display: block;
    }
  }
  &__list {
    list-style: none;
    display: flex;
    color: rgba(255, 255, 255, 0.5);
    li {
      position: relative;
      margin-top: 10px;
      margin-right: 25px;
      > span {
        position: absolute;
        top: -9px;
        left: 15px;
      }
    }
  }
  @media (max-width: $media-md) {
    & {
      display: block;
      padding-top: 18px;
      padding-bottom: 20px;
    }
    &__list {
      display: block;
      margin-left: -30px;
      width: 120%;
      padding-bottom: 20px;
      background: $dark-grey;
      li {
        margin: 15px 0px;
      }
    }
  }
  &__input {
    max-width: 150px;
    @media (max-width: $media-md) {
      margin-left: 11px;
    }
  }
  &__links {
    text-decoration: none;
    color: $black;
  }
  select {
    margin-top: 10px;
    outline: none;
    border: none;
    background: $dark-grey;
    background: none;
    color: rgba(255, 255, 255, 0.5);
    transition: all 0.2s ease;
    &:hover {
      color: $white;
    }
    option {
      background: $dark-grey;
    }
  }
  &__close-icon {
    position: absolute;
    top: 12px;
    right: 6px;
  }
}
span {
  img {
    position: absolute;
    top: 18px;
    right: 12px;
  }
}
</style>
