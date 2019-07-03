<template lang="html">

  <div class="difficulty-select">
    <img src="/assets/images/owl.png" alt="Ollie the owl" height="250px" width="220px">
      <h3 id="greeting">"{{this.selectedCountry.greeting}}</h3>
    <label for="selectDifficulty" class="label"><h3>Okay {{username}} we're going to learn about {{this.selectedCountry.name}}. But I warn you, my easy tests are hard and my hard tests are... diabolical. How difficult should the quiz be?</h3></label>
    <select v-model="selectedCountryDifficulty"  style="text-align:center;" required>
      <option disabled value=""  style="text-align:center;">Select Difficulty</option>
      <option  :value="this.selectedCountry.easy"  style="text-align:center;">EASY</option>
      <option  :value="this.selectedCountry.medium"  style="text-align:center;">MEDIUM</option>
      <option  :value="this.selectedCountry.hard"  style="text-align:center;">HARD</option>
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
  },
  props: ['username']
}
</script>

<style lang="css" scoped>

#greeting {
  width: 60vw;
}

.difficulty-select {
  display: flex;
  flex-direction: column;
  width: 75vw;
  align-items: center;
}

.label {
  width: 60vw;
}

select {
  text-align-last:center;
  width: 25vw;
  font-size: 20px;
  margin: 5px;
  color: #3870a0;
 }

 button {
   height: 70px;
   width: 250px;
   color: white;
   background-color: #3870a0;
   font-size: 20px;
   border-radius: 15px;
   border-color: #3870a0;
   margin: 5px;
 }

 button:hover {
   background-color: white;
   color: #3870a0
 }

</style>
