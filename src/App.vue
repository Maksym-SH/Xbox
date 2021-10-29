<template>
  <div id="app">
    <navbar />
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import navbar from "./components/construction/header.vue";
export default {
  components: {
    navbar,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss"></style>
