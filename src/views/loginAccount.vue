<template>
  <section class="sign">
    <div class="container">
      <div class="sign__wrapper">
        <h2 class="sign__name">
          {{ accountData[0] }}
        </h2>
        <form action="">
          <input
            type="email"
            @input="callNewEmail($event.target.value)"
            placeholder="User"
            class="sign__inputs"
            required
          />
          <input
            type="password"
            @input="callNewPassword($event.target.value)"
            placeholder="Password"
            class="sign__inputs"
            required
          />
          <input
            type="password"
            @input="callNewRepeatPassword($event.target.value)"
            placeholder="Repeat password"
            v-if="routeName !== 'sign'"
            class="sign__inputs"
            required
          />
          <input
            type="button"
            :value="accountData[1]"
            class="sign__butt"
            @click="callCheckoutData()"
            :disabled="buttonDisabled"
          />
        </form>
        <a href="/registration" class="sign__links" v-if="isnew">
          If you are here for the first time, click here
        </a>
        <router-link to="/" v-if="signCompleted" class="sign__links">
          You have successfully {{ routeName }}, you can go back by clicking
          here
        </router-link>
        <p v-if="isWrong" class="sign__links">
          Invalid mail format or passwords do not match, please try again.
        </p>
      </div>
    </div>
  </section>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      routeName: this.$route.name,
    };
  },
  computed: {
    ...mapState(["email", "password", "repeatPassword"]),
    ...mapGetters([
      "accountData",
      "createdAccount",
      "signCompleted",
      "isnew",
      "massSigned",
      "isWrong",
      "accountData",
      "getEmail",
      "getPassword",
      "getRepeatPassword",
      "buttonDisabled",
    ]),
  },
  methods: {
    ...mapActions([
      "callCheckoutData",
      "callTypePage",
      "callNewEmail",
      "callNewPassword",
      "callNewRepeatPassword",
    ]),
  },
  mounted() {
    this.callTypePage(this.routeName);
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/variables";
.sign {
  width: 100%;
  padding-top: 60px;
  height: 90vh;
  min-height: 500px;
  background: $light-dark;
  position: relative;
  &__wrapper {
    border: 1px solid $light-green;
    background: $white;
    padding: 40px;
    max-width: 300px;
    color: $black;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 10%);
    border-radius: 4px;
  }
  &__name {
    font-size: 25px;
    margin-bottom: 30px;
    line-height: 0px;
    text-align: center;
  }
  &__inputs {
    margin: 25px 0px;
    padding: 10px;
    display: block;
    font-size: 17px;
    border: 1px solid $light-green;
    background: $white;
    color: $black;
    &::-webkit-input-placeholder {
      padding-left: 10px;
    }
  }
  &__butt {
    border: 1px solid $light-green;
    padding: 8px 24px;
    font-size: 16px;
    line-height: 21px;
    border-radius: 4px;
    outline: none;
    width: 100%;
  }
  &__links {
    display: block;
    text-align: center;
    font-size: 16px;
    margin-top: 15px;
    margin-bottom: 0px;
  }
}
</style>
