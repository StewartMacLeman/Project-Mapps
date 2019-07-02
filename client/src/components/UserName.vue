<template lang="html">
  <div class="">
  <div class="user-name">
    <label for="username" class="label">Hi there! I'm Oliver the Owl, but my friends call me Ollie. What's your Name? </label>
    <input v-model="username" type="text" name="username" style="text-align:center;" required>
    <button v-if="username" v-on:click="handleClick" onclick="window.location.href = 'http://localhost:8080/#/country-select';" type="button" name="button">Confirm your name</button>
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
.label {
  width: 70%;
  margin: 40px;
}

.user-name {
  display: flex;
  flex-direction: column;
  width: 75vw;
  align-items: center;
}

button {
  height: 60px;
  width: 200px;
  color: white;
  background-color: #3870a0;
  font-size: 20px;
  border-radius: 15px;
  border-color: #3870a0;
}



input {
  height: 40px;
  width: 200px;
  font-size: 20px
}
</style>
