<template>
  <section class="shape">
    <div class="container shape__content">
      <div class="shape__description">
        <img src="@/assets/icon/logoShape.svg" alt="Logo Shape" />
        <div>
          <h2>{{ shapeDesc[0] }}</h2>
          <p>{{ shapeDesc[1] }}</p>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="shape__card-wrapper">
        <div class="shape__card" v-for="card in shapeCard" :key="card.name">
          <img class="shape__card-image" :src="card.path" :alt="card.name" />
          <div class="shape__card-container">
            <h3 class="shape__card-name">{{ card.name }}</h3>
            <h2 class="shape__card-description">
              {{ card.description }}
            </h2>
            <a :href="card.links" target="_blank">
              <button class="shape__card-button">
                {{ card.buttonDescription }}
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["shapeDesc", "shapeCard"]),
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
.shape {
  width: 100%;
  padding-top: 64px;
  padding-bottom: 162px;
  background: linear-gradient(180deg, #686c6f 0%, #373a3c 100%);
  @media (max-width: $media-md) {
    padding: 60px 0px;
  }
  &__content {
    display: flex;
    justify-content: center;
  }
  &__description {
    color: $white;
    text-align: center;
    h2 {
      font-size: 48px;
      line-height: 56px;
    }
    p {
      font-size: 36px;
      line-height: 42px;
    }
  }
  &__card-wrapper {
    display: flex;
    margin-top: 20px;
    align-items: center;
    justify-content: space-between;
  }
  &__card {
    width: 33%;
    min-width: 320px;
    border: 1px solid $light-green;
    margin: 0px 32px;
    background: $white;
    transition: 0.5s ease;
    &:hover {
      transform: scale(1.1);
    }
    &:first-child {
      margin-left: 0px;
    }
    &:nth-child(3) {
      margin-right: 0px;
    }
  }
  @media (max-width: $media-sm) {
    & {
      padding-bottom: 50px;
    }
    h2 {
      font-size: 40px;
      line-height: 40px;
    }
    p {
      font-size: 24px;
      line-height: 35px;
    }
  }
  @media (max-width: $media-lg) {
    .container {
      max-width: 1180px;
    }
    &__card {
      min-width: 260px;

      margin: 0px 10px;
      &:first-child {
        margin-left: 0px;
      }
      &:nth-child(3) {
        margin-right: 0px;
      }
    }
  }
  @media (max-width: $media-md) {
    &__card-wrapper {
      flex-direction: column;
      align-items: center;
    }
    &__card {
      width: 52%;
      margin: 18px 0px;
      @media (max-width: $media-xs) {
        width: 95%;
      }
    }
  }
  &__card-container {
    width: calc(100% - 45px);
    margin: 16px 21px 27px 21px;
  }
  &__card-image {
    width: 100%;
    height: auto;
  }
  &__card-name {
    color: $light-dark;
    font-size: 18px;
    line-height: 21px;
  }
  &__card-description {
    font-size: 25px;
    line-height: 28px;
    color: $light-dark;
    white-space: pre-wrap;
    min-height: 100px;
    @media (max-width: $media-sm) {
      & {
        font-size: 23px !important;
      }
    }
  }
  &__card-button {
    width: 100%;
    outline: none;
    border: none;
    font-size: 15px;
    border-radius: 4px;
    background: $light-green;
    margin-top: 20px;
    padding: 20px 23px;
  }
}
</style>
