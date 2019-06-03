<template>
    <b-form @reset="onReset" @submit.prevent="addToFeed(playDate)" v-if="show">
        <b-form-group id="input-group-1" label="Event Name:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.eventName"
            required
            placeholder="Enter event name"
          ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-4">
        <b-form-checkbox-group v-model="form.isDate" id="checkboxes-4">
          <b-form-checkbox value="isDate">Is this a Date? (or date-lite?)</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>
      <b-form-group id="input-group-2" label="Attendee Limit:" label-for="input-2">
        <b-form-input
          :state="attendanceLimitState"
          type="number"
          id="input-2"
          v-model="form.attendanceLimit"
          required
          placeholder="Enter max number of people to attend"
        ></b-form-input>
        <b-form-invalid-feedback id="input-live-feedback">
          Events must have at least 2 people attending, including you
        </b-form-invalid-feedback>        
      </b-form-group>

      <b-form-group>
      
      <datetime id="input-group-3" label="Date:" label-for="input-3"
          type="datetime"
          v-model="form.eventDate"
          required
          use12-hour
          :minute-step="15"
          placeholder="   When is this happening?">
        </datetime>
            
      </b-form-group>

      <b-form-textarea
        class="mt-3"
        id="textarea"
        v-model="form.eventDescription"
        placeholder="Describe your playdate..."
        rows="3"
        required
        max-rows="6"
      ></b-form-textarea>      
      <b-form-textarea
        class="mt-3"
        required
        id="textarea"
        v-model="form.eventLocation"
        placeholder="Where is this happening?"></b-form-textarea>      
      <b-button class="mt-3 mr-1" type="submit" variant="outline-primary">Submit</b-button>
      <b-button class="mt-3" type="reset" variant="outline-danger">Reset</b-button>
    </b-form>
</template>

<script>
import axios from 'axios'
import GoogleLogin from '@/components/GoogleLogin.vue'

export default {
  name: "EventCreateForm",
  components: {
    GoogleLogin
  },
  computed: {
    attendanceLimitState() {
      return this.form.attendanceLimit > 0 ? true : false;
    }
  },
  props: ['playDate'],
  data() {
    return {
      form: {
        userId: '',
        userEmail: '',
        eventName: '',
        attendanceLimit: '',
        isDate: false,
        // eventLocation will need to be added axios post request below
        eventLocation: "",
        eventDate: "",
        // types: [
        //   'date',
        //   'time'
        // ],
        // selectedPet: null,
        // petOptions: [
        //   // This pet options b-form-select should be generated based on the amount of pets the given user has
        //   {value: null, text: 'Select a companion to join you!'},
        //   {value: 'a', text: 'first user pet'},
        //   {value: 'b', text: 'second user pet'},
        //   {value: 'c', text: 'third user pet'}
        // ],
        eventDescription: ""
      },
      domain: "",
      show: true
    };
  },
  methods: {
    addToFeed(playDate) {
      if(this.form.isDate) {
        this.form.isDate = true;
      }

      console.log("Form", JSON.stringify(this.form));
      
      var self = this
      this.form.userEmail = localStorage.getItem('email')
      this.getUser(this.form.email);
      
      axios.post('/api/events/', {
        UserId: self.userId,
        eventName: self.form.eventName,
        attendanceLimit: self.form.attendanceLimit,
        isDate: self.form.isDate,
        eventDescription: self.form.eventDescription,
        eventLocation: self.form.eventLocation,
        eventDate: self.form.eventDate
      })
      .then(function(response){
        self.$emit('updatefeed', response.data);
        console.log("This is data: " + JSON.stringify(response.data));
      })
      .catch(function(err){
        console.log(err);
      })
    },
    getUser(email){
      axios.get('api/user/' + email)
      .then(function(response){
        self.userId = response.data[0].id
        console.log(userId)
      })
      .catch(function(err){
        console.log(err);
      })
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.eventName = "";
      this.form.attendanceLimit = "";
      this.form.isDate = false;
      // this.form.selectedPet = null
      this.form.eventDescription = ''
      this.form.eventLocation = ''
      this.form.eventDate = false;
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>

<style>
input.vdatetime-input {
    width: 100%;
}

.vdatetime-popup__header {
    padding: 18px 30px;
    background: #C64242;
    color: #fff;
    font-size: 32px;
}
</style>