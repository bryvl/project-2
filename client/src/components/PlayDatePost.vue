<template>
	<b-card no-body class="overflow-hidden" style="max-width: 540px;">
		<b-row no-gutters>
			<b-col md="6">
				<b-card-img src="https://placedog.net/150/200" height="300" class="rounded-0"></b-card-img>
			</b-col>
			<b-col md="4">
				<b-card-body :title="playDate.eventName">
					<b-card-text>
									DateId: {{playDate.id}} <br> Ppl Limit: {{playDate.attendanceLimit}} <br> Attending: {{playDate.attending}} <br> Date? {{playDate.isDate}} <br> Bitch, Where: {{playDate.eventLocation}}
					</b-card-text>
					</b-card-body>
				</b-col>
				<b-col md="2">
					<b-button variant="outline-primary"><router-link :to="{name: 'playdatepage', params: {playDate}}"><small>Go To</small></router-link></b-button>
					<b-button class="attend-btn" variant="outline-primary" @click="attendIncrease"><small>Attend</small></b-button>
				</b-col>
		</b-row>
	</b-card>
</template>
<script>
import router from 'vue-router'
import axios from 'axios'
export default {
	name: "PlayDatePost",
	props: {playDate: Object},
	data() {
		return {

		}
	},
	methods: {
		attendIncrease: function(){
			if(this.playDate.attending === this.playDate.attendanceLimit) {
				return
			}
			this.playDate.attending++;
		},
		goToEventPage: function(id){
		
		// console.log(id);
		// 	axios.get('/api/events/:id')
		// 	.then(function(response) {
		// 		console.log(response.data);
		// 		router.push({ name: 'event', params: { id: id } })
		// 	}.bind(this))
		// 	.catch(e => {
		// 		this.errors.push(e);
		// 	})
		}
	}
}
</script>
<style>
	b-card-text {
		text-align: left;
	}


.attend-btn {
    margin-top: 5%;
}

</style>
