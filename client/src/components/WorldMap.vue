<template lang="html">
  <l-map style="height: 500px; width: 100%" :options="mapOptions" :center="selectedCountry.lat_long" ref="worldMap" :minZoom="1.4">
    <l-tile-layer :url="url"></l-tile-layer>
  </l-map>
</template>

<script>

import {eventBus} from '../main.js'

export default {
  computed: {
    countryBounds: function() {
      return this.selectedCountry.lat_long
    }
  },
  data() {
    return {
      url: `https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}.png?access_token=pk.eyJ1Ijoic2hhdW5oayIsImEiOiJjanhqYTEyazIxeTE4M3lzODMzYjdtNTdhIn0.zjHGZ4T6dhbdg5dQayUugQ`,
      selectedCountry: null,
      worldMap: null,
      zoom: 0,
      mapOptions: {
       zoomSnap: 0.001
     }
    }
  },
  mounted(){
    eventBus.$on('country-selected', (country) =>{
    this.selectedCountry = country
    this.$refs.worldMap.mapObject.flyToBounds(this.countryBounds);
    }),
    eventBus.$on('zoom-array', (zooms) =>{
      this.zoom = zooms
      let newZoom = this.zoom
      this.$refs.worldMap.mapObject.flyTo(this.selectedCountry.lat_long, newZoom);
    })
  }
}
</script>

<style lang="css" scoped>
</style>
