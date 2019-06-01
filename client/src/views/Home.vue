<template>
  <div class="home">
    <div class="eventpage" @click="goeventpage">
      <h2>Events</h2>
    </div>
    <div class="circle">
      <!-- <font-awesome-icon icon="arrows-alt-h"/> -->
      <!-- {{ Arrows }} -->
    </div>
    <div class="profile" @click="goprofile">
      <h2>Profile</h2>
    </div>
  </div>
</template>

<script>
// import Arrows from '../main.js';
export default {
  name: 'Home',
  methods: {
    goeventpage: function() {
      this.$router.push("/eventpage");
    },
    goprofile: function() {
      this.$router.push("/profile");
    }
  }
}

</script>

<style lang="scss" scoped>
  .home {
    margin: 0 auto;
    display: grid;
    grid-template-areas: "main sidebar";
    grid-column-gap: 5px;
    height: 100vh;
    max-width: 80vw;
  }
  .eventpage {
    grid-area: sidebar;
    border: solid 3px #000;
    background-image: url('../../public/images/animals-bite-blurred-background-955470.jpg');
    background-position: center;
    background-size: cover;
  }
  .profile {
    grid-area: main;
    border: solid 3px #000;
    background-image: url('../../public/images/adorable-animal-breed-1805164.jpg');
    background-position: center;
    background-size: cover;
  }
  .profile:hover, .eventpage:hover {
    background-color: #000;
    color: #FFF;
    transition: 400ms;
  }
</style>