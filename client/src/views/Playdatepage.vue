<template>
  <div>
  <h1 class="title">{{playDate.eventName}}</h1>
  <h5 class="event-date"> {{ playDate.eventDate | moment('timezone', 'America/New_York', 'dddd, MMMM Do, YYYY, h:mm:ss a') }}</h5>
  <p class="from-now">{{ playDate.eventDate | moment("from", "now") }}</p>
  <p class="event-description"> {{playDate.eventDescription}}</p>
  <GoogleMap :playDate="playDate"/>

  <div class="users">
   
    <h2>Who Will Be Here?</h2>
   
    <div class="pets">
    <h2>Pets</h2>
    </div>
    <div class="people">
    <h2>People</h2>
    </div>



  </div> 
</div>
</template>

<script>
import axios from 'axios'
import VueMoment from 'vue-moment'
import GoogleMap from "@/components/GoogleMap.vue";
import PlayDatePost from "@/components/PlayDatePost.vue"
import main from '../main.js';
export default {
  name: "playdatepage",
  props: {playDate: Object},
   components: {
     GoogleMap,
     PlayDatePost
  },
  methods: {
    goeventpage: function() {
      this.$router.push("/eventpage");
    },
    goprofile: function() {
      this.$router.push("/profile");
    }
  },
   data() {
    return {
      user: {},
      status: "not_accepted"
    };
  },
  tellTime(time) {
      console.log(this.$moment(time).format(' mm:ss'))
  },
  created(){
      // axios.get('api/user/' + playDate.UserId)
      // .then(function(response){
      //   console.log(response.data[0])
      // })
  }

}


</script>

<style lang="scss" scoped>

.title{
  margin-top:2%;
}

  .home {
    margin: 0 auto;
    display: grid;
    grid-template-areas: "main sidebar";
    grid-column-gap: 5px;
    max-width: 968px;
    height: 95vh;
  }
  .eventpage {
    grid-area: sidebar;
    border: solid 3px #000;
    
    
  }
  .profile {
    grid-area: main;
    border: solid 3px #000;
  }
  .profile:hover, .eventpage:hover {
    background-color: #000;
    color: #FFF;
    transition: 400ms;
  }


  .playdatepage {
width:75%;
margin: 0px auto;

  }

.users {
border-top: black 1px solid;
margin-top:1%;

}

.pets {
  width:50%;
  float:right;
  height:200px;
 
}

.people {
  width:50%;
  height:200px;
  //  border-right: solid 1px black;
}

.event-description{
  width:50%;
  margin: 5px auto;
}

.from-now {
  font-style:italic;
}

</style>