<template>
	<b-container>
		<header>
			<h1 id="titleHeader">Play Dates</h1>
			<b-button id="createEvent" variant="outline-primary" @click="showModal">+</b-button>
		</header>
		<b-container>
				<b-modal ref="my-modal" hide-footer title="Create Event">
						<EventCreateForm @updatefeed="updateFeed"></EventCreateForm>
				</b-modal>
				<hr>
				<EventFeed>
					<PlayDatePost v-for="playDate in playDates" :playDate="playDate" :key="playDate.id"/>
				</EventFeed>
		</b-container>
	</b-container>    
</template>
<script>
import axios from 'axios'
import EventCreateForm from "@/components/EventCreateForm.vue"
import EventFeed from "@/components/EventFeed.vue"
import PlayDatePost from "@/components/PlayDatePost.vue"
import GoogleLogin from '@/components/GoogleLogin.vue'

export default {
	name: "EventPage",
	components: {
		EventCreateForm,
		EventFeed,
		PlayDatePost
	},
	data: function(){
		return {
			playDates : [],
			errors : [],
		}
	},
	mounted: function(){
		this.fetchEvents();
	},
	methods: {
		updateFeed: function(playDate){
			this.playDates.unshift(playDate);
			console.log('hi');
			this.$refs['my-modal'].hide();
		},
		gohome: function() {
			this.$router.push("/")
		},
		showModal: function(){
			this.$refs['my-modal'].show()
		},
		hideModal: function(){
			this.$refs['my-modal'].hide()
			// need to emit event from EventCreateForm to call this method and close form on submit
		},
		toggleModal() {
			// We pass the ID of the button that we want to return focus to
			// when the modal has hidden
			this.$refs['my-modal'].toggle('#toggle-btn')
		},
		fetchEvents: function(){
				// var eventFeed = document.getElementById('eventFeed');
				// eventFeed.innerHTML  = '';
				axios.get('/api/events/')
				.then(function(events) {
						for(var i = 0; i < events.data.length; i++){
								var currentEvent = events.data[i];
								this.playDates.unshift(currentEvent);
						}
						console.log("Log for playDates[]: ");
						console.log(this.playDates);
				}.bind(this))
				.catch(e => {
						this.errors.push(e)
				})
		}
	}
}
</script>
<style>
	#titleHeader {
		display: inline-block;
	}
</style>
