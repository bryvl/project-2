<template>
  <div class="feed">
      <h1>Test Feed Works</h1>
      <FeedCards/>
  </div>

</template>

<script>
import FeedCards from '@/components/FeedCards.vue'

export default {
  name: 'Feed',
  compnents: {
      FeedCards
  }
}

</script>

<style lang="scss" scoped>

</style>