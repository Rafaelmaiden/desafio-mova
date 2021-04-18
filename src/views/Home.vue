<template>
  <b-container class="home" fluid>
    <b-row align-h="between">
      <b-col cols="4" class="mr-auto">
        <SelectFilterType/>
      </b-col>
      <b-col cols="3" class="ml-auto">
        <SearchButton/>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-pagination
        pills
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          first-text=""
          prev-text="Prev"
          next-text="Next"
          last-text="">
        </b-pagination>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import SelectFilterType from '../components/SelectFilterType'
import SearchButton from '../components/SearchButton'

export default {
  components: { SelectFilterType, SearchButton },
  name: 'home'
}
</script>

<style lang="scss" scoped>

.home {
  padding: 100px;
}
</style>
