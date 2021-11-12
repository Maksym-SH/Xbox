<template>
  <section class="community">
    <div class="container">
      <div>
        <p v-for="item in description" :key="item" class="community__desc">
          {{ item }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      description: [
        `We've built an Xbox community for people like you - gamers from all walks of life and from every corner of the world who want the same thing: a place to play and play. With your help, the Xbox community will always be a fun and safe place for everyone.`,
        `While the Code of Conduct section of the Microsoft Services Agreement applies to all Microsoft products, there are so many ways to interact with other users in the Xbox community that some additional clarification should be provided.`,
        `To that end, we've formulated the following Xbox Community Standards. These standards should be seen as a roadmap through which you can make your own contributions to this incredible community that spans the world. Remember: Xbox is your community. We all bring something unique to it, and that uniqueness is worth protecting.`,
        `Whether you are a beginner or have been playing for decades, we want you to be the guardians of this place, so that you protect each other, even when you compete. After all, when everyone can play, we all benefit from it.`,
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/variables";
.community {
  width: 100%;
  height: 100vh;
  padding-top: 100px;
  background: $light-dark;
  color: $white;
  &__desc {
    font-size: 18px;
    line-height: 30px;
    margin: 30px 0px;
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
  @media (max-width: $media-sm) {
    & {
      padding-top: 70px;
    }
    &__desc {
      font-size: 12px;
      line-height: 18px;
      margin: 20px 0px;
    }
  }
}
</style>
