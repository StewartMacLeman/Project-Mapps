<template lang="html">
  <div class="">
    <h1>Home view</h1>
    <br>
        <h1>You've got the Touch!</h1>
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
</script>

<style lang="css" scoped>
</style>
