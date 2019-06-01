<template>
  <div class="profile">
    <b-jumbotron>
      <img src="https://via.placeholder.com/150/09f/fff.png%20C/O%20https://placeholder.com/">
      <h1 id="user-info">(User name goes here)</h1>
      <b-button id="createInfo" variant="outline-primary" @click="createInfo">Update Your Info</b-button>
    </b-jumbotron>
    <b-container>
      <b-modal ref="create-info" hide-footer title="Create Info">
        <CreateAboutUser></CreateAboutUser>
      </b-modal>
    </b-container>
    <hr>
    <h3>Your Events</h3>
    <ul id="user-events">
      <li v-for="items in EventFeed"></li>
    </ul>
    <div>
      <b-card no-body class="overflow-hidden" style="max-width: 100vw; max-height: 30vh;">
        <b-row no-gutters>
          <b-col md="6">
            User Picture Here
            <b-card-img src="https://picsum.photos/400/400/?image=20" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body title="Event Title Goes Here">
              <b-card-text>This is where we will add event information.</b-card-text>
            </b-card-body>
            <b-form-checkbox
              id="checkbox-1"
              v-model="status"
              name="checkbox-1"
              value="Attending"
              unchecked-value="Not attending"
            >Attending</b-form-checkbox>
            <b-form-checkbox
              id="checkbox-2"
              v-model="status"
              name="checkbox-2"
              value="Not attending"
              unchecked-value="Not attending"
            >Not Attending</b-form-checkbox>

            <div>
              Attendance:
              <strong>{{ status }}</strong>
            </div>
          </b-col>
        </b-row>
      </b-card>
    </div>
    <div class="mt-5">
      <AddPetForm/>
    </div>
  </div>
</template>

<script>
import ProfileStyle from "../../public/profilestyle.scss";
import CreateAboutUser from "@/components/CreateAboutUser.vue";
import EventFeed from "@/components/EventFeed.vue";
import AddPetForm from "@/components/AddPetForm.vue";
import axios from "axios";
export default {
  name: "Profile",
  components: {
    ProfileStyle,
    CreateAboutUser,
    EventFeed,
    AddPetForm
  },
  methods: {
    createInfo: function() {
      this.$refs["create-info"].show();
    },
    hideCreateInfo: function() {
      this.$refs["create-info"].hide();
    },
    toggleCreateInfo: function() {
      this.$refs["create-info"].toggle("#toggle-btn");
    }
  },
  data() {
    return {
      status: "not_accepted"
    };
  }
};
</script>

<style>
footer {
  position: fixed;
  bottom: 0;
  left: 45vw;
  margin-top: 10px;
  padding-top: 10px;
  border-top: solid 1px #ddd;
}
</style>