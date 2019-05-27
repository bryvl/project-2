<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="Woofer"
        text="Welcome to Woofer. The new way of bringing people and pets together"
        img-src="https://images.unsplash.com/photo-1506993708131-b0bf29d16b76?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
      ></b-carousel-slide>
      <!--Second pic needs higher-->
      <b-carousel-slide
        caption="Happy Pets"
        text="Give your pet the opportuntiy to make a special friend and create wonderful memories doing what pets love to do"
        img-src="https://images.unsplash.com/photo-1506838219826-ef01160e12c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1338&q=80"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="Happy us"
        text="Find community, a new best friend, or a new love thanks to your pet being awesome!"
        img-src="https://images.unsplash.com/photo-1526363269865-60998e11d82d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
      ></b-carousel-slide>

     
     
    </b-carousel>

    </p>
  </div>
</template>

<script>
import { CarouselPlugin } from 'bootstrap-vue/es/components'
// Vue.use(CarouselPlugin)
  export default {
    name: "Carousel",
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>

<style>
div#g-login {
    margin-left: 50%;
}

div#carousel-1 {
    width: 50%;
    margin: 0px auto;
}


</style>