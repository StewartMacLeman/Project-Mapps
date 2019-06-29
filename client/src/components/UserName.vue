<template lang="html">
  <div class="">
    <label for="username">Please Enter Your Name: </label>
    <input v-model="username" type="text" name="username">
    <button v-on:click="handleClick" onclick="window.location.href = 'http://localhost:8080/#/country-select';" type="button" name="button">Confirm your name</button>
  </div>
</template>

<script>
import {eventBus} from '../main.js'

export default {
  data() {
    return {
      username: null
    }
  },
  methods: {
    handleClick(){
      eventBus.$emit('username-input', this.username)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
