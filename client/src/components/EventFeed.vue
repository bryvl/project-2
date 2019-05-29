<template>
	<b-container id="eventFeed" class="container">
		<slot></slot>
	</b-container>
</template>
<script>
// import axios from 'axios'
export default {
		name: "EventFeed",
		data() {
			return {
				// eventPosts : [],
				// errors : []
			}
		},
		mounted() {
			// this.fetchEvents();
		},
		methods: {
			// fetchEvents: function(){
			// 	var eventFeed = document.getElementById('eventFeed');
			// 	eventFeed.innerHTML  = '';
			// 	axios.get('/api/events/')
			// 	.then(function(events) {
			// 		console.log(events.data)
					
			// 		// this.eventPosts = events.data;
			// 		for(var i = 0; i < events.data.length; i++){
			// 			var eventPost = document.createElement("b-card");
			// 			eventPost.innerHTML = events.data[i].eventName + ': ' + events.data[i].eventDescription;
			// 			eventFeed.appendChild(eventPost);
			// 		}
			// 		// console.log('This is events.data: ' + events.data);
			// 		// console.log('This is eventPosts: ' + this.eventPosts);
			// 	}.bind(this))
			// 	.catch(e => {
			// 		this.errors.push(e)
			// 	})
			// }
		}
}
</script>
<style>

</style>
