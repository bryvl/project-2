<template>
  <div id="app">
      <div v-if="$router.currentRoute.name!='login' &&
      $router.currentRoute.name!='home'" id="nav">
        <router-link to="/home">Home</router-link> |
        <router-link to="/eventpage">Events</router-link> |
        <router-link to="/profile">Profile</router-link> |
        <router-link id='signout-btn' to="/">Sign Out</router-link>
        
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
}
</style>
