<template lang="html">
  <div class="quiz-map">
    <div class="map">
      <WorldMap :maps="maps"></WorldMap>
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
  props: ['selectedCountry', 'username', 'maps'],
  components: {
    QuizQuestions,
    WorldMap,
  }
}
</script>

<style lang="css" scoped>

.quiz-map {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 38vw 38vw;
  grid-template-areas:
  "map map"
  "quiz quiz";
  background-color: #fff;
  color: #444;
  height: auto;
}

.map {
  grid-area: map;
}

.quiz {
  grid-area: quiz;
  width: 72vw;
}

.profile {
  grid-area: profile;
  width: 30vw;
}

.sidebar {
  grid-area: sidebar;
  background-color: #439fef;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: auto;
  align-items: center;
}

</style>
