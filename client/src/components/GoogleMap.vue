<template>
  <div class="app">
   <GmapMap
  :center="{lat:40, lng:-100}"
  :zoom="3"
  map-type-id="terrain"
  style="width: 500px; height: 300px"
>
  <GmapMarker
    :key="index"
    v-for="(m, index) in markers"
    :position="m.position"
    :clickable="true"
    :draggable="false"
    @click="center=m.position"
    />

</GmapMap>
  </div>
</template>
<script>


export default {
    name: "GoogleMap",
  data() {
    return {
      //Below the center needs to be userLat and userLong
      center: { lat: -3.350235, lng: 111.995865 },
      mapTypeId: "terrain",
      markers: [
          //THESE MARKERS CAN BE CHANGED TO THE POSITION OF EVENT
          //HOWEVER, WE NEED TO GEOCODE THEM TO ADDRESS FORM
          //markers below also have to be userLat and userLong so it represents event.
        { position: { lat: 35.7796, lng: -78.63 } },
        { position: { lat: -6.9127778, lng: 107.6205556 } }
      ]
      
      
    };
    
  }
};
</script>

<style lang="scss" scoped>
.vue-map-container {
    margin:2% auto;
  height: 450px;
  max-width: 992px;
  width: 100%;
}
</style>