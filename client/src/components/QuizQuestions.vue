<template lang="html">
  <div class="quiz">

    <div v-if="firstQuestion" class="first-question">
    <p>"{{selectedCountryQuestions[0].question}}"</p>
    <br>
    <button type="button" name="answer-button" v-model="answerGiven" v-on:click="handleClick(answer)" v-for="answer in selectedCountryQuestions[0].answers"><img :src="answer" height="80px" width="120px"></button>
    </div>


    <div v-if="showQuiz" class="questions">
    <p>"{{selectedCountryQuestions[0].question}}"</p>
    <br>
    <button type="button" name="answer-button" v-model="answerGiven" v-on:click="handleClick(answer)" v-for="answer in selectedCountryQuestions[0].answers">{{answer}}</button>
    </div>

    <div v-if="showResult" class="quiz-result" >
      <h1>"You scored {{correctAnswers}} out of 5!"</h1>
      <p v-if="correctAnswers === 0">"Unlucky {{username}}. But you've learnt a lot today. Let's try again?"</p>
      <p v-if="correctAnswers === 1">"Well, that's a start {{username}}! I wonder if you get better second time around..."</p>
      <p v-if="correctAnswers === 2">"That's a decent score {{username}}! I bet next time you can do even better..."</p>
      <p v-if="correctAnswers === 3">"Not bad at all {{username}}! Maybe one day you'll beat me."</p>
      <p v-if="correctAnswers === 4">"Woah! That's pretty good {{username}}. You've got me sweating here... I don't think you should play anymore."</p>
      <p v-if="correctAnswers === 5">"You beat me! Blast you and your smarts, {{username}}!"</p>
    </div>

    <div v-if="showResult" class="navigation-buttons">
    <button v-on:click="clearProfile()" onclick="window.location.href = 'http://localhost:8080/#/';" type="button" name="home-button">Home</button>
    <button v-on:click="clearProfile()" onclick="window.location.href = 'http://localhost:8080/#/country-select';" type="button" name="home-button">Choose another country</button>
    </div>

  </div>
</template>

<script>
import {eventBus} from '../main.js'
import MIServices from '../services/MIServices.js'
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
      questionCounter: 0,
      profileChange: true
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
    updateQuestionCounter(){
      this.questionCounter += 1
    },
    updateProfile(){
      if(this.questionCounter === 1){
        eventBus.$emit('update-profile-one', this.profileChange)
      }
        else if (this.questionCounter === 2){
        eventBus.$emit('update-profile-two', this.profileChange)
      }
        else if (this.questionCounter === 3){
        eventBus.$emit('update-profile-three', this.profileChange)
      }
        else if (this.questionCounter === 4){
        eventBus.$emit('update-profile-four', this.profileChange)
      }
        else if (this.questionCounter === 5){
        eventBus.$emit('update-profile-five', this.profileChange)
      }
    },


    handleClick(answer, e){
      this.updateFirstQuestion()
      this.updateCorrectAnswers(answer)
      eventBus.$emit('zoom-array', this.zoomArray[0])
      this.removeQuestion()
      this.updateShowQuiz()
      this.updateShowResult()
      this.updateQuestionCounter()
      this.updateProfile()
      this.sendMi()
    },

    clearProfile(){
      eventBus.$emit('clear-profile', false)
      eventBus.$emit('clear-ollie', false)
    },

    sendMi(){
      if (this.questionCounter === 5){
      const data = {
        score: this.correctAnswers,
        games: 1,
      }
      MIServices.putMi(data)
      }
    }

  },

  mounted() {
    eventBus.$on('country-selected', (country) =>{
      this.zoomArray = country.zooms
    })
    eventBus.$on('difficulty-selected', (difficulty) =>{
      this.selectedCountryQuestions = difficulty
    })
    eventBus.$emit('show-ollie', true)

  }
}
</script>

<style lang="css" scoped>

button {
  height: 90px;
  width: 140px;
  color: white;
  background-color: #3870a0;
  font-size: 18px;
  border-radius: 15px;
  margin: 10px;
}

button:hover {
  background-color: white;
  color: #3870a0
}

h1 {
  color: #3870a0;
}

p {
  color: #3870a0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-weight: bold;
}

.questions {
  display: flex;
  color: #439fef;
  margin: 10px;
  justify-content: space-between;
}

.first-question {
  display: flex;
  margin: 10px;
  justify-content: space-between;
}

.first-question button {
  background-color: white;
  border-color: white;
}

.first-question button:hover{
  background-color: #3870a0
}

.navigation-buttons {
  display: flex;
  margin: 10px;
  justify-content: center;
  border-radius: 15px
}



</style>
