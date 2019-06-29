<template>
  <div id="app">
    <!-- <WorldMap></WorldMap> -->
    <nav>
      <router-link :to="{ name: 'home' }">Home</router-link>
      <router-link :to="{ name: 'country-select' }">Country Select</router-link>
      <router-link :to="{ name: 'quiz' }">Quiz</router-link>
    </nav>
    <div class="">
      <router-view id="view"></router-view>
    </div>
  </div>

</template>

<script>
// import WorldMap from '@/components/WorldMap.vue'

export default {
  name: 'app',
  data(): {
  },
  components: {
    // WorldMap
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

nav {
  display: flex;
  justify-content: space-around;
}
</style>
