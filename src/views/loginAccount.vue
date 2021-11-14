<template>
  <section class="sign">
    <div class="container">
      <div class="sign__wrapper">
        <h2 class="sign__name">
          {{ AccountData[0] }}
        </h2>
        <form action="">
          <input
            type="email"
            v-model="email"
            placeholder="User"
            class="sign__inputs"
            required
          />
          <input
            type="password"
            v-model="password"
            placeholder="Password"
            class="sign__inputs"
            required
          />
          <input
            type="button"
            :value="AccountData[1]"
            class="sign__butt"
            @click="CheckoutData()"
          />
        </form>
        <a href="/registration" class="sign__links" v-if="isnew"
          >If you are here for the first time, click here</a
        >
        <router-link to="/" v-if="signCompleted" class="sign__links"
          >You have successfully {{ this.$route.name }}, you can go back by
          clicking here</router-link
        >
      </div>
    </div>
  </section>
</template>

<script>
import { bus } from "@/main";
export default {
  data() {
    return {
      AccountData: [{}],
      createdAccount: false,
      email: "",
      password: "",
      signCompleted: false,
      isnew: true,
    };
  },
  watch: {
    email() {
      this.isnew = false;
    },
    password() {
      this.isnew = false;
    },
  },
  mounted() {
    if (this.$route.name === "sign") {
      this.AccountData.unshift("Sign to account", "Sign");
    } else {
      this.AccountData.unshift("Registration", "Registration");
      this.isnew = false;
    }
    this.createdAccount = true;
  },
  methods: {
    CheckoutData() {
      if (
        this.email.indexOf("@") != -1 &&
        this.email.indexOf(".") != -1 &&
        this.password.length >= 8
      ) {
        this.signCompleted = true;
        (this.email = ""), (this.password = "");
        bus.$emit("signSuccess", this.signCompleted);
      }
    },
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
    transform: translate(-50%, 20%);
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
  }
}
</style>
