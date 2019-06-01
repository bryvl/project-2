<template>
  <div class="signup">
    <form @submit.prevent="doLogin">
      <p>
        <label for="name-input">
          <span>Create Username:</span>
          <input
            v-model="input.name"
            placeholder="Name (Required)"
            type="name"
            id="name-input"
            name="name-input"
          >
        </label>
      </p>
      <p>
        <label for="email-input">
          <span>Email:</span>
          <input
            v-model="input.email"
            placeholder="Email (Required)"
            type="email"
            id="email-input"
            name="email-input"
          >
        </label>
      </p>
      <p>
        <label for="password-input">
          <span>Create password:</span>
          <input
            v-model="input.password"
            placeholder="Password (Required)"
            type="password"
            id="password-input"
            name="password-input"
          >
        </label>
      </p>
      <p>
        <label for="picture-input">
          <span>Picture:</span>
          <input
            v-model="input.picture"
            placeholder="Picture URL (Optional)"
            type="text"
            id="picture-input"
            name="picture-input"
          >
        </label>
      </p>
      <p>
        <label for="description-input">
          <span>Description:</span>
          <textarea
            v-model="input.description"
            placeholder="Description (Optional)"
            type="text"
            id="description-input"
            name="description-input"
            rows="5"
          ></textarea>
        </label>
      </p>
      <p>
        <label for="single-input">
          <span>Single Ready to Mingle? </span>
          <input
            v-model="input.singleReadyMingle"
            type="checkbox"
            id="single-input"
            true-value="true"
            false-value="false"
          >
        </label>
      </p>
      <button type="button" v-on:click="signUp()">Sign Up</button>
      <p>
      <div class="login">
        Have an account? Log in
        <router-link to="/">here</router-link>
      </div>
      
      
      
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Signup",
  data() {
    return {
      input: {
        name: "",
        email: "",
        password: "",
        picture: "",
        description: "",
        singleReadyMingle: false
      }
    };
  },
  methods: {
    signUp() {
      if (
        this.input.name != "" &&
        this.input.email != "" &&
        this.input.password != ""
      ) {
        axios.post("/api/user/", {
          name: this.input.name,
          email: this.input.email,
          password: this.input.password,
          profilePic: this.input.picture,
          description: this.input.description,
          singleReadyMingle: this.input.singleReadyMingle
        });
        this.input.name = "";
        this.input.email = "";
        this.input.password = "";
        this.input.picture = "";
        this.input.description = "";
        this.input.singleReadyMingle = false;
      } else {
        console.log("A name, email, and password must be present");
      }
    }
  }
  // gohome: function() {
  //   this.$router.push("/home");
  // },
  // doLogin: function() {
  //   localStorage.setItem("name", this.name);
  //   localStorage.setItem("email", this.email);
  // },
  // onUserLoggedIn (googleUser) {
  //   console.log(googleUser)
  // }
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

.signup {
  margin-top: 50px;
}
</style>
