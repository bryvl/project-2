<template>
  <div class="g-login">
    <div
      class="g-signin2"
      id="g-signin2"
      :params="params"
      ref="signinBtn"
      data-theme="dark"
      data-longtitle="true"
      data-width="300"
      data-height="50"
    >Login</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "GoogleLogin",
  data() {
    return {
      params: {
        client_id:
          "50452222215-9ed386i1o1r9jmrptk8in5rnrbbcoh04.apps.googleusercontent.com"
      },
      user: {
        id: "",
        name: "",
        image: "",
        email: "",
        idToken: ""
      },
      signedIn: false
    };
  },
  mounted() {
    window.gapi.load("auth2", () => {
      gapi.signin2.render("g-signin2", {
        // this is the button "id"
        onsuccess: this.currentUser,
        width: 300,
        height: 50,
        longtitle: true,
        theme: "dark"
      });
    });
  },

  methods: {
    currentUser(googleUser) {
      var profile = googleUser.getBasicProfile();
      var id_token = googleUser.getAuthResponse().id_token;
      console.log("Name: " + profile.getName());
      console.log("Email: " + profile.getEmail()); 
      this.user.id = profile.getId();
      this.user.name = profile.getName();
      this.user.image = profile.getImageUrl();
      this.user.email = profile.getEmail();
      this.user.idToken = id_token;
      localStorage.setItem('email', this.user.email)
      localStorage.setItem('name', this.user.name)
      axios.post("/api/user/", {
        name: this.user.name,
        email: this.user.email,
        profilePic: this.user.image
      })
      .then(function(data) {
        console.log(data);
      })
      .catch(function(err) {
        console.log(err);
      })
      this.signedIn = true;
      this.$router.push('home')
    }
    
    
  }
};
</script>

<style lang="scss">
#g-signin2 {
  margin-top: 15px;
  display: inline-block;
  vertical-align: middle;
  margin-bottom: 15px;
}

#g-signout {
  margin-top: 15px;
  display: inline-block;
  vertical-align: middle;
  margin-bottom: 15px;
}
</style>
