<template lang="html">
  <div class="">
  <QuizQuestions :selectedCountry="selectedCountry" :username="username"></QuizQuestions>
  </div>
</template>

<script>

import QuizQuestions from '@/components/QuizQuestions.vue'

export default {
  props: ['selectedCountry', 'username'],
  components: {
    QuizQuestions
  }
}
</script>

<style lang="css" scoped>
</style>
