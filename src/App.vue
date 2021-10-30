<template>
  <div id="app">
    <navbar />
    <main>
      <router-view></router-view>
    </main>
    <footers></footers>
  </div>
</template>

<script>
import navbar from "./components/construction/header.vue";
import footers from "./components/construction/footer.vue";
export default {
  components: {
    navbar,
    footers,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss"></style>
