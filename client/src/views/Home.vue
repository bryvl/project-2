<template>
  <div class="home">
    <div class="content">
      <div class="slider">
        <div class="playdate">PLAYDATE</div>
        <div class="date">DATE</div>
        <div class="play">PLAY</div>
      </div>
    </div>
    <div class="landing">
      <div class="eventpage" @click="goeventpage">
      </div>
        <h2 class='event-text' @click="goeventpage">Events</h2>
      <div class="profile" @click="goprofile">
      </div>
        <h2 class='profile-text' @click="goprofile">Profile</h2>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'Home',
  mounted() {
    let email = localStorage.getItem('email');
    setTimeout(() => axios.get("/api/user/" + email, function(response) {
      })
      .then(function(response) {
        console.log(response);
        localStorage.setItem('image', response.data[0].profilePic)
        localStorage.setItem('id', response.data[0].id)
        localStorage.setItem('description', response.data[0].description)
        localStorage.setItem('singleReadyMingle', response.data[0].singleReadyMingle)
      }).catch(function(err) {
        console.log(err);
      }), 2000)
  },
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
// declaring colors
  $colors: (
    white-ish: #f4f4f4,
    red-ish: #C64242,
    pink-ish: #FF7474,
    black: #000
  );
  @function color($color-name) {
    @return map-get($colors, $color-name);
  }

  $queries: (
    phone: "only screen and (max-width : 425px)",
    tablet: "only screen and (max-width : 768px)",
    computer: "only screen and (max-width : 1440px)",
    4k:  "only screen and (max-width : 2560px)"
  );
  @function responsive($query-size) {
      @return map-get($queries, $query-size);
  }

  body {
        width: 100vw;
        height: 100vh;
        margin: 0 auto;
  }
  .landing {
    display: grid;
    grid-template-areas: "main sidebar";
    grid-column-gap: 5px;
    min-width: 80vw;
    position: relative;
    overflow: hidden;
  }
  .content {
    top: 0;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px;
    margin: 0 auto;
  }
  .eventpage {
    grid-area: sidebar;
    border: solid 3px #000;
    background-image: url('../../public/images/animals-bite-blurred-background-955470.jpg');
    background-position: center;
    background-size: cover;
    min-height: 100vh;
    position: relative;
    border-radius: 5px;
  }
  .event-text {
    background-color: #FFF;
    color: #000;
    position: absolute;
    text-align: center;
    top: 65%;
    width: 30vh;
    right: 0%;
    border-radius: 5px;
      @media #{responsive(phone)} {
        font-size: 1.3rem;
        top: 50%;
        width: 45%;
        padding: 60px 0;
      }
  }
  .profile {
    grid-area: main;
    border: solid 3px #000;
    background-image: url('../../public/images/adorable-animal-breed-1805164.jpg');
    background-position: center;
    background-size: cover;
    min-height: 100vh;
    border-radius: 5px;
  }
  .profile-text {
    background-color: #FFF;
    color: #000;
    position: absolute;
    text-align: center;
    top: 65%;
    width: 30vh;
    left: 0%;
    border-radius: 5px;
      @media #{responsive(phone)} {
        font-size: 1.3rem;
        top: 50%;
        width: 45%;
        padding: 60px 0;
        left: 0%;
      }
  }

  $filter: blur(6px);

  .profile:hover, .eventpage:hover {
    filter: $filter;
    color: #FFF;
    transition: 400ms;
  }
  .profile-text:hover,.event-text:hover {
    background-color: color(red-ish);
    background-size: cover;
    // font-size: 4rem;
    transition: 500ms;
    padding: 47px;
    height: 50%;
    // top: 30%;
    animation: switch 2.5s  infinite;
  }
@keyframes switch {
  0% {background-color: color(white-ish);}
  25% {background-color: color(pink-ish);}
  50% {background-color: color(red-ish);}
  75% {background-color: color(pink-ish);}
  100% {background-color: color(white-ish);}
}
  .slider {
    height: 50px;
    padding-left:15px;
    overflow: hidden;
  }
  @keyframes slide {
    0% {margin-top:-300px;}
    5% {margin-top:-200px;}  /* 5% delay */
    33% {margin-top:-200px;}
    38% {margin-top:-100px;} /* 5% delay */
    66% {margin-top:-100px;}
    71% {margin-top:0px;} /* 5% delay */
    100% {margin-top:0px;}
  }
  .play, .date, .playdate {
    color: map-get($colors, white-ish);
    height: 50px;
    margin-bottom: 50px;
    padding: 2px 15px;
    text-align: center;
    box-sizing: border-box;
    font-size: 40px;
    border-radius: 5px;
    font-weight: 600;
  }
  .playdate {
    background-color: color(red-ish);
    animation: slide 5s linear infinite;
  }
  .date {
    background-color: color(pink-ish);
  }
  .play {
    background-color: color(black);
  }
</style>