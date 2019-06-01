<template>

<div class="playdatepage">
  <h1 class="title">"Event Name"</h1>
  <h4>"Event Description"</h4>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <GoogleMap/>


  <div class="users">
   
    <h2>Who Will Be Here?</h2>
   
    <div class="pets">
    <h2>Pets</h2>
     <h3> {{userName}} </h3>
    </div>
    <div class="people">
    <h2>People</h2>
   <h3> {{userName}} </h3>
    </div>



  </div>
</div>


</template>

<script>

import GoogleMap from "@/components/GoogleMap";

var eventName = "Event Name"

export default {
  name: "Playdatepage",
  components: {
    GoogleMap
  },
  methods: {
    goeventpage: function() {
      this.$router.push("/eventpage");
    },
    goprofile: function() {
      this.$router.push("/profile");
    }
  },
   data() {
    return {
      status: "not_accepted"
    };
  }
}

</script>

<style lang="scss" scoped>

.title{
  margin-top:5%;
}

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


  .playdatepage {
width:75%;
margin: 0px auto;

  }

.users {
border-top: black 1px solid;
margin-top:1%;

}

.pets {
  width:50%;
  float:right;
  height:200px;
 
}

.people {
  width:50%;
  height:200px;
  //  border-right: solid 1px black;
}


</style>