<template>
  <b-container>
    <Loader v-show="this.loading"> </Loader>
    <b-row v-show="!this.loading" align-h="center" class="text-center">
      <b-col v-for="flag in allFlags" :key="flag.alpha2Code" class="m-auto p-0" cols="4">
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
    setTimeout(() => {
      if (this.$store.state.filteredType && this.$store.state.typeOfFilter) {
        this.GET_FLAGS({ type: this.$store.state.typeOfFilter, filtered: this.$store.state.typeOfFilter })
      } else {
        this.GET_FLAGS()
      }
    }, 500)
  },

  mounted () {
    setTimeout(() => {
      this.loading = false
    }, 1000)
  },

  computed: {
    ...mapState(['allFlags', 'load'])
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
      }, 700)
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
