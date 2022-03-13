<template>
  <section>
    <div
      class="game"
      :style="{ 'background-image': 'url(' + objectGames.path + ')' }"
    >
      <div class="container">
        <div class="game__naming">
          <h1>{{ objectGames.name }}</h1>
          <p>Released on: {{ objectGames.released }}</p>
        </div>
        <div class="game__button">
          <a :href="objectGames.order" target="_blank">
            <button>Order now</button>
          </a>
          <a
            href="https://www.xbox.com/ru-RU/games/all-games"
            target="_blank"
            alt=""
          >
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
        <div class="d-flex justify-content-between game__image-block">
          <h2 class="game__deck">{{ objectGames.firstTitle }}</h2>
          <img
            :src="objectImage.first_image"
            :alt="objectGames.name"
            class="game__section-image"
          />
        </div>
        <div class="game__image-block">
          <img
            :src="objectImage.second_image"
            :alt="objectGames.name"
            class="game__section-image"
          />
          <h2 class="game__deck">{{ objectGames.secondTitle }}</h2>
        </div>
        <h3 class="game__rights">
          All rights of the game are reserved, the product can be used for
          informational purposes only
        </h3>
        <div class="game__buttons-end">
          <a :href="objectGames.order" target="_blank">
            <button class="game__button-end-first">Order now</button>
          </a>
          <a
            href="https://varvid.com/broadcast-platforms/mixer/"
            target="_blank"
          >
            <button class="game__button-end-first game__button-end-second">
              Start streaming on mixer
            </button>
          </a>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      objectGames: {},
      objectImage: {},
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
          firstTitle: "The best modern equipment",
          secondTitle: "Realistic shooting",
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
          firstTitle: "Guardian - protector of the last safe city on Earth",
          secondTitle:
            "Еxploration of the world with the search for hidden secrets",
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
          firstTitle: "Participation in several disciplines of winter sports",
          secondTitle: "Rocket-powered wingsuit flight",
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
          firstTitle: "700 vehicles and over 200 different configurations",
          secondTitle: "Street circuit in Dubai is one of the new schemes",
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
      this.objectImage.first_image = require(`@/assets/image/img-game-section/${this.$route.path.slice(
        6,
        9
      )}-first.png`);
      this.objectImage.second_image = require(`@/assets/image/img-game-section/${this.$route.path.slice(
        6,
        9
      )}-second.png`);
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
        font-size: 34px;
      }
    }
  }
  &__trailer iframe {
    width: 1000px;
    display: block;
    margin: 0 auto;
    border-radius: 10px;
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
  &__section-image {
    width: 45%;
    min-width: 170px;
    min-height: 180px;
    height: auto;
    border-radius: 4px;
    @media (max-width: $media-sm) {
      min-height: 130px;
    }
  }
  &__deck {
    font-size: 36px;
    line-height: 42px;
    color: $light-dark;
    max-width: 414px;
    @media (max-width: $media-md) {
      font-size: 25px;
      &:nth-child(odd) {
        padding-right: 10px;
      }
      &:nth-child(even) {
        padding-left: 10px;
      }
    }
    @media (max-width: $media-sm) {
      font-size: 17px;
      line-height: 35px;
      &__section-image {
        width: 300px;
      }
    }
  }
  &__rights {
    font-size: 20px !important;
    line-height: 30px;
    text-align: center;
    @media (max-width: $media-sm) {
      padding: 0px !important;
    }
  }
  &__image-block {
    margin-bottom: 100px;
    display: flex;
    justify-content: space-between;
    @media (max-width: $media-md) {
      margin-bottom: 60px;
    }
  }

  &__naming {
    display: block;
    text-align: end;
    padding-top: calc(30% - 35px / 2 - 87.5px);
    justify-content: end;
    margin-right: 0px;
    color: $white;
    h1 {
      font-size: 40px;
      line-height: 42px;
      @media (max-width: $media-xs) {
        font-size: 30px;
      }
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
    @media (max-width: $media-sm) {
      margin-bottom: 60px;
    }
  }
  &__button-end-first {
    color: $white;
    font-family: "HelveticaNeue", sans-serif;
    font-size: 21px;
    margin: 8px;
    padding: 18px 53px;
    background: $light-dark;
    outline: none;
    border: none;
    border-radius: 4px;
    @media (max-width: $media-sm) {
      width: 80%;
      padding: 14px 40px;
      margin: 8px 0px;
    }
  }
  &__button-end-second {
    background: $light-green;
  }
  &__buttons-end {
    display: flex;
    justify-content: center;
    margin-bottom: 92px;
    @media (max-width: $media-sm) {
      display: block;
      text-align: center;
      width: 100%;
      margin-bottom: 52px;
      font-size: 16px !important;
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
      color: $white;
      a {
        color: $white;
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
