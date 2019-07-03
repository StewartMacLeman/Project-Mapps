<template lang="html">
  <div class="midata-view">
    <img src="/assets/images/owl.png" alt="Ollie the owl" height="250px" width="220px">
    <h1>Total games played: {{this.mi[0].games}}</h1>
    <h1>Average score: {{this.avg_score}}</h1>
  </div>

</template>

<script>
import MIServices from '../services/MIServices.js'
export default {
  data(){
    return {
      mi: [],
      avg_score: null
    }
  },

  mounted(){
    MIServices.getMi()
    .then(mi => this.mi = mi)
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

</style>
