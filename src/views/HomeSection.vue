<template>
  <div>
    <div class="section">
      <div class="container">
        <div class="section__game-naming">
          <h1>Star Wars<br />Battlefront II</h1>
        </div>
        <div class="section__button">
          <button><a :href="links[0]" target="_blank">Watch Tralier</a></button>
          <button><a :href="links[1]" target="_blank">Explore Games</a></button>
        </div>
      </div>
    </div>
    <shape-best-value></shape-best-value>
    <select-games></select-games>
  </div>
</template>

<script>
import shapeBestValue from "@/components/construction/shapeBestValue";
import selectGames from "@/components/construction/selectGames.vue";
export default {
  components: {
    "shape-best-value": shapeBestValue,
    "select-games": selectGames,
  },
  data() {
    return {
      links: [
        "https://www.youtube.com/watch?v=xHutJNEoIx0&ab_channel=StopGame.Ru",
        "https://www.ea.com/ru-ru/games/starwars/battlefront/star-wars-battlefront-2",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
.section {
  background: url(../assets/image/first-page.jpg) no-repeat center center;
  background-size: cover;
  margin-top: 64px;
  width: 100%;
  height: 100vh;
  &__game-naming {
    display: flex;
    padding-top: calc(40% - 43px / 2 - 93.5px);
    justify-content: end;
    margin-right: 120px;
    h1 {
      font-size: 36px;
      line-height: 42px;
      color: $white;
    }
    @media (max-width: $media-md) {
      padding-top: 200px;
      min-width: 210px;
    }
  }
  &__button {
    display: flex;
    font-family: "HelveticaNeue", sans-serif;
    justify-content: end;

    margin: 130px 0px 0px 0px;
    button {
      padding: 8px 24px;
      margin: 8px;
      font-size: 16px;
      line-height: 21px;
      border-radius: 4px;
      outline: none;
      border: none;
      a {
        color: $white;
        text-decoration: none;
      }
      &:first-child {
        background: $light-green;
      }
      &:nth-child(2) {
        background: linear-gradient(180deg, #686c6f 0%, #373a3c 100%);
      }
    }
  }
}
</style>
