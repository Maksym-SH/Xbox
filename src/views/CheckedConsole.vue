<template>
  <section class="console">
    <div class="container">
      <div class="console__between">
        <img :src="objectConsole.path" alt="" class="console__image" />
        <p>
          {{ objectConsole.description }}
        </p>
      </div>
    </div>
    <div class="console__game-pass">
      <img src="@/assets/icon/logoShape.svg" alt="Logo Shape" />
      <h2>Game Pass</h2>
      <h3>Go meet your new favorite game</h3>
      <p>
        Play over 100 high quality console and PC games and get all the benefits
        of Xbox Live Gold and EA Play.
      </p>
      <a
        href="https://www.xbox.com/ru-RU/games/all-games?xr=shellnav"
        target="_blank"
        ><button class="console__more-details">
          More details
          <span
            ><img src="@/assets/icon/arrow-right.svg" alt=""
          /></span></button
      ></a>
      <h2 class="console__play-more"><span>Play more, wait less</span></h2>
      <p>
        The redesigned control panel has been designed to speed up your access
        to games and entertainment as quickly as possible.
      </p>
      <img
        src="@/assets/image/console-game.png"
        alt="Console games"
        class="console__game"
      />
    </div>
    <div class="console__game-pass">
      <h3>FINE PERFORMANCE ADJUSTMENT</h3>
      <p>
        The <span>Xbox</span> Wireless Controller offers sleek design,
        sophisticated comfort, and instant transfer into the hands of the person
        you know.
      </p>
      <img
        src="@/assets/image/controller.png"
        alt="Controller"
        class="console__game"
      />
    </div>
    <div class="container">
      <div class="console__controller-desc">
        <img
          src="@/assets/image/xbox-controller.png"
          alt="Xbox wirelles controller"
        />
        <p>
          Experience the redesigned <span>Xbox</span> Wireless Controller and
          enjoy its curved surfaces and sophisticated geometry for enhanced
          gaming comfort. Never miss your target again with textured handles and
          hybrid D-pad. Capture and share content easily with a dedicated Share
          button. Quickly pair, play and switch between devices including<span>
            Xbox Series X | S, Xbox One, Windows 10 PC, Android, and iOS.</span
          >
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      objectConsole: {},
      massConsole: [
        {
          path: require("./../assets/image/360.png"),
          description:
            "The Xbox 360 is Microsoft's second game console to follow the Xbox. The Xbox 360 competes with the Sony PlayStation 3 and Nintendo Wii for its seventh generation gaming system. Some of the main features of the Xbox 360 are represented by the Xbox Live service, which allows you to play over the Internet, as well as download a variety of content - video games, demos, trailers, music, TV shows, and more.",
          links: "/console/360",
          massDesc: [
            {
              heading: "ABSOLUTE CONTROL",
              performance:
                "The textured surface of the triggers and bumpers allows for a secure grip and prevents the controller from slipping out.",
            },
            {
              heading: "YOUR WIN!",
              performance: "Show off your victories on our official website",
            },
            {
              heading: "FULL CIRCLE",
              performance:
                "Renewal in all directions. The hybrid crosspiece design allows you to confidently navigate the toughest combinations without relying on luck alone.",
            },
          ],
        },
        {
          path: require("./../assets/image/one.png"),
          description:
            "Xbox One is Microsoft's third game console and successor to the Xbox 360. Xbox One's eighth generation gaming platforms are Sony Computer Entertainment's PlayStation 4, Nintendo's Wii U and Nintendo Switch.",
          links: "/console/one",
        },
        {
          path: require("./../assets/image/ones.png"),
          description:
            "According to Microsoft, the case of the console has become smaller by 40% than in the previous version. Xbox One S received support for 4K and HDR resolution. Also, another difference is the built-in power supply.",
          links: "/console/ones",
        },
        {
          path: require("./../assets/image/onex.png"),
          description:
            "Xbox Series X is compatible with some of the older Xbox titles, but not all of them. The console will support both disks and virtual copies of games",
          links: "/console/onex",
          massDesc: [
            {
              heading: "ABSOLUTE CONTROL",
              performance:
                "The textured surface of the triggers and bumpers allows for a secure grip and prevents the controller from slipping out.",
            },
            {
              heading: "YOUR WIN!",
              performance: "Show off your victories on our official website",
            },
            {
              heading: "FULL CIRCLE",
              performance:
                "Renewal in all directions. The hybrid crosspiece design allows you to confidently navigate the toughest combinations without relying on luck alone.",
            },
          ],
        },
      ],
    };
  },
  methods: {
    checkConsole() {
      for (let i = 0; i < this.massConsole.length; i++) {
        if (this.massConsole[i].links === this.$route.path) {
          this.objectConsole = this.massConsole[i];
        }
      }
    },
  },
  mounted() {
    this.checkConsole();
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/variables";
.console {
  width: 100%;
  margin-top: 64px;
  padding-top: 60px;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(../assets/image/console-page.jpg) center center no-repeat;
  background-size: cover;
  background-attachment: fixed;
  &__image {
    width: 25%;
    height: auto;
    border-radius: 5%;
    @media (max-width: $media-md) {
      max-height: 350px;
      width: auto;
    }
  }
  &__between {
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      max-width: 600px;
      color: $white;
      font-size: 25px;
      text-align: center;
    }

    @media (max-width: $media-md) {
      p {
        max-width: none;
        font-size: 19px;
        display: flex;
        justify-content: center;
        @media (max-width: $media-sm) {
          font-size: 16px;
        }
      }
      & {
        display: block;
        img {
          display: block;
          margin: 0 auto;
          width: 40%;
          @media (max-width: $media-sm) {
            width: 80%;
          }
        }
      }
    }
  }
  &__game {
    margin-top: 30px !important;
    width: 50%;
    max-width: 700px;
    @media (max-width: $media-sm) {
      width: 90%;
    }
  }
  &__game-pass {
    margin-top: 60px;
    padding-bottom: 60px;
    color: $white;
    img {
      display: block;
      margin: 0 auto;
    }
    h2 {
      text-align: center;
      margin-top: 10px;
      font-size: 48px;
      text-transform: uppercase;
      @media (max-width: $media-sm) {
        font-size: 35px;
      }
    }
    h3 {
      font-size: 45px;
      text-align: center;
      margin: 0px;
      padding-bottom: 30px;
      @media (max-width: $media-sm) {
        font-size: 33px;
      }
    }
    p {
      font-size: 20px;
      width: 80%;
      text-align: center;
      display: block;
      font-weight: bold;
      margin: 0 auto;
      span {
        color: $light-green;
      }
    }
  }
  &__more-details {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    margin-top: 30px;
    border: none;
    padding: 18px 53px;
    font-size: 20px;
    background: $light-green;
    border-radius: 4px;
    align-items: center;
    span {
      margin: 3px 0px 0px 5px;
    }
  }
  &__play-more {
    margin-top: 200px !important;
    span {
      color: $light-green;
    }
  }
  &__controller-desc {
    display: flex;
    justify-content: space-between;
    padding-bottom: 100px;
    padding-top: 60px;
    @media (max-width: $media-md) {
      flex-direction: column;
    }
    img {
      width: 40%;
      height: 100%;
      border-radius: 10px;
      max-width: 800px;
      @media (max-width: $media-md) {
        width: 80%;
        min-height: 200px;
        margin: 0 auto;
      }
    }
    p {
      font-size: 20px;
      margin-left: 50px !important;
      text-align: center;
      display: block;
      font-weight: bold;
      margin: 0 auto;
      color: $white;
      span {
        color: $light-green;
      }
      @media (max-width: $media-md) {
        margin: 30px auto 0px auto !important;
      }
    }
  }
}
a {
  color: $black;
}
</style>
