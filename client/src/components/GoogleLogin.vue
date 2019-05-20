<template>
  <div class="g-login">
    <div
      class="g-signin2"
      data-onsuccess="onSignIn"
      data-theme="dark"
      data-longtitle="true"
      data-width="300"
      data-height="50"
    >button</div>
  </div>
</template>

<script>
export default {
  mounted() {
    window.gapi.load("auth2", () => {
      const auth2 = window.gapi.auth2.init({
        client_id:
          "50452222215-9ed386i1o1r9jmrptk8in5rnrbbcoh04.apps.googleusercontent.com"
      });
      auth2.attachClickHandler(
        this.$refs.signinBtn,
        {},
        googleUser => {
          this.$emit("done", googleUser);
        },
        error => console.log(error)
      );
    });
  },

  methods: {
    onUserLoggedIn(googleUser) {
      const profile = googleUser.getBasicProfile();
      console.log(googleUser);
    }
  }
};
</script>


<style lang="scss">
.g-login {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
}
</style>
