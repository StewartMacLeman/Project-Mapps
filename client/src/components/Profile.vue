<template lang="html">
<div>
<div v-if="showOne" class="factOne">
  <img :src="this.correctAnswerOne" alt="image of Frenchg tricolour" height="200px" width="250px">
</div>
  <div v-if="showTwo" class="factTwo">
    <p>Capital: {{this.correctAnswerTwo}}</p>
  </div>
  <div v-if="showThree" class="factThree">
    <p>Language: {{this.correctAnswerThree}}</p>
  </div>
  <div v-if="showFour" class="factFour">
    <p>Landmark: {{this.correctAnswerFour}}</p>
  </div>
  <div v-if="showFive" class="factFive">
    <p>Food: {{this.correctAnswerFive}}</p>
  </div>
</div>



</template>

<script>
import {eventBus} from '../main.js'
export default {
  props: ['selectedCountry'],
  data(){
    return{
      showOne: false,
      showTwo: false,
      showThree: false,
      showFour: false,
      showFive: false,
      correctAnswers: [],
      correctAnswerOne: "",
      correctAnswerTwo: "",
      correctAnswerThree: "",
      correctAnswerFour: "",
      correctAnswerFive: "",
    }
  },
  mounted() {
    eventBus.$on('update-profile-one', (update) => {
      this.showOne = update
    }),
    eventBus.$on('update-profile-two', (update) => {
      this.showTwo = update
    }),
    eventBus.$on('update-profile-three', (update) => {
      this.showThree = update
    }),
    eventBus.$on('update-profile-four', (update) => {
      this.showFour = update
    }),
    eventBus.$on('update-profile-five', (update) => {
      this.showFive = update
    }),
    eventBus.$on('country-selected', (country) =>{
    this.correctAnswerOne = country.easy[0].correct_answer
    this.correctAnswerTwo = country.easy[1].correct_answer
    this.correctAnswerThree = country.easy[2].correct_answer
    this.correctAnswerFour = country.easy[3].correct_answer
    this.correctAnswerFive = country.easy[4].correct_answer

    })
  }
}

</script>

<style lang="css" scoped>
</style>
