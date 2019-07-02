<template lang="html">

  <div class="difficulty-select">
    <label for="selectDifficulty">Choose a difficulty level</label>
    <select v-model="selectedCountryDifficulty"  style="text-align:center;" required>
      <option disabled value=""  style="text-align:center;">Select Difficulty</option>
      <option  :value="this.selectedCountry.easy"  style="text-align:center;">Easy</option>
      <option  :value="this.selectedCountry.medium"  style="text-align:center;">Medium</option>
      <option  :value="this.selectedCountry.hard"  style="text-align:center;">Hard</option>
    </select>
    <button v-if="selectedCountryDifficulty" v-on:click="handleClick" onclick="window.location.href = 'http://localhost:8080/#/quiz';" type="button" name="button">Start quiz!</button>
  </div>

</template>

<script>
import {eventBus} from '../main.js'
export default {
  data() {
    return {
      selectedCountry: null,
      selectedCountryDifficulty: null
    }
  },
  methods: {
    handleClick(){
      eventBus.$emit('difficulty-selected', this.selectedCountryDifficulty)
      eventBus.$emit('country-selected', this.selectedCountry)
    }
  },

  mounted() {
    eventBus.$on('country-selected', (country) =>{
      this.selectedCountry = country
    })
  }
}
</script>

<style lang="css" scoped>

.difficulty-select {
  display: flex;
  flex-direction: column;
  width: 75vw;
  align-items: center;
}

select {
  text-align-last:center;
 }

 button {
   height: 90px;
   width: 140px;
   color: white;
   background-color: #3870a0;
   font-size: 20px;
   border-radius: 15px
 }

</style>
