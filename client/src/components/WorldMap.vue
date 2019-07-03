<template lang="html">
  <div id="map">
    <l-map style="height: 70vh; width: 100%" :options="mapOptions" :center="center" ref="worldMap" :minZoom="1.9">
      <l-tile-layer :url="url"></l-tile-layer>
    </l-map>
    Map Type: <select v-model="url">
      <option v-for="map in maps" :value="map.url">{{map.name.toUpperCase()}}</option>
    </select>
  </div>
</template>

<script>

import {eventBus} from '../main.js'

export default {
  computed: {
    countryBounds: function() {
      return this.selectedCountry.lat_long
    }
  },
  props: ['maps'],
  data() {
    return {
      url: "https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}.png?apikey=pk.eyJ1Ijoic2hhdW5oayIsImEiOiJjanhqYTEyazIxeTE4M3lzODMzYjdtNTdhIn0.zjHGZ4T6dhbdg5dQayUugQ",
      selectedCountry: null,
      worldMap: null,
      center: [45, 0],
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

#map {
  color: #3870a0;
  font-style: oblique;
}

option {
  color: #439fef;
}

</style>
