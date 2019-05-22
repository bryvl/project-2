<template>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
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
          v-model="form.eventAttendLimit"
          required
          placeholder="Enter max number of people to attend"
        ></b-form-input>
        <b-form-invalid-feedback id="input-live-feedback">
          Events must have at least 2 people attending, including you
        </b-form-invalid-feedback>        
      </b-form-group>
      <b-row class="my-1" v-for="thing in form.types" :key="thing">
        <b-col sm="3">
          <label :for="`type-${thing}`">Event {{ thing }}:</label>
        </b-col>
        <b-col sm="5">
          <!-- How do we connect a v-model to form.types.date and form.types.time?? -->
          <!-- v-model="form.types[thing]" ????? -->
          <b-form-input :id="`type-${thing}`" :type="thing"></b-form-input>
        </b-col>
      </b-row>
      <b-form-select class="mt-3" v-model="form.selectedPet" :options="form.petOptions"></b-form-select>
      <b-form-textarea
        class="mt-3"
        id="textarea"
        v-model="form.eventDescription"
        placeholder="Describe your playdate..."
        rows="3"
        max-rows="6"
      ></b-form-textarea>      
      <!-- <b-form-file accept="image/jpeg, image/png" placeholder="No Image Chosen"></b-form-file> -->
      <b-button class="mt-3 mr-1" type="submit" variant="primary">Submit</b-button>
      <b-button class="mt-3" type="reset" variant="danger">Reset</b-button>
    </b-form>
</template>

<script>
import axios from 'axios'
export default {
  name: "EventCreateForm",
  computed: {
    attendanceLimitState(){
      return this.form.eventAttendLimit > 0 && null ? true : false 
    }
  },
  data() {
    return {
      form: {
        eventName: '',
        eventAttendLimit: null,
        isDate: false,
        types: [
          'date',
          'time'
        ],
        selectedPet: null,
        petOptions: [
          // This pet options b-form-select should be generated based on the amount of pets the given user has
          {value: null, text: 'Select a companion to join you!'},
          {value: 'a', text: 'first user pet'},
          {value: 'b', text: 'second user pet'},
          {value: 'c', text: 'third user pet'}
        ],
        eventDescription: ''
      },
      domain: '',
      show: true
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      console.log(JSON.stringify(this.form))
      this.$http.post('/eventpage/', 
        {
          domain: this.domain
      }), function(data, status, request) {

      }
    },
    onReset(evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.eventName = ''
      this.form.eventAttendLimit = ''
      this.form.isDate = false
      this.form.selectedPet = null
      this.form.eventDescription = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>