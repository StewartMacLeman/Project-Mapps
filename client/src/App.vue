<template>
  <div id="app">
    <nav>
      <router-link :to="{ name: 'home' }">Home</router-link>
      <router-link :to="{ name: 'country-select' }">Country Select</router-link>
      <router-link :to="{ name: 'quiz' }">Quiz</router-link>
    </nav>
    <div class="">
      <router-view id="view" :countries="countries" :username="username"></router-view>
    </div>
  </div>

</template>

<script>

import CountriesService from './services/CountriesService.js'
import {eventBus} from './main.js'

export default {
  name: 'app',
  data(){
    return{
      countries: [],
      username: ""
    }
  },
  mounted() {
    CountriesService.getCountries()
    .then(countries => this.countries = countries)

    eventBus.$on('username-input', (username) => {
      this.username = username 
    })
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
