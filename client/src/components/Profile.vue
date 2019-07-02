<template lang="html">
<div>
  <p>{{this.selectedCountry.name}}</p>
<div v-if="showOne" class="factOne">
  <img :src="this.correctAnswerOne" alt="image of Frenchg tricolour" height="200px" width="250px">
</div>
  <div v-if="showTwo" class="factTwo">
    <p>{{this.correctAnswerShorthandTwo}}: {{this.correctAnswerTwo}}</p>
  </div>
  <div v-if="showThree" class="factThree">
    <p>{{this.correctAnswerShorthandThree}}: {{this.correctAnswerThree}}</p>
  </div>
  <div v-if="showFour" class="factFour">
    <p>{{this.correctAnswerShorthandFour}}: {{this.correctAnswerFour}}</p>
  </div>
  <div v-if="showFive" class="factFive">
    <p>{{this.correctAnswerShorthandFive}}: {{this.correctAnswerFive}}</p>
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
      countryName: "",
      correctAnswerOne: "",
      correctAnswerShorthandOne:"",
      correctAnswerTwo: "",
      correctAnswerShorthandTwo:"",
      correctAnswerThree: "",
      correctAnswerShorthandThree:"",
      correctAnswerFour: "",
      correctAnswerShorthandFour:"",
      correctAnswerFive: "",
      correctAnswerShorthandFive:""
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
    this.correctAnswerShorthandOne = country[0].question_shorthand
    this.correctAnswerTwo = country[1].correct_answer
    this.correctAnswerShorthandTwo = country[1].question_shorthand
    this.correctAnswerThree = country[2].correct_answer
    this.correctAnswerShorthandThree = country[2].question_shorthand
    this.correctAnswerFour = country[3].correct_answer
    this.correctAnswerShorthandFour = country[3].question_shorthand
    this.correctAnswerFive = country[4].correct_answer
    this.correctAnswerShorthandFive = country[4].question_shorthand


    })
  }
}

</script>

<style lang="css" scoped>
</style>
