<template>
  <header class="header">
    <div class="container-lg">
      <nav class="header__navbar navbar-expand-lg">
        <router-link to="/"
          ><img src="@/assets/icon/logo.svg" alt="Xbox Logo"
        /></router-link>
        <ul class="header__list">
          <li>
            <b-dropdown
              text="Games"
              variant="outline-none border-none text-white"
            >
              <b-dropdown-item-button
                v-for="item in xboxGames"
                :key="item.value"
                >{{ item.game }}</b-dropdown-item-button
              >
            </b-dropdown>
          </li>
          <li>
            <b-dropdown
              text="Consoles"
              variant="outline-none border-none text-white"
            >
              <b-dropdown-item-button
                v-for="item in xboxConsoles"
                :key="item.value"
                >{{ item.console }}</b-dropdown-item-button
              >
            </b-dropdown>
          </li>
          <li>
            <router-link to="/"
              ><b-button variant="outline-none border-none text-white"
                >Community</b-button
              ></router-link
            >
          </li>
          <li>
            <b-form-input
              size="sm"
              class="py-2"
              placeholder="Search"
            ></b-form-input>
          </li>
          <li>
            <span><img src="@/assets/icon/Shape.svg" alt="" /></span>
            <b-dropdown
              text="My XBOX"
              variant="outline-none border-none text-white"
              class="header__dropdown"
            >
              <b-dropdown-item-button
                v-for="item in accountXbox"
                :key="item.value"
                >{{ item.action }}</b-dropdown-item-button
              >
            </b-dropdown>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      xboxGames: [
        { game: "Call of Duty: WWII", value: "cod" },
        { game: "Destiny 2", value: "dst" },
        { game: "STEEP", value: "stp" },
        { game: "Forza Motorsport 7", value: "fmt" },
      ],
      xboxConsoles: [
        { console: "Xbox 360", value: "360" },
        { console: "Xbox One", value: "one" },
        { console: "Xbox One S", value: "ones" },
        { console: "Xbox One X", value: "onex" },
      ],
      accountXbox: [
        { action: "Sign in to your account", value: "sign" },
        { action: "Create an account", value: "create" },
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
  &__navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__list {
    list-style: none;
    display: flex;
    color: rgba(255, 255, 255, 0.5);
    transition: all 0.2s ease;
    &:hover {
      color: $white;
    }
    li {
      margin-top: 10px;
      margin-right: 25px;
    }
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
}
</style>
