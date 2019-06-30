<template lang="html">
  <div class="">
    <h1>Country Select view</h1>
  <br>
  <CountrySelect :countries="countriesNew"></CountrySelect>
  </div>
</template>

<script>
import CountrySelect from "@/components/CountrySelect.vue"
import CountriesService from '../services/CountriesService.js'

export default {
  props: ['countries', 'username'],
  data(){
    return {
      countriesNew: []
    }
  },
  components: {
    CountrySelect
  },
  mounted() {
    CountriesService.getCountries()
    .then(countries => this.countriesNew = countries)
}
}

</script>

<style lang="css" scoped>
</style>
