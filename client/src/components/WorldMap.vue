<template lang="html">
  <l-map style="height: 500px; width: 100%" :maxZoom="20" :center="center" :zoom="zoom" :minZoom="1">
    <l-tile-layer :url="url"></l-tile-layer>
  </l-map>
</template>
<script>
export default {
  props: ['selectedCountry'],
  data() {
    return {
      url: `https://api.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoic2hhdW5oayIsImEiOiJjanhqYTEyazIxeTE4M3lzODMzYjdtNTdhIn0.zjHGZ4T6dhbdg5dQayUugQ`,
      zoom: 10,
      center: [55.8653523,-4.2598484]
    }
  }
}
</script>
<style lang="css" scoped>
</style>
