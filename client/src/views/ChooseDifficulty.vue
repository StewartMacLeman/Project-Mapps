<template lang="html">
  <div class="difficulty-view">
  <DifficultySelect :username="username"></DifficultySelect>
  </div>
</template>

<script>
import DifficultySelect from "@/components/DifficultySelect.vue"

export default {
  props: ['username'],
  components: {
    DifficultySelect
  },
}

</script>

<style lang="css" scoped>

.difficulty-view{

  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-content: center;
  width: 75vw;
  height: 80vh;
}


</style>
