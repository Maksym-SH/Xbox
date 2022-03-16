<template>
  <section class="design">
    <div class="container">
      <h2 class="design__name">{{ designDesc[0] }}</h2>
      <p class="design__description">{{ designDesc[1] }}</p>
      <div class="d-flex">
        <a :href="designButt[1]" target="_blank">
          <button class="design__but">
            {{ designButt[0] }}
          </button>
        </a>
        <a :href="designButt[3]" target="_blank">
          <button class="design__but design__second-but">
            {{ designButt[2] }}
          </button>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["designDesc", "designButt"]),
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
.design {
  width: 100%;
  padding: 114px 0px 145px 0px;
  background: url(../../assets/image/third-section.jpg) no-repeat center;
  color: $white;
  background-size: cover;
  &__name {
    font-size: 48px;
    line-height: 56px;
  }
  &__description {
    font-size: 24px;
    line-height: 28px;
    max-width: 533px;
  }
  &__but {
    padding: 20px 60px;
    color: $white;
    border-radius: 4px;
    border: none;
    background: linear-gradient(180deg, #686c6f 0%, #373a3c 100%);
    &:first-child {
      margin-right: 15px;
    }
  }
  &__second-but {
    background: $light-green;
    padding: 20px 23px;
  }
  @media (max-width: $media-sm) {
    &__name {
      text-align: center;
      font-size: 37px;
      line-height: 44px;
    }
    &__description {
      text-align: center;
      font-size: 18px;
      line-height: 23px;
    }
    &__but,
    &__second-but {
      padding: 15px 19px;
    }
    & {
      padding-top: 60px;
      padding-bottom: 60px;
    }
  }
}
</style>
