<template>
  <b-container fluid class="m-0">
    <b-row class="mb-5">
      <b-col class="p-0">
        <SelectedCountry />
      </b-col>
    </b-row>
    <b-row class="mt-3 mb-5">
      <Loader v-show="this.loading"> </Loader>
      <b-col v-show="!this.loading">
        <NeighborsCountries />
      </b-col>
    </b-row>
    <b-row v-show="this.borders > 0">
      <b-col>
        <Pagination />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import SelectedCountry from '@/components/country/SelectedCountry'
import NeighborsCountries from '@/components/country/NeighborsCountries'
import Pagination from '@/components/Pagination'
import Loader from '@/components/Loader'
import { mapState } from 'vuex'

export default {
  components: { SelectedCountry, NeighborsCountries, Pagination, Loader },
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

  computed: {
    ...mapState(['borders'])
  },

  watch: {
    params () {
      console.log(this.params)
    }
  },

  methods: {}
}
</script>
