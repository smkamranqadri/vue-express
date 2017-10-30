<template>
  <div class="recover">
    <h1>Recover Password</h1>

    <div><input type="email" name="email" v-model="email" placeholder="email address"/></div>
    <button @click="recover">Recover</button>

  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'Recover',
  data () {
    return {
      email: ''
    }
  },
  methods: {
    async recover () {
      await AuthenticationService.recover({
        email: this.email
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
