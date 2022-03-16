<template>
  <section class="community">
    <div class="container">
      <div>
        <p v-for="item in description" :key="item" class="community__desc">
          {{ item }}
        </p>
      </div>
      <router-link to="/">
        <button class="community__back">To Back</button>
      </router-link>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["description"]),
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/variables";
.community {
  width: 100%;
  height: 100vh;
  padding-top: 100px;
  padding-bottom: 30px;
  background: $light-dark;
  color: $white;
  @media (max-height: 700px) {
    height: 100%;
  }
  &__desc {
    font-size: 18px;
    line-height: 30px;
    margin: 30px 0px;
  }
  &__back {
    border: 1px solid $light-green;
    background: none;
    padding: 8px 24px;
    color: $light-green;
    font-size: 16px;
    border-radius: 4px;
    display: block;
    margin: 0 auto;
  }
  @media (max-width: 993px) {
    & {
      padding-top: 80px;
    }
    &__desc {
      font-size: 15px;
      line-height: 20px;
      margin: 20px 0px;
    }
  }
}
</style>
