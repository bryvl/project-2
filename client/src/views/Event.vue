<template>
    <div class="container">
        <header>
        <h1>Event Feed</h1>
        <b-button variant="danger" id="createEvent" @click="makeEvent">+</b-button>
        </header>
        <main class="container">
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
            this.$router.push("/");
        },
        makeEvent: function(){
            console.log('clicked');
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
