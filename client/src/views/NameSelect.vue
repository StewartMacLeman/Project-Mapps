<template lang="html">
  <div class="name-select-view">
        <UserName></UserName>
        <router-view id="view" :countries="countries" :username="username"></router-view>
  </div>
</template>

<script>

import UserName from '@/components/UserName.vue'

export default {
  props: ['countries'],
  components: {
    UserName
  }
}
</script>.home-view{

<style lang="css" scoped>

.name-select-view{

  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-content: center;
  width: 75vw;
  height: 80vh;
}

</style>
