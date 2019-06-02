<template>
  <div class="app">
    <h3> {{ formattedAddress }}  </h3>
    <!-- <h3> {{playDate.eventDescription}}  </h3> -->
   <GmapMap
 v-bind:center="{lat: userLat, lng: userLng}"
  :zoom="15"
  map-type-id="terrain"
  style="width: 75%; height: 200px"
  small="12"
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
<!-- <div @mouseover="callGeocode()">MOUsEOVER</div> -->




  </div>
</template>
<script>
import PlayDatePost from "@/components/PlayDatePost.vue"
import EventPage from "@/views/Event.vue"

const keys = require("../../../keys/keys.js");
import main from '../main.js';
var axios = require ('axios');
// var userLat;
// var userLng;
// console.log("will this lat work?" + maps.geocode());
var location= "Raleigh, NC"
console.log(location);
export default {
    name: "GoogleMap",
    props: {playDate: Object},
  components: {
    PlayDatePost,
    EventPage
  },
     data: function() {

        // location = "Raleigh, NC";
    // other object attributes
  console.log("what we are aiming for:" + location)
      return {
      userLat: 0,
      userLng: 0,
    
      mapTypeId: "terrain",
      markers: [
      
        { position: { lat: 0 , lng: 0  } }
      ]
      
      
      
    };
  
  },
    methods:{
      callGeocode() {
        console.log("callgeocode is being called")
    console.log("geocode is being called");
    location = this.playDate.eventLocation;
   
    axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
        params: {
            address:location,
            key: 'AIzaSyDFRyu277w4V5p1mjxGseqqo1yRXqBRbBw'
        }
    })
    .then(function(response){
       //log response
   
    console.log(response)
    // formatted address
    console.log(response.data.results[0].formatted_address);

  
    this.userLat = response.data.results[0].geometry.location.lat;


  
    this.userLng = response.data.results[0].geometry.location.lng;
    // console.log("The longitude is:" + userLng)

    this.formattedAddress = response.data.results[0].formatted_address;

   console.log("userlat:" + this.userLat)
  
}.bind(this))
.catch(function(error){
 
}
);
      }
    },
    
  mounted() {
 
    this.callGeocode();
    
  },

   watch: {userLat: function() {
     this.markers[0].position.lat = this.userLat;
   },
    userLng: function() {
         this.markers[0].position.lng = this.userLng;
    },
    formattedAddress: function() {
   this.formattedAddress = formattedAddress;
    }

    }
}
</script>

<style lang="scss" scoped>
.vue-map-container {
    margin:2% auto;
  height: 450px;
  max-width: 992px;
  width: 100%;
}
</style>