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
      <!-- <b-row class="my-1" v-for="thing in form.types" :key="thing"> -->
        <!-- <b-col sm="3">
          <label :for="`type-${thing}`">Event {{ thing }}:</label>
        </b-col>
        <b-col sm="5"> -->
          <!-- How do we connect a v-model to form.types.date and form.types.time?? -->
          <!-- v-model="form.types[thing]" ????? -->
          <!-- <b-form-input :id="`type-${thing}`" :type="thing"></b-form-input>
        </b-col>
      </b-row> -->
      <!-- <b-form-select class="mt-3" v-model="form.selectedPet" :options="form.petOptions"></b-form-select> -->
      <b-form-textarea
        class="mt-3"
        id="textarea"
        v-model="form.eventDescription"
        placeholder="Describe your playdate..."
        rows="3"
        max-rows="6"
      ></b-form-textarea>      
      <b-form-textarea
        class="mt-3"
        id="textarea"
        v-model="form.eventLocation"
        placeholder="Where is this happening?"></b-form-textarea>      
      <!-- <b-form-file accept="image/jpeg, image/png" placeholder="No Image Chosen"></b-form-file> -->
      <!-- NOTE: Below button is not refreshing page anymore. I don't want that necessarily, but  -->
      <!-- that was the only way the feed was live updating. -->
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
    attendanceLimitState(){
      return this.form.attendanceLimit > 0 ? true : false 
    }
  },
  props: ['playDate'],
  data() {
    return {
      form: {
        userName: '',
        eventName: '',
        attendanceLimit: '',
        isDate: false,
        // eventLocation will need to be added axios post request below
        eventLocation: '',
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
        eventDescription: ''
      },
      domain: '',
      show: true
    }
  },
  methods: {
    addToFeed(playDate) {

      console.log(JSON.stringify(this.form));
      axios.post('/api/events/', {
        userName: '',
        eventName: this.form.eventName,
        attendanceLimit: this.form.attendanceLimit,
        isDate: this.form.isDate,
        eventDescription: this.form.eventDescription,
        eventLocation: this.form.eventLocation,
      })
      .then(function(response){
        this.$emit('updatefeed', response.data);
        console.log("This is data: " + JSON.stringify(response.data));
      }.bind(this))
      .catch(function(err){
        console.log(err);
      })
    },
    onReset(evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.eventName = ''
      this.form.attendanceLimit = ''
      this.form.isDate = false
      // this.form.selectedPet = null
      this.form.eventDescription = ''
      this.form.eventLocation = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>