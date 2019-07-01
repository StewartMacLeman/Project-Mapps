<template lang="html">
  <l-map style="height: 500px; width: 100%" :options="mapOptions" :center="selectedCountry.lat_long" :zoom="zoom" :minZoom="1.4" :ref="map">
    <l-tile-layer :url="url"></l-tile-layer>
  </l-map>
</template>

<script>

import {eventBus} from '../main.js'

export default {
  data() {
    return {
      url: `https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}.png?access_token=pk.eyJ1Ijoic2hhdW5oayIsImEiOiJjanhqYTEyazIxeTE4M3lzODMzYjdtNTdhIn0.zjHGZ4T6dhbdg5dQayUugQ`,
      selectedCountry: null,
      zoom: 0,
      mapOptions: {
       zoomSnap: 0.1
     }
    }
  },
  mounted(){
    eventBus.$on('country-selected', (country) =>{
    this.selectedCountry = country
    }),
    eventBus.$on('zoom-array', (zoom) =>{
      this.zoom = zoom
    })
  }
}
</script>

<style lang="css" scoped>
</style>
