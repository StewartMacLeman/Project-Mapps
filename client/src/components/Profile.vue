<template lang="html">
<div>
<div v-if="showOne" class="factOne"><img :src="selectedCountry.easy[0].correct_answer" alt="image of Frenchg tricolour" height="200px" width="250px"></div>
  <div v-if="showTwo" class="factTwo">
    <p>Capital: {{selectedCountry.easy[1].correct_answer}}</p>
  </div>
  <div v-if="showThree" class="factThree">
    <p>Language: {{selectedCountry.easy[2].correct_answer}}</p>
  </div>
  <div v-if="showFour" class="factFour">
    <p>Landmark: {{selectedCountry.easy[3].correct_answer}}</p>
  </div>
  <div v-if="showFive" class="factFive">
    <p>Food: {{selectedCountry.easy[4].correct_answer}}</p>
  </div>
</div>



</template>

<script>
export default {

  props: ['selectedCountry'],
  data(){
    return{
      showOne: true,
      showTwo: true,
      showThree: true,
      showFour: true,
      showFive: true
    }
  }

}
</script>

<style lang="css" scoped>
</style>
