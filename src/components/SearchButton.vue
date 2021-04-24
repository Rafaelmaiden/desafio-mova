<template>
  <div>
    <b-button :disabled="!filter" @click="search()">PESQUISAR</b-button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
    }
  },

  computed: mapState(['filter']),

  methods: {
    ...mapActions(['search'])
  }
}

</script>

<style lang="scss" scoped>
$border-button: #6D2080;

.btn {
  background-color: $border-button;
  color: #fff;
  border-radius: 10px;
  min-width: 134px;
  min-height: 36px;
  font-size: 17px;
}

.btn:hover, .btn:focus {
  color: #fff;
  background-color: $border-button;
}
</style>
