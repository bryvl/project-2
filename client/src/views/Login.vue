<template>
  <div class="login">
    <div class="grid-container">
    <video autoplay muted loop id="good-boys">
        <source src="../../public/videos/goodboys.mp4" type="video/mp4">
    </video>
    
      <GoogleLogin/>
      <div class="landing-text">
        <h1>PlayDate</h1>
        <h3>The best way to bring people and pets together</h3>
      </div>
    </div>
    <!-- <div class="mobile">
      <Carousel/>
      <GoogleLogin/>
    </div> -->

  </div>
</template>

<script>
import GoogleLogin from '@/components/GoogleLogin';
import Carousel from "@/components/Carousel";

export default {
  name: "Login",
  data: function() {
    return {
      name: "",
      password: ""
    };
  },
  components: {
    GoogleLogin,
    Carousel
  },
  methods: {
    gohome: function() {
      this.$router.push("/home");
    },
    doLogin: function(data) {
      $router.push({name: 'profile', params: {data}});
      // localStorage.setItem("name", this.name);
      // localStorage.setItem("email", this.email);
    },
    onUserLoggedIn (googleUser) {
      console.log(googleUser);
      // not working...
    }
  }
};
</script>

<style lang="scss">
  $colors: (
    white-ish: #f4f4f4,
    red-ish: #C64242,
    pink-ish: #FF7474,
    black: #000
  );
  @function color($color-name) {
    @return map-get($colors, $color-name);
  };

  $queries: (
    phone: "only screen and (max-width : 426px)",
    tablet: "only screen and (max-width : 768px)",
    computer: "only screen and (max-width : 1440px)",
    4k:  "only screen and (min-width : 2559px)"
  );
  @function responsive($query-size) {
      @return map-get($queries, $query-size);
  };

  .login {
    max-height: 100vh;
  }
  .grid-container {
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 20px 0;
  font-size: 30px;
  display: grid;
  grid-template-areas: 'text login';
  grid-column-gap: 5px;
  overflow: hidden;
}
  .g-login{
    color: color(white-ish);
    grid-area: login;
    position: absolute;
    bottom: 50%;
    right: 100px;
  }
  .landing-text {
    grid-area: text;
    justify-content: center;
    color: color(white-ish);
    z-index: 2;
    position: absolute;
    top: 30%;
    left: 100px;
    text-shadow: color(black) 2px 2px 7px;
  }
  #good-boys {
    min-width: 100%;
    overflow: hidden;
    min-height: 100%;
    position: fixed;
    bottom: 0;
  }
  @mixin top-right{
    top: 30%;
    right: 12.5%;
  }
  @mixin bottom-right{
    bottom: 30%;
    right: 10%;
  }
    @mixin bottom-left{
    bottom: 30%;
    left: 10%;
  }
  // media queries
  @media #{responsive(phone)} {
    .landing-text {
      @include top-right;
      text-align: right;
    }
    .g-login {
      @include bottom-right;
    }
    #good-boys {
      right: -50px;
    }
    
  }
  @media #{responsive(tablet)} {
    .landing-text {
      @include top-right;
    }
    .g-login {
      @include bottom-left;
    }
  }
  @media #{responsive(4k)} {
    .g-login, .landing-text {
      font-size: 1.7rem;
    }
  }
  @media #{responsive(computer)} {
  }
</style>
