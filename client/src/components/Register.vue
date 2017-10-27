<template>
  <div class="register">
    <h1>Register</h1>
    
    <div><input type="email" name="email" v-model="email" placeholder="email address"/></div>
    <div><input type="password" name="password" v-model="password" placeholder="password"/></div>
    <button @click="register">Register</button>

  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'Register',
  data () {
    return {
      email: 'abc',
      password: ''
    }
  },
  methods: {
    async register () {
      await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
    }
  },
  watch: {
    email (value) {
      console.log('email has changed', value)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
