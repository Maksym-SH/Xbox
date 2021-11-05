<template>
  <div class="exclusive">
    <h1 align="center">Exclusive games on XBOX</h1>
    <div class="exclusive__game-wrapper">
      <div class="exclusive__game" v-for="game in gameCard" :key="game.name">
        <img class="exclusive__image" :src="game.path" :alt="game.name" />
        <div class="exclusive__game-container">
          <h3 class="exclusive__game-names">{{ game.name }}</h3>
          <h2 class="exclusive__game-description">
            {{ game.description }}
          </h2>
          <router-link :to="game.links" @click="dataTransfer(game)"
            ><button class="exclusive__game-button">
              See Details
            </button></router-link
          >
        </div>
      </div>
    </div>
    <a href="https://www.xbox.com/ru-RU/games/all-games" target="_blank"
      ><button class="exclusive__xbox-game">XBOX Store</button></a
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      gameCard: [
        {
          path: require("@/assets/image/cod-card.png"),
          name: "Call of Duty: WWII",
          description: "The C.O.D.E. Bravery Packis now available in WWII",
          links: "/game/cod",
        },
        {
          path: require("@/assets/image/dest-card.png"),
          name: "Destiny 2",
          description:
            "You are the Guardian, protector of the Last City of humanity in the solar system",
          links: "/game/dst",
        },
        {
          path: require("@/assets/image/steep-card.png"),
          name: "STEEP",
          description:
            "These are your mountains. Buckle up, put on your suit and go!",
          links: "/game/stp",
        },
        {
          path: require("@/assets/image/forza-card.png"),
          name: "Forza Motorsport 7",
          description:
            "This is a whole community of fans of racing, drifting, drag racing and tuning.",
          links: "/game/fmt",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
.exclusive {
  width: 100%;
  padding: 97px 0px 140px 0px;
  background: url(../../assets/image/cod-page.jpg) no-repeat center center;
  background-size: cover;
  > h1 {
    font-size: 36px;
    line-height: 42px;
    color: $white;
  }
  a {
    text-decoration: none;
  }
  &__image {
    width: 100%;
    height: 140px;
    border-radius: 4px;
    @media (max-width: $media-sm) {
      height: 250px;
    }
    @media (min-width: $media-lg) {
      height: 190px;
    }
  }
  &__game {
    width: 25%;
    position: relative;
    max-width: 500px;
    border: 1px solid $light-green;
    border-radius: 4px;
    background: $white;
    margin: 15px;
    transition: 0.5s;
    &:hover {
      transform: scale(1.1);
    }
  }
  &__game-wrapper {
    width: 100%;
    padding: 15px;
    display: flex;
    margin-bottom: 5;
    justify-content: space-between;
  }
  &__xbox-game {
    background: linear-gradient(180deg, #686c6f 0%, #373a3c 100%);
    border-radius: 4px;
    color: $white;
    padding: 11px 47px 11px 47px;
    text-align: center;
    margin: 0 auto;
    display: block;
    outline: none;
    border: none;
  }
  @media (max-width: $media-md) {
    &__game-wrapper {
      flex-direction: column;
      margin: 0 auto;
    }
    &__game {
      width: 100%;
      margin: 0 auto;
      margin-top: 30px;
    }
    & {
      padding-bottom: 50px;
    }
  }
  &__game-button {
    width: 100%;
    color: $white;
    background: $light-green;
    border: none;
    outline: none;
    border-radius: 4px;
    padding: 20px;
  }
  &__game-container {
    padding: 25px 23px 30px 23px;
  }
  &__game-names {
    font-size: 18px;
    line-height: 21px;
    color: $light-dark;
  }
  &__game-description {
    font-size: 19px;
    line-height: 25px;
    color: $light-dark;
    height: 130px;
    overflow: hidden;
    @media (max-width: $media-md) {
      & {
        height: auto;
      }
    }
  }
}
</style>
