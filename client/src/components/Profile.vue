<template lang="html">
<div>
<div v-if="showOne" class="factOne">{{selectedCountry.easy[0].correct_answer}}</div>
  <div v-if="showTwo" class="factTwo"></div>
  <div v-if="showThree" class="factThree"></div>
  <div v-if="showFour" class="factFour"></div>
  <div v-if="showFive" class="factFive"></div>
</div>



</template>

<script>
export default {

  props: ['selectedCountry'],
  data(){
    return{
      showOne: true,
      showTwo: false,
      showThree: false,
      showFour: false,
      showFive: false
    }
  }

}
</script>

<style lang="css" scoped>
</style>
