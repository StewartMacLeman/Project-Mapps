<template lang="html">
  <div class="">
    <select v-model="selectedCountry">
      <option disabled value="">Select Country</option>
      <option v-for="(country, index) in countries" :index="index" :value="country">{{country.name}}</option>
    </select>

  </div>

</template>

<script>
export default {
  name: 'country-select',
  data(){
    return {
      selectedCountry: null
    }
  },
  props: ['countries']
}
</script>

<style lang="css" scoped>
</style>
