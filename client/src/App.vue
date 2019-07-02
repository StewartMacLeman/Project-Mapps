<template>
  <div id="app">
    <div class="wrapper">

    <div class="box header">M-Apps!...</div>
    <div class="sidebar">
      <router-link @click.native="clearProfile" :to="{ name: 'home' }">Home</router-link>
      <Profile :selectedCountry="selectedCountry"></Profile>
    </div>
    <div class="box content">
      <router-view id="view" :countries="countries" :username="username" :selectedCountry="selectedCountry" :maps="maps"></router-view>
    </div>

  <div class="box character">
    <img src="../public/assets/images/owl.png" alt="Ollie the owl" height="250px" width="220px">
  </div>
    </div>

  </div>

</template>

<script>

import CountriesService from './services/CountriesService.js'
import MapsService from './services/MapsService.js'
import {eventBus} from './main.js'
import Profile from "@/components/Profile.vue"

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
  },
  components: {
    Profile
  },

  methods: {
    clearProfile(){
      eventBus.$emit('clear-profile', false)
    }
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
  "header content content"
  "sidebar content content"
  "sidebar content content"
  "sidebar content content"
  "character content content"
  "character  content  content";
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
.character {
  grid-area: character;
  height: auto;
  display: flex;
  flex-direction: column;
  align-content: space-around;
  justify-content: center;
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
  height: 10vh;
  margin-top: 5vh;
  margin-bottom: 5vh;
}

.sidebar a {
  width: 15vw;
  background-color: #3870a0;
  color: white;
  font-size: 20px;
  border-radius: 15px
}

.box {
  background-color: #439fef;
  color: #fff;
  border-radius: 5px;
  padding: 10px;
  font-size: 150%;
}

</style>
