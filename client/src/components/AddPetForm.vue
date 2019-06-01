
<template>
  <div>
    <h3>Add your pet's information here!</h3>
    <b-form @submit.prevent="AddPetForm" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Pet's Name:"
        label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.name"
          type="text"
          required
          placeholder="Enter your pet's name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Pet's Age:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.age"
          type="number"
          required
          placeholder="Enter your pet's age"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="petBreed:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.petBreed"
          required
          placeholder="petBreed"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Pet Gender:" label-for="input-4">
        <b-form-select
          id="input-4"
          v-model="form.petSex"
          :options="genders"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-5" label="Extra Information:" label-for="input-5">
        <b-form-input
          id="input-5"
          type="textarea"
          v-model="form.petInfo"
          placeholder="Interesting facts about your pet..."
        ></b-form-input>
      </b-form-group>

      <b-button class="mr-1" type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
import axios from 'axios'
  export default {
    data() {
      return {
        form: {
          name: '',
          age: '',
          petBreed: '',
          petSex: '',
          petInfo: ''
        },
        genders: [{ text: 'Male' }, 'Female', 'Do not want to say'],
        show: true
      }
    },
    methods: {
      AddPetForm(evt) {
        evt.preventDefault()
        // alert(JSON.stringify(this.form))
        axios.post('/api/pets/', {
          name: this.form.name,
          age: this.form.age,
          petBreed: this.form.petBreed,
          gender: this.form.petSex,
          petInfo: this.form.petInfo
      })
      .then(function(response){
        // this.$emit('updatefeed', response.data);
        console.log("This is data: " + JSON.stringify(response.data));
      }.bind(this))
      .catch(function(err){
        console.log(err);
      })
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.name = '',
        this.form.age = '',
        this.form.petBreed = '',
        this.form.petSex = '',
        this.form.petInfo=''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>