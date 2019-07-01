<template lang="html">
  <div class="">

    <!-- <div class="test-image">
      <img :src="selectedCountryQuestions[0].answers[0]" height="190px" width="250px"
      :alt="selectedCountry.name">
      <img src="../assets/images/france.png" height="180px" width="250px">
    </div> -->

    <div v-if="showQuiz" class="questions">
    <p>{{selectedCountryQuestions[0].question}}</p>
    <br>
    <button type="button" name="answer-button" v-model="answerGiven" v-on:click="handleClick(answer)" v-for="answer in selectedCountryQuestions[0].answers">{{answer}}</button>
    </div>

    <div v-if="!showQuiz" class="quiz-result" >
      <p>{{username}} - You scored {{correctAnswers}} out of 5</p>
    </div>

    <div v-if="!showQuiz" class="navigation-buttons">
    <button onclick="window.location.href = 'http://localhost:8080/#/';" type="button" name="home-button">Home</button>
    <button onclick="window.location.href = 'http://localhost:8080/#/country-select';" type="button" name="home-button">Choose another country</button>
    </div>

  </div>
</template>

<script>
import {eventBus} from '../main.js'
export default {
  props: ['selectedCountry', 'username'],
  data(){
    return {
      selectedCountryQuestions: [],
      correctAnswers: 0,
      showQuiz: true,
      answerGiven: "",
    }
  },
  methods: {
    removeQuestion(){
      this.selectedCountryQuestions.splice(0,1)
    },
    updateShowQuiz(){
      if (this.selectedCountryQuestions.length != 0){
      this.showQuiz = true
      }
      else
      {
      this.showQuiz = false
      }
    },
    updateCorrectAnswers(answer){
      if (answer === this.selectedCountryQuestions[0].correct_answer){
        this.correctAnswers +=1
      }
    },


    handleClick(answer){
      this.updateCorrectAnswers(answer)
      this.removeQuestion()
      this.updateShowQuiz()
    }


  },
  mounted() {
    eventBus.$on('country-selected', (country) =>{
      this.selectedCountryQuestions = country.easy
    })
  }
}
</script>

<style lang="css" scoped>
</style>
