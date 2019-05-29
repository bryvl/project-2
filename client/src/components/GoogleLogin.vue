<template>
  <div>
    <div
      class="g-signin2"
      id="g-signin2"
      :params="params"
      data-onsuccess="this.currentUser"
      ref="signinBtn"
      data-theme="dark"
      data-longtitle="true"
      data-width="300"
      data-height="50"
      
      
    >Login</div>
    <div v-show="signedIn">
      <button id="g-signout" @click="signOut">Logout of Google</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "GoogleLogin",
  data() {
    return {
      params: {
        client_id:
          "50452222215-9ed386i1o1r9jmrptk8in5rnrbbcoh04.apps.googleusercontent.com"
      },
      gUser: {
        gId: "",
        gName: "",
        gImage: "",
        gEmail: "",
        gIdToken: ""
      },
      signedIn: false
    };
  },
  mounted() {
    gapi.signin2.render("g-signin2", {
      // this is the button "id"
      onsuccess: this.currentUser, width: 300, height: 50, longtitle: true, theme: 'dark'
    });
  },

  methods: {
    currentUser(googleUser) {
      var profile = googleUser.getBasicProfile();
      var id_token = googleUser.getAuthResponse().id_token;
      // console.log(googleUser);
      console.log("ID: " + profile.getId()); // Do not send to your backend! Use an ID token instead.
      console.log("Name: " + profile.getName());
      console.log("Image URL: " + profile.getImageUrl());
      console.log("Email: " + profile.getEmail()); // This is null if the 'email' scope is not present.
      console.log("ID Token: " + id_token);
      this.gUser.gId = profile.getId();
      this.gUser.gName = profile.getName();
      this.gUser.gImage = profile.getImageUrl();
      this.gUser.gEmail = profile.getEmail();
      this.gUser.gIdToken = id_token;
      this.signedIn = true;
      axios.post("/api/user/", {
        name: this.gUser.gName,
        email: this.gUser.gEmail,
        profilePic: this.gUser.gImage
      });
    },
    signOut() {
      var auth2 = gapi.auth2.getAuthInstance();
      auth2.signOut().then(function() {
        console.log("User signed out.");
      });
        this.gUser.gId = '';
        this.gUser.gName = '';
        this.gUser.gImage = '';
        this.gUser.gEmail = '';
        this.gUser.gIdToken = '';
        this.signedIn = false;
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
