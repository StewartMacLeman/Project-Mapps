<template lang="html">
  <div class="">
    <select v-model="selectedCountry">
      <option disabled value="">Select Country</option>
      <option v-for="(country, index) in countries" :index="index" :value="country">{{country.name}}</option>
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
</style>
