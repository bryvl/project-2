<template>
    <div class="container">
        <header>
        <h1>Event Feed</h1>
        <b-button variant="danger" id="createEvent" @click="showModal">+</b-button>
        </header>
        <main class="container">
            <b-modal ref="my-modal" hide-footer title="Create Event">
                <!-- <div class="d-block text-center">
                        <h3>Hello From My Modal!</h3>
                </div> -->
                <EventCreateForm></EventCreateForm>
            </b-modal>
            <hr>
            <EventFeed></EventFeed>
        </main>
    </div>    
</template>
<script>

import EventCreateForm from "@/components/EventCreateForm.vue"
import EventFeed from "@/components/EventFeed.vue"
export default {
    name: "EventPage",
    components: {
        EventCreateForm,
        EventFeed
    },
    data: function(){
        return {

        }
    },
    methods: {
        gohome: function() {
            this.$router.push("/")
        },
        showModal: function(){
            this.$refs['my-modal'].show()
        },
        hideModal: function(){
            this.$refs['my-modal'].hide()
        },
        toggleModal() {
            // We pass the ID of the button that we want to return focus to
            // when the modal has hidden
            this.$refs['my-modal'].toggle('#toggle-btn')
      }
    }
}
</script>
<style>
    .container {
        margin: 0 auto;
        background-color: white;
    }
</style>
