<template>
  <div>
    <form @submit.prevent="collectPetForm">
      <input type="text" placeholder="pet name" v-model="pet.name">
      <input type="number" placeholder="age in number" v-model="pet.age">
      <input type="text" placeholder="breed" v-model="pet.breed">
      <input type="text" placeholder="pet sex" v-model="pet.sex">
      <input type="text" placeholder="pet info" v-model="pet.info">

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AddPetForm",
  data() {
    return {
      pet: {
        name: "",
        age: "",
        breed: "",
        sex: "",
        info: ""
        // userId: null
      }
    };
  },

  //make an API get request for current logged in user
  //insert that userID into the pet object
  //make an API post for adding the pet
  methods: {
    collectPetForm() {
      console.log(
        "Pet Name: " + this.pet.name,
        "Pet Age: " + this.pet.age,
        "Pet's Breed:" + this.pet.breed);

      axios
        .post("/api/pets", {
          name: this.pet.name,
          age: this.pet.age,
          petBreed: this.pet.breed,
          petSex: this.pet.sex,
          petInfo: this.pet.info,
          UserId: 1
        })
        .then(function(data) {
          console.log(data);
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  }
};
</script>


<style>
</style>
