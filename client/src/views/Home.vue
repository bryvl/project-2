<template>
  <div class="home">
    <div class="eventpage" @click="goeventpage">
      Events
    </div>
    <div class="profile" @click="goprofile">
      Profile
    </div>
  </div>

</template>

<script>
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
    max-width: 968px;
    height: 95vh;
  }
  .eventpage {
    grid-area: sidebar;
    border: solid 3px #000;
    
    
  }
  .profile {
    grid-area: main;
    border: solid 3px #000;
  }
  .profile:hover, .eventpage:hover {
    background-color: #000;
    color: #FFF;
    transition: 400ms;
  }
</style>