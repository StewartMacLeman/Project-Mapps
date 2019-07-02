<template lang="html">

  <div class="difficulty-select">
    <label for="selectDifficulty">Choose a difficulty level</label>
    <select v-model="selectedCountry"  style="text-align:center;" required>
      <option disabled value=""  style="text-align:center;">Select Difficulty</option>
      <option  :value="this.selectedCountry.easy"  style="text-align:center;">Easy</option>
      <option  :value="this.selectedCountry.medium"  style="text-align:center;">Medium</option>
      <option  :value="this.selectedCountry.hard"  style="text-align:center;">Hard</option>
    </select>
    <button v-on:click="handleClick" onclick="window.location.href = 'http://localhost:8080/#/quiz';" type="button" name="button">Choose this country</button>
  </div>

</template>

<script>
export default {
  data() {
    return {
      selectedCountry: []
      selectedCountryDifficulty: []
    }
  },
  methods: {
    handleClick(){
      eventBus.$emit('difficulty-selected', this.selectedCountryDifficulty)
    }
  }

  mounted() {
    eventBus.$on('country-selected', (country) =>{
      this.selectedselectedCountry = country,
    })
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
