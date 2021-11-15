<template>
  <div id="app">
    <navbar :ismd="ismd" />
    <main>
      <router-view></router-view>
    </main>
    <footers :issm="issm"></footers>
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
    return {
      ismd: false,
      issm: false,
    };
  },
  methods: {
    checkWidth() {
      window.innerWidth <= 980 ? (this.ismd = true) : (this.ismd = false);
      window.innerWidth <= 720 ? (this.issm = true) : (this.issm = false);
    },
  },
  mounted() {
    this.checkWidth();
    window.onresize = () => {
      this.checkWidth();
    };
  },
};
</script>
<style lang="scss">
a {
  text-decoration: none !important;
}
</style>
