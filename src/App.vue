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
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    navbar,
    footers,
  },
  computed: mapGetters(["issm", "ismd"]),
  methods: mapActions(["callCheckWidth"]),
  mounted() {
    this.callCheckWidth(window.innerWidth);
    window.onresize = () => {
      this.callCheckWidth(window.innerWidth);
    };
  },
};
</script>
<style lang="scss">
a {
  text-decoration: none !important;
}
</style>
