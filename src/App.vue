<template>
  <div id="app">
    <navbar />
    <main>
      <header-section />
    </main>
  </div>
</template>

<script>
import navbar from "./components/construction/header.vue";
import headerSection from "./views/headerSection.vue";
export default {
  components: {
    navbar,
    "header-section": headerSection,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss"></style>
