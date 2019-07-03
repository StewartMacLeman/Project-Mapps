<template lang="html">
  <div class="midata-view">
    <img src="/assets/images/owl.png" alt="Ollie the owl" height="250px" width="220px">
    <button v-if="!showData" v-on:click="showMI" type="button" name="button">Show me how how everyone is doing Ollie...</button>
    <div v-if="showData" class="show-data">
      <h1>Total games played: {{this.mi[0].games}}</h1>
      <h1>Average score: {{this.avg_score}}</h1>
    </div>
  </div>

</template>

<script>
import MIServices from '../services/MIServices.js'
export default {
  data(){
    return {
      mi: [],
      avg_score: null,
      showData: false
    }
  },

  mounted(){
    MIServices.getMi()
    .then(mi => this.mi = mi)
  },

  methods:{
    showMI(){
      this.showData = true
      const calc = this.mi[0].score / this.mi[0].games
      return this.avg_score = calc.toFixed(2)
    }
  },

  computed:{
    calculateMI(){
      const calc = this.mi[0].score / this.mi[0].games
      return this.avg_score = calc.toFixed(2)
    }
  }
}
</script>

<style lang="css" scoped>

.midata-view {
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 70vh;
  width: 72vw;
}

button {
  width: 30vw;
}


</style>
