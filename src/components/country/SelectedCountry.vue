<template>
  <b-container>
    <b-row>{{ allFlags[21] }}
      <b-col >
        <b-img></b-img>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'SelectedCountry',
  data () {
    return {
      params: this.$route.params.alpha
    }
  },

  created () {
    this.GET_FLAGS({ type: 'alpha', filtered: this.params })
  },

  computed: {
    ...mapState(['allFlags'])
  },

  methods: {
    ...mapActions(['GET_FLAGS'])
  }
}
</script>
