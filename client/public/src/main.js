import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
// import * as Vue2Leaflet from 'vue2-leaflet'
// // import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
//
// Vue.component('l-map', LMap);
// Vue.component('l-tile-layer', LTileLayer);
// Vue.component('l-marker', LMarker);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
