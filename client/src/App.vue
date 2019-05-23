<template>
  <div id="app">
    <div id="nav">
<<<<<<< HEAD
      <router-link to="/">Home</router-link>|
      <router-link to="/login">Login</router-link>|
      <router-link to="/eventpage">Events</router-link>
=======
      <div v-if="$router.currentRoute.name!='login'" id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/">Login</router-link>
>>>>>>> master
      <!-- add more router links as features needed -->
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  text-align: center;
  margin: 0 auto;
  background-color: #ccc;
}
.container {
  width: 968px;
}
</style>
