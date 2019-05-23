<template>
  <div class="home">
    <div class="feed" @click="gofeed">
      Feed
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
    gofeed: function() {
      this.$router.push("/feed");
    },
    goprofile: function() {
      this.$router.push("/profile");
    }
  }
}

</script>

<style lang="scss" scoped>

</style>