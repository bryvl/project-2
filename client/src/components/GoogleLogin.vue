<template>
  <div>
    <div
      class="g-signin2"
      id="g-login"
      :params="params"
      data-onsuccess="currentUser"
      ref="signinBtn"
      data-theme="dark"
      data-longtitle="true"
      data-width="300"
      data-height="50"
      
    >Login</div>
    <div><button @click="signOut">Logout of Google</button></div>
  </div>
  
</template>

<script>
export default {
  name: "GoogleLogin",
  data() {
    return {
      params: {
        client_id:
          "50452222215-9ed386i1o1r9jmrptk8in5rnrbbcoh04.apps.googleusercontent.com"
      },
      gId: "",
      gName: "",
      gImage: "",
      gEmail: "",
      gIdToken: ""

    };
  },
  mounted() {
    gapi.signin2.render("g-login", {
      // this is the button "id"
      onsuccess: this.currentUser
    });
  },
  methods: {
    currentUser(googleUser) {
      var profile = googleUser.getBasicProfile();
      // console.log("ID: " + profile.getId()); // Do not send to your backend! Use an ID token instead.
      // console.log("Name: " + profile.getName());
      // console.log("Image URL: " + profile.getImageUrl());
      // console.log("Email: " + profile.getEmail()); // This is null if the 'email' scope is not present.
      // console.log("ID Token: " + id_token);
      var id_token = googleUser.getAuthResponse().id_token;
      this.gId = profile.getId();
      this.gName = profile.getName();
      this.gImage = profile.getImageUrl();
      this.gEmail = profile.getEmail();
      this.gIdToken = id_token;
    },
    signOut() {
      var auth2 = gapi.auth2.getAuthInstance();
      auth2.signOut().then(function() {
      console.log("User signed out.");
      });
    }
  }
};
</script>

<style lang="scss">

</style>
