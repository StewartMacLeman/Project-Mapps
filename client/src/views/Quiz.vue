<template lang="html">
  <div class="quiz-map">
    <div class="map">
      <WorldMap></WorldMap>
    </div>
    <div class="quiz">
      <QuizQuestions :selectedCountry="selectedCountry" :username="username"></QuizQuestions>
    </div>
  </div>
</template>

<script>

import QuizQuestions from '@/components/QuizQuestions.vue'
import WorldMap from '@/components/WorldMap.vue'

export default {
  props: ['selectedCountry', 'username'],
  components: {
    QuizQuestions,
    WorldMap
  }
}
</script>

<style lang="css" scoped>

.quiz-map {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 36vw 36vw;
  grid-template-areas:
  "map map"
  "quiz quiz";
  background-color: #fff;
  color: #444;
  height: auto;
}

.map {
  grid-area: map;
  width: 72vw
}

.quiz {
  grid-area: quiz;
  width: 72vw
}

</style>
