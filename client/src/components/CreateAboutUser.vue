<template>
    <div class='form-container'>
        <p>Add photo (or change the current one)</p>
        <b-form @submit="onSubmit" @reset="onReset" >
            <b-form-file v-model="file" class="mt-3" plain></b-form-file>
            <div class="mt-3">Selected file: {{ file ? file.name : '' }}</div>
            <b-form-group
            id="input-group-1"
            label="Email address:"
            label-for="input-1"
            description="We'll never share your email with anyone else."
            >
            <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                required
                placeholder="Enter email"
            ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
            <b-form-input
                id="input-2"
                v-model="form.name"
                required
                placeholder="Enter name"
            ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label="Your Pet:" label-for="input-3">
            <b-form-input
                id="input-3"
                v-model="form.pet"
                required
                placeholder="Enter Pet Name"
            ></b-form-input>
            </b-form-group>


            <b-form-group id="input-group-4" label="User Bio:" label-for="input-4">
            <b-form-input
                id="input-4"
                v-model="form.bio"
                required
                placeholder="Say something about yourself.."
            ></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>
        <b-card class="mt-3" header="Your Current Info">
        <pre class="m-0">{{ form }}</pre>
        </b-card>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name: 'CreateAboutUser',
        data() {
            return {
                file: null,
                form: {
                    email: '',
                    name: '',
                    pet: '',
                    bio: ''
                }
            }
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault()
                alert(JSON.stringify(this.form))
            },
            onReset(evt) {
                evt.preventDefault()
                // Reset our form values
                this.form.email = ''
                this.form.name = ''
                this.form.pet = ''
                this.form.bio = ''
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