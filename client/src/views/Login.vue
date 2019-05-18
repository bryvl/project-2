<template>
  <div class="login">
        <form @submit.prevent="doLogin">
            <p>
              <label for="name-input">
                  <span>User Name:  </span>
                  <input v-model="name" type="text" id="name-input" name="name-input">
              </label>
            </p>
            <p>
              <label for="email-input">
                  <span>Email:  </span>
                  <input v-model="email" type="text" id="email-input" name="email-input">
              </label>
            </p>
            <button @click='gohome' type="submit">
                Login
            </button>
        </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
    data: function() {
      return {
          name: '',
          email: ''
      }
  },
  methods: {
    gohome: function() {
      this.$router.push('/');
    },
    doLogin: function() {
            localStorage.setItem('name', this.name);
            localStorage.setItem('email', this.email);
        }
  }
}
</script>
