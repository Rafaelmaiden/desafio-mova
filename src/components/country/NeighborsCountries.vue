<template>
  <b-container>
    <span class="neighbors-countries" style="color: #000">Países Vizinhos: </span><br><br><br>
    <Loader v-show="this.loading"> </Loader>
    <b-row  v-show="!this.loading">
      <b-col cols="4" v-for="(neighbor, index) in this.borders" :key="index" >
        <a @click="reloadCurrentPage(neighbor.alpha2Code)" >
          <b-img class="country-img mb-3" :src="neighbor.flag" :alt="neighbor.name"></b-img>
        </a>
      </b-col>
    </b-row>
    <b-row v-show="!this.borders[0]">
      <b-col>
        <span class="neighbors-countries text-center">Nenhum país encontrado </span><br><br><br>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Loader from '@/components/Loader'

export default {
  name: 'NeighborsCountries',
  components: { Loader },
  data () {
    return {
      loading: null
    }
  },

  computed: {
    ...mapState(['borders', 'allFlags'])
  },

  watch: {
    allFlags () {
      this.loading = true
      setTimeout(() => {
        this.flagData = this.allFlags
        this.loading = false
      }, 550)
    }
  },

  methods: {
    ...mapActions(['GET_FLAGS']),

    reloadCurrentPage (neighborCode) {
      setTimeout(() => {
        this.GET_FLAGS({ type: 'alpha', filtered: neighborCode })
        console.log(neighborCode)
      }, 100)

      this.$router.push({ name: 'Country', params: { alpha: neighborCode } })
    }
  }
}
</script>
