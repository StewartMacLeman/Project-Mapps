<template>
  <div id="app">
    <div class="wrapper">

    <div class="box header">
      <h3>M-Apps!...</h3>
    </div>
    <div class="sidebar">
      <router-link id="router" @click.native="clearProfile" :to="{ name: 'home' }">Home</router-link>
      <Profile :selectedCountry="selectedCountry"></Profile>
    </div>
    <div class="box content">
      <router-view id="view" :countries="countries" :username="username" :selectedCountry="selectedCountry" :maps="maps"></router-view>
    </div>

  <div  class="box character">
    <div v-if="showOllie" class="ollie">
      <img src="../public/assets/images/owl.png" alt="Ollie the owl" height="250px" width="220px">
      <h3>"Good luck {{username}}"</h3>
    </div>
    <div v-if="!showOllie" class="mi">
      <button type="button" name="button" onclick="window.location.href = 'http://localhost:8080/#/mi';">Boring stuff for teachers</button>
    </div>
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
      selectedCountry: "",
      showOllie: false
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
    eventBus.$on('show-ollie', (change) => {
      this.showOllie = change
    })
    eventBus.$on('clear-ollie', (change) => {
      this.showOllie = change
    })
  },
  components: {
    Profile
  },

  methods: {
    clearProfile(){
      eventBus.$emit('clear-profile', false)
      this.showOllie = false
    }
  }

}
</script>

<style>

body {
  position: relative;
}

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
  grid-template-columns: 20vw 39vw 39vw;
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
  justify-content: space-around;
  height: auto;
  align-items: center;
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
  font-style: oblique;
  margin: 0;
}


.sidebar a {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 60px;
  width: 200px;
  margin-top: 5vh;
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

button {
  height: 60px;
  width: 15vw;
  color: white;
  background-color: #3870a0;
  font-size: 20px;
  border-radius: 15px;
  border-color: #3870a0;
}

#router {
  text-decoration: none;
}

.sidebar a:hover {
  background-color: white;
  color: #3870a0
}

button:hover {
  background-color: white;
  color: #3870a0
}




</style>
