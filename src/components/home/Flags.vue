<template>
  <b-container>
    <Loader v-show="this.loading"> </Loader>
    <b-row v-show="!this.loading" align-h="center" class="text-center">
      <b-col sm="12" xs="12" lg="4" md="4" v-for="flag in allFlags" :key="flag.alpha2Code" class="m-auto p-0">
        <a @click="sendCountryToViewIt(flag.alpha2Code)">
          <b-img class="country-img mb-3" :src="flag.flag" :alt="flag.name"></b-img>
        </a>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Loader from '@/components/Loader'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Flags',
  components: { Loader },
  data () {
    return {
      loading: true
    }
  },

  created () {
  },

  mounted () {
    setTimeout(() => {
      if (this.$store.state.filteredType !== null && this.$store.state.typeOfFilter !== null) {
        this.GET_FLAGS({ type: this.typeOfFilter, filtered: this.filteredType })
      } else {
        this.GET_FLAGS()
      }
    }, 500)
    setTimeout(() => {
      this.loading = false
    }, 1000)
  },

  computed: {
    ...mapState(['allFlags', 'load', 'typeOfFilter', 'filteredType'])
  },

  watch: {
    load () {
      this.changeLoadingStatus()
    }
  },

  methods: {
    ...mapActions(['GET_FLAGS']),

    async changeLoadingStatus () {
      this.loading = true
      setTimeout(() => {
        this.loading = true
      }, 500)
      setTimeout(() => {
        this.loading = false
      }, 900)
    },

    async sendCountryToViewIt (alphaCode) {
      setTimeout(() => {
        this.GET_FLAGS({ type: 'alpha', filtered: alphaCode })
      }, 1000)
      this.$router.push({ name: 'Country', params: { alpha: alphaCode } })
    }
  }
}
</script>

<style scoped>

</style>
