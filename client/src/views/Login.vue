<template>
  <div class="login">
    <Carousel/>
    <GoogleLogin/>
    <form @submit.prevent="doLogin">
      <p>
        <label for="name-input">
          <span>User Name: </span>
          <input v-model="name" type="text" id="name-input" name="name-input">
        </label>
      </p>
      <p>
        <label for="password-input">
          <span>Password: </span>
          <input v-model="password" type="text" id="password-input" name="password-input">
        </label>
      </p>
        <div class="signup"> Don't have an account? Sign up 
          <router-link to="/signup">here</router-link>
        </div>
      <button @click="gohome" type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import GoogleLogin from '@/components/GoogleLogin';
import Carousel from "@/components/Carousel";

export default {
  name: "Login",
  data: function() {
    return {
      name: "",
      password: ""
    };
  },
  components: {
    GoogleLogin,
    Carousel
  },
  methods: {
    gohome: function() {
      this.$router.push("/home");
    },
    doLogin: function() {
      localStorage.setItem("name", this.name);
      localStorage.setItem("email", this.email);
    },
    onUserLoggedIn (googleUser) {
      console.log(googleUser);
    }
  }
};
</script>

<style lang="scss">
  #app {
    background-color: #fff;
  }

  #nav a {
    text-decoration: none;
    color: #2c3e50;
  }
</style>
