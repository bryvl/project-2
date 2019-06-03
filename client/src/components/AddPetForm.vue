<template>
  <div>
    <b-button variant="primary" v-b-modal.modal-prevent-closing>Add a Pet!</b-button>
                  <!-- v-b-modal.modal-prevent-closing -->
    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Submit Your Pet Data"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
      hide-footer="true"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          :state="nameState"
          label="Pet's Name:"
          label-for="name-input"
          invalid-feedback="Name is required"
        >
          <b-form-input id="name-input" v-model="form.petName" :state="nameState" required></b-form-input>
        </b-form-group>

        <b-form-group
          :state="ageState"
          type="number"
          placeholder="Enter your pet's age in number"
          label="Pet's Age:"
          label-for="age-input"
          invalid-feedback="Age is required"
        >
          <b-form-input id="age-input" v-model="form.petAge" :state="ageState" required></b-form-input>
        </b-form-group>

        <b-form-group
          :state="breedState"
          type="text"
          placeholder="Enter your pet's breed"
          label="Pet's Breed:"
          label-for="breed-input"
          invalid-feedback="Breed is required"
        >
          <b-form-input id="breed-input" v-model="form.petBreed" :state="breedState" required></b-form-input>
        </b-form-group>

        <b-form-group
          :state="sexState"
          label="Pet's Gender:"
          label-for="sex-input"
          invalid-feedback="Gender is required"
        >
          <b-form-select id="sex-input" v-model="form.petSex" :options="sexes" required></b-form-select>
        </b-form-group>

        <b-form-group
          :state="infoState"
          label="Extra Information:"
          label-for="info-input"
          type="textarea"
          rows="3"
          max-rows="6"
        >
          <b-form-input 
          id="info-input" 
          v-model="form.petInfo" 
          :state="infoState"
          rows="3"
          max-rows="6">
          </b-form-input>
        </b-form-group>
      <b-button class="mt-3 mr-1" type="submit" variant="primary">Submit</b-button>
      <b-button class="mt-3" type="reset" variant="danger">Reset</b-button>

      </form>
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
      sexes: [{ text: "Select One" }, "Male", "Female", "Do not want to say"],
      show: true
    };
  },
  methods: {
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity()
      this.form.nameState = valid ? "valid" : "invalid"
      this.form.ageState = valid ? "valid" : "invalid"
      this.form.breedState = valid ? "valid" : "invalid"
      this.form.sexState = valid ? "valid" : "invalid"
      return valid;
    },
    resetModal() {
      this.form.petName = "";
      this.form.petAge = "";
      this.form.petBreed = "";
      this.form.petSex = "",
      this.form.petInfo = ""
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return;
      }
      // Push the data to the db
      axios
        .post("/api/pets/", {
          petName: this.form.petName,
          petAge: this.form.petAge,
          petBreed: this.form.petBreed,
          petSex: this.form.petSex,
          petInfo: this.form.petInfo
        })
        .then(
          function(response) {
            console.log("This is data: " + JSON.stringify(response.data));
          }.bind(this)
        )
        .catch(function(err) {
          console.log(err);
        });

      // Hide the modal manually
      // this.$nextTick(() => {
      //   this.$refs.modal.hide();
      // });
    }
  }
};
</script>