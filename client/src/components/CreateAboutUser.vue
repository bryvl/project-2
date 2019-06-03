<template>
    <div class='form-container'>
        <b-form @reset="onReset" @submit.prevent="onSubmit()" v-if="show">

            <b-form-group
            id="input-group-1"
            label="Photo"
            label-for="input-1"
            description="Provide an updated URL link in the field above"
            >
            <b-form-input
                id="input-1"
                v-model="form.photo"
                type="text"
                required
                placeholder="Photo URL"
            ></b-form-input>
            </b-form-group>

            <b-form-textarea
            id="input-group-2"
            label="Bio"
            label-for="input-2"
            placeholder="Say something about yourself.."
            rows="4"
            max-rows="6"
            >
            </b-form-textarea>

            <b-form-group id="input-group-3">
            <b-form-checkbox-group v-model="form.date" id="checkboxes-3">
            <b-form-checkbox value=true>Are you open to having a date?</b-form-checkbox>
            </b-form-checkbox-group>
            </b-form-group>
            
            <b-button class="mt-3 mr-1" type="submit" variant="outline-primary">Submit</b-button>
            <b-button class="mt-3" type="reset" variant="outline-danger">Reset</b-button>
            
        </b-form>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name: 'CreateAboutUser',
        data() {
            return {
                // file: null,
                show: true,
                form: {
                    photo: '',
                    bio: '',
                    date: false
                }
            }
        },
        methods: {
            onSubmit() {
                
                if(this.form.date) {
                    this.form.date = true;
                }
                localStorage.setItem('image', this.form.photo)
                let email = localStorage.getItem('email');

                axios.put('/api/user/' + email, {
                    profilePic: this.form.photo,
                    description: this.form.bio,
                    singleReadyMingle: this.form.date,
                })
                .then(function(response){
                    console.log("This is data: " + JSON.stringify(response))
                }.bind(this))
                .catch(function(err){
                    console.log(err);
                })
                this.$emit('hideCreateInfo')
                
            },
            onReset(evt) {
                evt.preventDefault()
                // Reset our form values
                this.form.photo = ''
                this.form.bio = ''
                this.form.pet = ''
                this.form.date = false
                // Trick to reset/clear native browser form validation state
                this.show = false
                this.$nextTick(() => {
                this.show = true
                })
            }
        }
    }
</script>

<style>
    .form-container {
        max-width: 968px;
        text-align: center;
        margin: 0 auto;
    }
</style>