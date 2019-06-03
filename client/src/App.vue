<template>
  <div id="app">
      <div v-if="$router.currentRoute.name!='login' &&
      $router.currentRoute.name!='home'" id="nav">
        <router-link to="/home">Home</router-link> |
        <router-link to="/eventpage">Events</router-link> |
        <router-link to="/profile">Profile</router-link>
      </div>
    <!-- add more router links as features needed -->
    <router-view/>
    <div v-if="$router.currentRoute.name!='login'">
      <button id='signout-btn' v-on:click='signOut'>Sign Out</button>
      </div>
    <div>
      <footer v-if="$router.currentRoute.name!='home'">&copy;2019 PlayDate</footer>
    </div>
  </div>
</template>

<script>
import GoogleLogin from '@/components/GoogleLogin';
import GoogleAuth from 'vue-google-auth'
import Vue from 'vue'
Vue.use(GoogleAuth, { clientID: '50452222215-9ed386i1o1r9jmrptk8in5rnrbbcoh04.apps.googleusercontent.com' })
Vue.googleAuth().load()

export default {
  name: "app",
  data() {
    return {
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
  methods: {
    signOut() {
      var auth2 = gapi.auth2.getAuthInstance();
      auth2.signOut().then(function() {
        setTimeout(3000);
        console.log("User signed out.");
      });
      this.user.id = "";
      this.user.name = "";
      this.user.image = "";
      this.user.email = "";
      this.user.idToken = "";
      this.signedIn = false;
      localStorage.clear();
      setTimeout(() => this.$router.push('/'), 1500);
      
    },
  }
}
</script>

<style lang="scss" scoped>
#app {
  // font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
body {
  text-align: center;
  margin: 0 auto;
  background-color: #ccc;
}
.container {
  width: 968px;
}
#signout-btn {
  background-color: red;
  color: #FFF;
  padding: 2px 4px;
  border-radius: 5px;
  font-weight: 700;
  position:fixed;
  right:10px;
  top:5px;
  
}
footer {
    position: sticky;
    bottom: 0;
    left: 45vw;
    margin: 10px 0;
    border-top: solid 1px #ccc;
}

</style>
