<template lang="html">
  <div class="country-view">
  <CountrySelect :countries="countriesNew" :username="username"></CountrySelect>
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

.country-view{

  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-content: center;
  width: 75vw;
  height: 80vh;
}


</style>
