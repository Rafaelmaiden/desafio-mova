<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <SelectedCountry />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import SelectedCountry from '@/components/country/SelectedCountry'

export default {
  components: { SelectedCountry },
  name: 'Country',
  data () {
    return {

    }
  },

  methods: {}
}
</script>
