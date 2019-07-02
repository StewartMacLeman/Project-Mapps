<template lang="html">
<div>
<div v-if="showOne" class="factOne">
  <img :src="this.correctAnswerOne" alt="image of Frenchg tricolour" height="200px" width="250px">
</div>
  <div v-if="showTwo" class="factTwo">
    <p>{{this.correctAnswerTwo}}</p>
  </div>
  <div v-if="showThree" class="factThree">
    <p>{{this.correctAnswerThree}}</p>
  </div>
  <div v-if="showFour" class="factFour">
    <p>{{this.correctAnswerFour}}</p>
  </div>
  <div v-if="showFive" class="factFive">
    <p>{{this.correctAnswerFive}}</p>
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
    eventBus.$on('difficulty-selected', (country) =>{
    this.correctAnswerOne = country[0].correct_answer
    this.correctAnswerTwo = country[1].correct_answer
    this.correctAnswerThree = country[2].correct_answer
    this.correctAnswerFour = country[3].correct_answer
    this.correctAnswerFive = country[4].correct_answer

    })
  }
}

</script>

<style lang="css" scoped>
</style>
