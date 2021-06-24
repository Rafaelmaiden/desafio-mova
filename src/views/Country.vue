<template>
  <b-container fluid class="m-0">
    <b-row class="mb-5">
      <b-col class="p-0">
        <SelectedCountry />
      </b-col>
    </b-row><br>

    <b-row class="mt-4 mb-5 borders">
      <Loader v-show="this.loading"> </Loader>
      <b-col v-show="!this.loading">
        <NeighborsCountries />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import SelectedCountry from '@/components/country/SelectedCountry'
import NeighborsCountries from '@/components/country/NeighborsCountries'
import Loader from '@/components/Loader'

export default {
  components: { SelectedCountry, NeighborsCountries, Loader },
  name: 'Country',
  data () {
    return {
      loading: true,
      params: this.$route.params.alpha
    }
  },

  created () {
    setTimeout(() => {
      this.loading = false
    }, 1800)
  },

  watch: {
    params () {
      console.log(this.params)
    }
  },

  methods: {}
}
</script>

<style lang="scss" scoped>
@media screen and (max-width: 400px) {
  .borders {
    margin-top: 0px !important;
    margin-bottom: 10px !important;
  }
}
</style>
