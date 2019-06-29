<template lang="html">
  <head>
  </head>

  <div id="map">
    <!-- <l-map :center="center" :zoom="zoom" height="300px">
      <l-tile-layer :url="url"></l-tile-layer>

    </l-map> -->
  </div>

</template>
<!--
<script src="https://unpkg.com/leaflet@1.5.1/dist/leaflet.js"
   integrity="sha512-GffPMF3RvMeYyc1LWMHtK8EbPv0iNZ8/oTtHPx9/cc2ILxQ+u905qIwdpULaqDkyBKgOaB57QTMg7ztg8Jm2Og=="
   crossorigin=""> -->
<script>

export default {
  data(){
    <!-- return {
      center: [55, -4],
      zoom: 10,
      url: `https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=${pk.eyJ1Ijoic3Rld2FydG1hY2xlbWFuIiwiYSI6ImNqeGhpbjU5ZzBsd3YzdGw5dHgwNzUxbzIifQ.8f4LxUwPBPqSLtgkJOI01g}` -->
    }
  }
}
</script>
<style lang="css" scoped>
#map {
  height: 180px;
  width: 100%;
}
</style>
