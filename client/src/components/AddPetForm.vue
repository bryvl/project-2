<template>
  <div>
    <b-button variant="primary" v-b-modal.modal-prevent-closing>Add a Pet!</b-button>
                  
    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Submit Your Pet Data"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
      hide-footer="true"
    >
      <b-form ref="form" @submit.stop.prevent="handleSubmit()">
        <b-form-group
          label="Pet's Name:"
          label-for="name-input"
          invalid-feedback="Name is required"
        >
          <b-form-input id="name-input" v-model="form.petName" required></b-form-input>
        </b-form-group>

        <b-form-group
          type="number"
          placeholder="Enter your pet's age in number"
          label="Pet's Age:"
          label-for="age-input"
          invalid-feedback="Age is required"
        >
          <b-form-input id="age-input" v-model="form.petAge" required></b-form-input>
        </b-form-group>

        <b-form-group
          required
          type="text"
          placeholder="Enter your pet's breed"
          label="Pet's Breed:"
          label-for="breed-input"
          invalid-feedback="Breed is required"
        >
          <b-form-input id="breed-input" v-model="form.petBreed" required></b-form-input>
        </b-form-group>

        <b-form-group
          required
          label="Pet's Gender:"
          label-for="sex-input"
          invalid-feedback="Gender is required"
        >
          <b-form-select id="sex-input" v-model="form.petSex" :options="sexes" required></b-form-select>
        </b-form-group>

        <b-form-group
          label="Extra Information:"
          label-for="info-input"
          type="textarea"
          rows="3"
          max-rows="6"
        >
          <b-form-input 
          id="info-input" 
          v-model="form.petInfo" 
          rows="3"
          max-rows="6">
          </b-form-input>
        </b-form-group>
      <b-button class="mt-3 mr-1" type="submit" @click="handleSubmit" variant="primary">Submit</b-button>
      <b-button class="mt-3" type="reset" variant="danger">Reset</b-button>
      </b-form>
      <b-card class="mt-3" header="Your Pet's Data:">
        <pre class="m-0"> 
          Name: {{ form.petName }}
          Age: {{ form.petAge }}
          Breed: {{ form.petBreed }}
          Gender: {{ form.petSex }}
          Extra Info: {{ form.petInfo }}
        </pre>
        </b-card>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AddPetFormModal",
  data() {
    return {
      form: {
        petName: "",
        petAge: "",
        petBreed: "",
        petSex: "",
        petInfo: ""
      },
      sexes: [{ text: "Select One" }, "Male", "Female"],
      show: true
    };
  },
  methods: {
    // checkFormValidity() {
    //   const valid = this.$refs.form.checkValidity()
    //   this.form.nameState = valid ? "valid" : "invalid"
    //   this.form.ageState = valid ? "valid" : "invalid"
    //   this.form.breedState = valid ? "valid" : "invalid"
    //   this.form.sexState = valid ? "valid" : "invalid"
    //   return valid;
    // },
    resetModal() {
      this.form.petName = "";
      this.form.petAge = "";
      this.form.petBreed = "";
      this.form.petSex = "",
      this.form.petInfo = "",
      this.show = false;
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    handleSubmit() {
      // Exit when the form isn't valid
      // if (!this.checkFormValidity()) {
      //   return;
      // }
      
      var self = this
      axios.get('api/user/' + this.form.userEmail)
      .then(function(response){
        var userId = response.data[0].id
        console.log(userId)
        // Push the data to the db
        axios.post("/api/pets/", {
            UserId: userId,
            petName: self.form.petName,
            petAge: self.form.petAge,
            petBreed: self.form.petBreed,
            petSex: self.form.petSex,
            petInfo: self.form.petInfo
        })
        .then(function(response) {
          console.log("This is data: " + JSON.stringify(response.data));
        })
        .catch(function(err) {
          console.log(err);
        });

        //Hide the modal manually
        this.$nextTick(() => {
          this.$refs.modal.hide();
        });
      })
    }
  }
}
</script>