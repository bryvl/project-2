<template>
  <div class="playDate">
    <div v-if="loading" class="loading">
      Loading...
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <div v-if="playDate" class="content">
      <h2>{{ playDate.eventName}}</h2>
      <p>{{ playDate.eventDescription }}</p>
    </div>
  </div>  
</template>
<script>
import axios from 'axios'
import EventPage from '@/views/PlayDate.vue'
import EventFeed from "@/components/EventFeed.vue"
import PlayDatePost from "@/components/PlayDatePost.vue"
import GoogleLogin from '@/components/GoogleLogin.vue'

export default {
	name: "PlayDate",
	props: {playDate: Object},
	components: {
		EventPage,
		EventFeed,
		PlayDatePost
	},
	data: function(){
		return {
			playDate: null,
			loading: false,
			errors : []
		}
	},
	created: function(){
	},
	methods: {
		
	}
}
</script>
<style>
</style>