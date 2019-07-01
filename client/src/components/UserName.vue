<template lang="html">
  <div class="">
  <div class="user-name">
    <label for="username">Please Enter Your Name: </label>
    <input v-model="username" type="text" name="username" style="text-align:center;">
    <button v-on:click="handleClick" onclick="window.location.href = 'http://localhost:8080/#/country-select';" type="button" name="button">Confirm your name</button>
  </div>
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

.user-name {
  display: flex;
  flex-direction: column;
  width: 75vw;
  align-items: center;
}
</style>
