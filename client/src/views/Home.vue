<template>
  <div class="container">
          <h1>Woofer</h1>
  <Carousel/>
  <GoogleMap/>

  </div>

</template>

<script>
import Carousel from '@/components/Carousel.vue';
import GoogleMap from '@/components/GoogleMap.vue';

export default {
  name: 'Home',
  components: {
    Carousel,
    GoogleMap
  }

}

</script>

<style>

</style>
