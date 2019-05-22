<template>
	<div id="eventFeed" class="container">

	</div>
</template>
<script>
import axios from 'axios'
export default {
		name: "EventFeed",
		data() {
			return {
				eventPosts : [],
				errors : []
			}
		},
		created() {
			axios.get('http://jsonplaceholder.typicode.com/posts')
			.then(response => {
				this.eventPosts = response.data
				console.log(this.eventPosts)
			})
			.catch(e => {
				this.errors.push(e)
			})
		}
		
}
</script>
<style>

</style>
