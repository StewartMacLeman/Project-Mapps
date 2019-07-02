<template>
  <div id="app">
    <div class="wrapper">

    <div class="box header">M-Apps!...</div>
    <div class="sidebar">
      <router-link :to="{ name: 'home' }">Home</router-link>
    </div>
    <div class="box content">
      <router-view id="view" :countries="countries" :username="username" :selectedCountry="selectedCountry" :maps="maps"></router-view>
    </div>
  </div>

  </div>

</template>

<script>

import CountriesService from './services/CountriesService.js'
import MapsService from './services/MapsService.js'
import {eventBus} from './main.js'

export default {
  name: 'app',
  data(){
    return{
      countries: [],
      maps: [],
      username: "",
      selectedCountry: ""
    }
  },
  mounted() {
    MapsService.getMaps()
    .then(maps => this.maps = maps)

    CountriesService.getCountries()
    .then(countries => this.countries = countries)

    eventBus.$on('username-input', (username) => {
      this.username = username
    })

    eventBus.$on('country-selected', (country) =>{
      this.selectedCountry = country
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

.wrapper {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 20vw 37vw 37vw;
  grid-template-areas:
  "sidebar header header"
  "sidebar content content"
  "sidebar content content"
  "sidebar content content"
  "sidebar content content"
  "sidebar  content  content";
  background-color: #fff;
  color: #444;
}

.sidebar {
  grid-area: sidebar;
  background-color: #439fef;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: auto;
  align-items: center;
  /* background-image: url('./assets/images/france.png'); */
}

.content {
  grid-area: content;
  height: auto;
  display: flex;
  align-content: space-around;
}

.header {
  grid-area: header;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.sidebar a {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 80vh;
  margin-top: 5vh;
  margin-bottom: 5vh
}

.sidebar a {
  width: 15vw;
  background-color: #3870a0;
  color: white;
  font-size: 20px;
}

.box {
  background-color: #439fef;
  color: #fff;
  border-radius: 5px;
  padding: 10px;
  font-size: 150%;
}

</style>
