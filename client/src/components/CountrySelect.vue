<template lang="html">
  <div class="country-select">
    <label for="selectCountry">Choose a country to learn about</label>
    <select v-model="selectedCountry"  style="text-align:center;">
      <option disabled value=""  style="text-align:center;">Select Country</option>
      <option v-for="(country, index) in countries" :index="index" :value="country"  style="text-align:center;">{{country.name}}</option>
    </select>
    <button v-on:click="handleClick" onclick="window.location.href = 'http://localhost:8080/#/quiz';" type="button" name="button">Choose this country</button>
  </div>

</template>

<script>
import {eventBus} from '../main.js'
export default {
  name: 'country-select',
  data(){
    return {
      selectedCountry: null
    }
  },
  props: ['countries'],
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
  width: 75vw;
  align-items: center;
}

select { 
  text-align-last:center;
 }

</style>
