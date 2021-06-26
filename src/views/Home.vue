<template>
  <b-container class="home" fluid>
    <b-row align-h="between" class="mb-3 mt-5">
      <b-col sm="12" lg="3" md="3" class="first-filter ml-5 mr-auto p-0">
        <SelectFilterType/>
      </b-col>

      <b-col v-show="typeOfFilter" sm="12" lg="3" md="3">
        <FilterSelectedByType />
      </b-col>

      <b-col sm="12" lg="3" md="3" class=" search-button ml-auto mt-2">
        <SearchButton/>
      </b-col>
    </b-row>

    <b-row align-h="center" class="mb-3">
      <b-col cols="12">
        <Flags />
      </b-col>
    </b-row>

  </b-container>
</template>

<script>
import SelectFilterType from '../components/home/SelectFilterType'
import FilterSelectedByType from '@/components/home/FilterSelectedByType'
import SearchButton from '../components/home/SearchButton'
import Flags from '@/components/home/Flags'

import { mapState } from 'vuex'

export default {
  components: { SelectFilterType, FilterSelectedByType, SearchButton, Flags },
  name: 'Home',
  data () {
    return {
    }
  },

  computed: {
    ...mapState(['typeOfFilter', 'allFlags'])
  }
}
</script>

<style lang="scss" scoped>

.home {
  padding: 100px;
}

@media screen and (max-width: 550px) {
  .home {
    padding: 0px 15px 0px 15px !important;
  }

  .row {
    justify-content: center !important;
  }

  .first-filter {
    margin-left: 0 !important;
    margin-right: 0 !important;
    margin-bottom: 5px !important;
    padding: 0px 15px 0px 15px !important;
  }

  .search-button {
    text-align: right !important;
  }
}

</style>
