<template>
  <div>
    <b-button :disabled="!filteredType || !typeOfFilter" @click.prevent.stop="searchFlagsByType()">PESQUISAR</b-button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
    }
  },

  computed: mapState(['typeOfFilter', 'filteredType']),

  methods: {

    async searchFlagsByType () {
      this.$store.dispatch('GET_FLAGS', { type: this.typeOfFilter, filtered: this.filteredType })
    }
  }
}

</script>

<style lang="scss" scoped>
$border-button: #6D2080;

.btn {
  background-color: $border-button;
  color: #fff;
  border-radius: 10px;
  min-width: 156px;
  min-height: 36px;
  font-size: 17px;
}

.btn:hover, .btn:focus {
  color: #fff;
  background-color: $border-button;
}

.btn-secondary:focus, .btn-secondary.focus, .btn:focus, .btn.focus  {
  box-shadow: #6D2080 !important;
}
</style>
