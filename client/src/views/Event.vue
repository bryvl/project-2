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
                <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-button>
            </b-modal>
            <hr>
            <div id="feed" class="container">Actually it's here...

            </div>
        </main>
    </div>    
</template>
<script>

import { EventCreateModal } from "@/components/EventCreateModal.vue";
export default {
    name: "EventFeed",
    data: function(){
        return {

        }
    },
    components: {
        EventCreateModal
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
