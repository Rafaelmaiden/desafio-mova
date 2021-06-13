<template>
  <b-container class="home" fluid>
    <b-row align-h="between" class="mb-3">
      <b-col cols="3" class="ml-5 mr-auto">
        <SelectFilterType/>
      </b-col>
      <b-col v-show="typeOfFilter" cols="3">
        <FilterSelectedByType />
      </b-col>
      <b-col cols="3" class="ml-auto mt-2">
        <SearchButton/>
      </b-col>
    </b-row>

    <b-row align-h="center">
      <b-col cols="12">
        <Flags />
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12">
        <Pagination />
      </b-col>
    </b-row>

  </b-container>
</template>

<script>
import SelectFilterType from '../components/SelectFilterType'
import FilterSelectedByType from '@/components/FilterSelectedByType'
import SearchButton from '../components/SearchButton'
import Flags from '@/components/Flags'
import Pagination from '@/components/Pagination'

import { mapState } from 'vuex'

export default {
  components: { SelectFilterType, FilterSelectedByType, SearchButton, Pagination, Flags },
  name: 'Home',
  data () {
    return {}
  },

  computed: {
    ...mapState(['typeOfFilter'])
  }
}
</script>

<style lang="css" scoped>

.home {
  padding: 100px;
}

</style>
