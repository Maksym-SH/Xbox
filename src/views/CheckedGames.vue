<template>
  <div>
    <div
      class="game"
      :style="{ 'background-image': 'url(' + objectGames.path + ')' }"
    >
      <div class="container">
        <div class="game__naming">
          <h1>{{ objectGames.name }}</h1>
          <p>Released on:{{ objectGames.released }}</p>
        </div>
        <div class="game__button">
          <a :href="objectGames.order" target="_blank">
            <button>Order now</button>
          </a>
          <a href="https://www.xbox.com/ru-RU/games/all-games" alt="">
            <button>More Games</button>
          </a>
        </div>
      </div>
    </div>
    <section class="game__section">
      <h3>
        {{ objectGames.name }}
      </h3>
      <div class="d-flex justify-content-center">
        <a :href="objectGames.order" target="_blank">
          <button class="game__order-button">Order now</button>
        </a>
      </div>
      <div class="game__trailer">
        <iframe
          :src="objectGames.trailerEmbed"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div class="container">
        <div class="d-flex justify-content-between"></div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      objectGames: {},
      massImage: [
        require("@/assets/image/img-game-section/" +
          this.$route.path.slice(6, 9) +
          "-first.png"),
        require("@/assets/image/img-game-section/" +
          this.$route.path.slice(6, 9) +
          "-second.png"),
      ],
      massGames: [
        {
          path: require("./../assets/image/cod-page.jpg"),
          name: "Call of Duty: WWII",
          released: " 23/11/2017",
          order:
            "https://www.xbox.com/ru-RU/games/store/call-of-duty-wwii-nabor-divizij/C4THQD1K12KQ/0001",
          description: "The C.O.D.E. Bravery Packis now available in WWII",
          links: "/game/cod",
          trailerEmbed: "https://www.youtube.com/embed/D4Q_XYVescc",
        },
        {
          path: require("./../assets/image/destiny-page.jpg"),
          name: "Destiny 2",
          released: " 24/10/2017",
          order: "https://www.xbox.com/ru-RU/games/destiny-2",
          description:
            "You are the Guardian, protector of the Last City of humanity in the solar system",
          links: "/game/dst",
          trailerEmbed: "https://www.youtube.com/embed/hdWkpbPTpmE",
        },
        {
          path: require("./../assets/image/steep-page.jpg"),
          name: "STEEP",
          released: "02/12/2016",
          order: "https://www.xbox.com/ru-ru/games/store/steep/c350vbggcl6p",
          description:
            "These are your mountains. Buckle up, put on your suit and go!",
          links: "/game/stp",
          trailerEmbed: "https://www.youtube.com/embed/XznTHeUkGXA",
        },
        {
          path: require("./../assets/image/forza-page.jpg"),
          name: "Forza Motorsport 7",
          released: "03/10/2017",
          order:
            "https://www.xbox.com/ru-RU/games/store/forza-motorsport-7-standartnoe-izdanie/9N3NK5WW05HT",
          description:
            "This is a whole community of fans of racing, drifting, drag racing and tuning.",
          links: "/game/fmt",
          trailerEmbed: "https://www.youtube.com/embed/9aAr5blVy0g",
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
      console.log(this.massImage);
    },
  },
  mounted() {
    this.checkValue();
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/variables";
.game {
  background: no-repeat center center;
  background-size: cover;
  margin-top: 64px;
  width: 100%;
  height: 100vh;
  min-height: 600px;
  &__section {
    width: 100%;
    h3 {
      padding-top: 100px;
      text-align: center;
      font-size: 36px;
      line-height: 42px;
      color: $light-dark;
      margin-bottom: 100px;
      @media (max-width: $media-md) {
        padding-top: 60px;
        margin-bottom: 60px;
      }
    }
  }
  &__trailer iframe {
    width: 1000px;
    display: block;
    margin: 0 auto;
    height: 562px;
    margin-bottom: 100px;
    @media (max-width: $media-lg) {
      width: 890px;
      height: 500px;
    }
    @media (max-width: $media-md) {
      width: 700px;
      height: 400px;
    }
    @media (max-width: $media-sm) {
      width: 500px;
      height: 260px;
    }
    @media (max-width: $media-xs) {
      width: calc(100% - 20px);
      height: 170px;
    }
  }
  &__naming {
    display: block;
    text-align: end;
    padding-top: calc(40% - 43px / 2 - 93.5px);
    justify-content: end;
    margin-right: 0px;
    color: $white;
    h1 {
      font-size: 36px;
      line-height: 42px;
    }
    p {
      font-size: 14px;
      line-height: 16px;
    }
    @media (max-width: $media-md) {
      padding-top: 200px;
      min-width: 210px;
    }
  }
  @media (max-width: $media-sm) {
    & {
      max-height: 600px;
    }
  }
  &__order-button {
    padding: 14px 60px;
    outline: none;
    font-size: 20px;
    color: $white;
    margin-bottom: 100px;
    border: none;
    border-radius: 10px;
    background: $light-green;
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
      color: $white;
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
