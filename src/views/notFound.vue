<template>
  <div class="notFound">
    <div class="notFound__wrapper">
      <h1>404</h1>
      <h2>Error</h2>
      <p>
        The page was not found. It seems that it does not exist, or the link is
        incorrect.
      </p>
      <router-link to="/"><button>Back to home</button></router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/variables";
.notFound {
  background: $light-dark;
  width: 100%;
  height: 100vh;
  min-height: 600px;
  text-align: center;
  padding-top: 60px;
  h1 {
    font-size: 100px;
    color: $light-green;
  }
  h2 {
    font-size: 30px;
    color: $white;
  }
  p {
    font-size: 18px;
    color: $white;
  }
  button {
    padding: 8px 24px;
    margin: 8px;
    font-size: 16px;
    line-height: 21px;
    border-radius: 4px;
    outline: none;
    border: none;
    background: $light-green;
  }
  &__wrapper {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, 20%);
  }
}
</style>
