<template>
  <div class="Game" :style="{ background: 'url(' + objectGames.path + ')' }">
    <div class="container"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      objectGames: {},
      massGames: [
        {
          path: require("./../assets/image/cod-page.jpg"),
          name: "Call of Duty: WWII",
          released: " 23/11/2017",
          order: "https://www.callofduty.com/ru/wwii/buy",
          description: "The C.O.D.E. Bravery Packis now available in WWII",
          links: "/game/cod",
        },
        {
          path: require("./../assets/image/dest-card.png"),
          name: "Destiny 2",
          released: " 24/10/2017",
          description:
            "You are the Guardian, protector of the Last City of humanity in the solar system",
          links: "/game/dst",
        },
        {
          path: require("./../assets/image/steep-card.png"),
          name: "STEEP",
          released: "02/12/2016",
          description:
            "These are your mountains. Buckle up, put on your suit and go!",
          links: "/game/stp",
        },
        {
          path: "./../assets/image/forza-card.png",
          name: "Forza Motorsport 7",
          released: "03/10/2017",
          description:
            "This is a whole community of fans of racing, drifting, drag racing and tuning.",
          links: "/game/fmt",
        },
      ],
    };
  },
  methods: {
    checkValue() {
      for (let i = 0; i < this.massGames.length; i++) {
        if (this.massGames[i].links === this.$route.path) {
          this.objectGames = this.massGames[i];
        }
      }
    },
  },
  mounted() {
    this.checkValue();
  },
};
</script>
<style lang="scss" scoped>
.Game {
  margin-top: 64px;
  padding-top: 500px;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
