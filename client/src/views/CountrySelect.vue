<template lang="html">
  <div class="">
    <h1>Country Select view</h1>
  <br>
  <CountrySelect :countries="countries"></CountrySelect>
  </div>
</template>

<script>
import CountrySelect from "@/components/CountrySelect.vue"

export default {
  props: ['countries'],
  components: {
    CountrySelect
  }

}
</script>

<style lang="css" scoped>
</style>
