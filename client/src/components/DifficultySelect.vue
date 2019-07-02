<template lang="html">

  <div class="difficulty-select">
    <label class="label" for="selectDifficulty">Well, now I guess we should see how you're feeling? Honestly my easy tests are hard and my hard tests are... diabolical. But how lucky are you feeling?</label>
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

.label {
  width: 70vw;
  margin: 40px;
}

select {
  text-align-last:center;
  width: 25vw;
  font-size: 20px;
  margin: 0 0 40px;
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

</style>
