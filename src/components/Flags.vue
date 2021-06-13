<template>
  <b-container>
    <b-row align-h="center" class="text-center">
      <b-col v-for="(flag,  index) in allFlags" :key="index" class="m-auto p-0" cols="4">
        <b-img class="country-img mb-3" :src="flag"></b-img>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Flags',
  data () {
    return {
    }
  },

  mounted () {
    this.GET_FLAGS()
  },

  computed: {
    ...mapState(['allFlags'])

    /* changeFlags () {
      return this.GET_FLAGS()
    } */
  },

  /* watch: {
    allFlags: function () {
      this.changeFlags()
    }
  }, */

  methods: {
    ...mapActions(['GET_FLAGS'])
  }
}
</script>

<style scoped>
.country-img {
  height: 181px;
  width: 316px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  padding: 0 !important;
}

</style>
