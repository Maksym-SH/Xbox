<template>
  <div class="Game">Released on:</div>
</template>

<script>
export default {
  data() {
    return {
      massGames: [
        {
          path: require("@/assets/image/cod-card.png"),
          name: "Call of Duty: WWII",
          released: " 23/11/2017",
          order: "https://www.callofduty.com/ru/wwii/buy",
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
.Game {
  padding-top: 100px;
}
</style>
