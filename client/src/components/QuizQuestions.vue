<template lang="html">
  <div class="">

    <!-- <div class="test-image">
      <img :src="selectedCountryQuestions[0].answers[0]" height="190px" width="250px"
      :alt="selectedCountry.name">
      <img src="../assets/images/france.png" height="180px" width="250px">
    </div> -->

    <div v-if="firstQuestion" class="first-question">
    <p>{{selectedCountryQuestions[0].question}}</p>
    <br>
    <button type="button" name="answer-button" v-model="answerGiven" v-on:click="handleClick(answer)" v-for="answer in selectedCountryQuestions[0].answers"><img :src="answer" height="180px" width="250px"></button>
    </div>


    <div v-if="showQuiz" class="questions">
    <p>{{selectedCountryQuestions[0].question}}</p>
    <br>
    <button type="button" name="answer-button" v-model="answerGiven" v-on:click="handleClick(answer)" v-for="answer in selectedCountryQuestions[0].answers">{{answer}}</button>
    </div>

    <div v-if="showResult" class="quiz-result" >
      <p>{{username}} - You scored {{correctAnswers}} out of 5</p>
    </div>

    <div v-if="showResult" class="navigation-buttons">
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
      zoomArray: [],
      correctAnswers: 0,
      showQuiz: false,
      answerGiven: "",
      firstQuestion: true,
      showResult: false,
    }
  },
  methods: {
    removeQuestion(){
      this.selectedCountryQuestions.splice(0,1)
      if(this.zoomArray.length > 1){
        this.zoomArray.splice(0,1)
      }
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
    updateFirstQuestion(){
      this.firstQuestion = false
    },
    updateShowResult(){
      if (this.selectedCountryQuestions.length === 0){
      this.showResult = true
      }
    },


    handleClick(answer){
      this.updateFirstQuestion()
      this.updateCorrectAnswers(answer)
      eventBus.$emit('zoom-array', this.zoomArray[0])
      this.removeQuestion()
      this.updateShowQuiz()
      this.updateShowResult()
    }


  },
  mounted() {
    eventBus.$on('country-selected', (country) =>{
      this.selectedCountryQuestions = country.easy,
      this.zoomArray = country.zooms
    })
  }
}
</script>

<style lang="css" scoped>
</style>
