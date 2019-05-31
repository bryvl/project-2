<template>
  <div class="app">
   <GmapMap
 v-bind:center="{lat: userLat, lng: userLng}"
  :zoom="15"
  map-type-id="terrain"
  style="width: 500px; height: 300px"
>
  <GmapMarker
    :key="index"
    v-for="(m, index) in markers"
    v-bind:position="m.position"
    :clickable="true"
    :draggable="false"
    @click="center=m.position"
    />

</GmapMap>
<div @mouseover="callGeocode()">MOUsEOVER</div>
<h1> {{ userLat }}  </h1>
<h1> {{ userLng }} </h1>

  </div>
</template>
<script>

// import mapfile from '../maps.js';
// var maps = require('../maps.js');
// import mapsapi from '../maps.js';
// let geocode = require('../maps.js');
// import geocode from "../maps.js";
import main from '../main.js';
var axios = require ('axios');
// var userLat;
// var userLng;
// console.log("will this lat work?" + maps.geocode());
var location="Raleigh, NC"
// console.log(.youThere);
export default {
    name: "GoogleMap",
     data: function() {
      return {
      userLat: 0,
      userLng: 0,
      //The center below should not have affect on map
      // center: { lat: 42.7796, lng:-78.63},
      mapTypeId: "terrain",
      markers: [
          //These markers are set to 0 so that when the api is requested, they will
          //be replaced by correct lat and long
        { position: { lat:0 , lng:0  } }
      ]
      
      
    };
  
  },
    methods:{
      callGeocode() {
        console.log("callgeocode is being called")
    console.log("geocode is being called");
    location = '1209 inlet place';
   
    axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
        params: {
            address:location,
            key:mapsKey;
        }
    })
    .then(function(response){
       //log response
    // console.log(response);
    
    // formatted address
    console.log(response.data.results[0].formatted_address);

    // lat
    // console.log(response.data.results[0].geometry.location.lat);
    this.userLat = response.data.results[0].geometry.location.lat;
    // console.log("The latitude is:" + userLat)

    // long
    // console.log(response.data.results[0].geometry.location.lng);
    this.userLng = response.data.results[0].geometry.location.lng;
    // console.log("The longitude is:" + userLng)


   console.log("userlat:" + this.userLat)
      // console.log("userlng:" + this.userLng)
}.bind(this))
.catch(function(error){
    // console.log("this didn't work", error);
}
);
      }
    },
    
  mounted() {
    // var userLat = this.callGeocode();
    // var userLng = this.callGeocode();
    this.callGeocode();
    
  },
  //The below line watches the variables userLat and userLng. if they change (which they
  //do when the api request happens... they will be replaced by geocoded address)
   watch: {userLat: function() {
     this.markers[0].position.lat = this.userLat;
   },
    userLng: function() {
         this.markers[0].position.lng = this.userLng;
    }
   
    },

    }
   ;
</script>

<style lang="scss" scoped>
.vue-map-container {
    margin:2% auto;
  height: 450px;
  max-width: 992px;
  width: 100%;
}
</style>