<template>
  <div>
    <h2>Utilisation d'OpenStreetMap</h2>
    <p>Cette page se trouve dans Carte.vue</p>
    <l-map
      :center="center"
      :zoom="zoom"
      class="map"
      ref="map"
      @update:zoom="zoomUpdated"
      @update:center="centerUpdated"
      style="height:60vh;"
    >

    <l-tile-layer :url="osmUrl"></l-tile-layer>


    </l-map>
  </div>
</template>

<script>
import {LMap, LTileLayer, LMarker} from 'vue2-leaflet'
import 'leaflet/dist/leaflet.css'

export default{
  components : {
    LMap, LTileLayer, LMarker
  },

  data(){
    return {
      osmUrl: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      center: [48.6937223, 6.1834097],
      zoom: 13
    }
  },

  methods: {
    /**
     *
     */
    zoomUpdated(zoom){
      this.zoom = zoom
    },

    centerUpdated(center){
      this.center = center
    }

  },

  computed: {

  }
}
</script>

<style>

</style>
