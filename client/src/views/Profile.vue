<template>
  <div class="profile">
    <b-jumbotron>
      <img src="https://placedog.net/150/150">
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
      <!-- <li v-for="items in EventFeed"></li> -->
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
import CreateAboutUser from "@/components/CreateAboutUser.vue";
import EventFeed from "@/components/EventFeed.vue";
import AddPetForm from "@/components/AddPetForm.vue";
import axios from "axios";
export default {
  name: "Profile",
  components: {
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

<style lang='scss' scoped>
  $colors: (
    white-ish: #f4f4f4,
    red-ish: #C64242,
    pink-ish: #FF7474,
    black: #000
  );
  @function color($color-name) {
    @return map-get($colors, $color-name);
  };

  $queries: (
    phone: "only screen and (max-width : 425px)",
    tablet: "only screen and (max-width : 768px)",
    computer: "only screen and (max-width : 1440px)",
    4k:  "only screen and (min-width : 2559px)"
  );
  @function responsive($query-size) {
      @return map-get($queries, $query-size);
  };

  .jumbotron {
    margin: 0 auto;
    position: relative;
    background-color: color(pink-ish);
  }
  img {
    border-radius: 50%;
  }
  #user-info {
    color: color(white-ish);
    text-shadow: color(red-ish) 2px 2px 5px;
  }
  .btn {
    border: 3px solid color(white-ish);
    color: color(white-ish);
    font-weight: bold;
  }
  .btn:hover {
    border: 3px solid color(pink-ish);
    color: color(pink-ish);
    background-color: color(white-ish);
    text-shadow: color(pink-ish) 1.2px 1.2px 15px;
  }

footer {
  position: fixed;
  bottom: 0;
  left: 45vw;
  margin-top: 10px;
  padding-top: 10px;
  border-top: solid 1px #ddd;
}
</style>