<template lang="html">
<div v-if="showOne" class="profile">
  <h2>All about... {{this.selectedCountry.name}}</h2>
<div v-if="showOne" class="factOne">
  <img :src="this.correctAnswerOne" alt="image of Frenchg tricolour" height="50px" width="75px">
</div>
  <div v-if="showTwo" class="factTwo">
    <h4>{{this.correctAnswerShorthandTwo}}: {{this.correctAnswerTwo}}</h4>
  </div>
  <div v-if="showThree" class="factThree">
    <h4>{{this.correctAnswerShorthandThree}}: {{this.correctAnswerThree}}</h4>
  </div>
  <div v-if="showFour" class="factFour">
    <h4>{{this.correctAnswerShorthandFour}}: {{this.correctAnswerFour}}</h4>
  </div>
  <div v-if="showFive" class="factFive">
    <h4>{{this.correctAnswerShorthandFive}}: {{this.correctAnswerFive}}</h4>
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

    eventBus.$on('clear-profile', (clear) =>{
      this.showOne = clear
      this.showTwo = clear
      this.showThree = clear
      this.showFour = clear
      this.showFive = clear
    })
  }
}

</script>




<style lang="css" scoped>

.profile {
  color: white;
  margin: 5px
}

</style>
