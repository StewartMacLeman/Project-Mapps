<template lang="html">
  <div class="country-select">
    <img src="/assets/images/owl.png" alt="Ollie the owl" height="250px" width="220px">
    <label for="selectCountry" class="label"><h4>"Well it's nice to meet you {{username}}. My superpower is I know everything there is to know about geography... I'm pretty darn smart. I've built some quizzes and I bet you can't get all the right answers. If you think I'm wrong go ahead and pick a country."</h4></label>
    <select required v-model="selectedCountry"  style="text-align:center;" class="select">
      <option disabled>Select Country</option>
      <option v-for="(country, index) in countries" :index="index" :value="country"  style="text-align:center;">{{country.name.toUpperCase()}}</option>
    </select>
    <button v-if="selectedCountry" v-on:click="handleClick" onclick="window.location.href = 'http://localhost:8080/#/difficulty';" type="button" name="button">Choose this country</button>
  </div>

</template>

<script>
import {eventBus} from '../main.js'
export default {
  name: 'country-select',
  data(){
    return {
      selectedCountry: null,
      username: null
    }
  },
  mounted() {
    eventBus.$on('username-input', (username) =>{
      this.username = username
    })
  },
  props: ['countries', 'username'],
  methods: {
    handleClick(){
      eventBus.$emit('country-selected', this.selectedCountry)
    }
  }
}
</script>

<style lang="css" scoped>

.country-select {
  display: flex;
  flex-direction: column;
  width: auto;
  align-items: center;
}

.greeting{
  width: 50vw;
}

.label {
  width: 75vw;
}

select {
  text-align-last: center;
  width: 25vw;
  font-size: 20px;
  margin: 2vh 0 2vh;
  color: #3870a0;
 }

 h4 {
   width: 70vw;
   margin: 2vh 1.5vw 2vh 1.5vw;
 }

 button {
   height: 70px;
   width: 250px;
   color: white;
   background-color: #3870a0;
   font-size: 20px;
   border-radius: 15px;
   border-color: #3870a0;
 }

 button:hover {
   background-color: white;
   color: #3870a0;
 }

</style>
