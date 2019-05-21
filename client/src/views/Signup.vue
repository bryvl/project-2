<template>
  <div class="signup">
    <GoogleLogin/>
    <form @submit.prevent="doLogin">
        <p>
            <label for="name-input">
                <span>Create Username: </span>
                <input v-model="name" type="text" id="name-input" name="name-input">
            </label>
        </p>
        <p>
            <label for="email-input">
                <span>Email: </span>
                <input v-model="email" type="text" id="email-input" name="email-input">
            </label>
        </p>
        <p>
            <label for="password-input">
                <span>Create password: </span>
                <input v-model="password" type="text" id="password-input" name="password-input">
            </label>
        </p>
        <div class="login"> Have an account? Log in
            <router-link to="/">here</router-link>
        </div>
      <button @click="gohome" type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import GoogleLogin from '@/components/GoogleLogin';

export default {
  name: "Login",
  data: function() {
    return {
      name: "",
      email: "",
      password: ""
    };
  },
  components: {
    GoogleLogin
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
      console.log(googleUser)
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
