<template>
  <div class="pagination">
    <!-- < &nbsp; -->
    <div @click="navigate($event, source.currentPage - 1)" class="back-page cursor"> ❮ &nbsp; </div>
    <div v-for="(page, index) in pages" :key="index">
      <div class="page cursor" >
        {{ page }}
      </div>
    </div>
    <div @click="navigate($event, source.currentPage + 1)" class="next-page cursor"> &nbsp; ❯</div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Pagination',
  data () {
    return {
      pages: ['1', '2', '3', '4', '5'],
      currentPage: 1,
      itemsPerPage: 10
    }
  },

  computed: {
    ...mapState(['allflags'])
  },

  methods: {
    ...mapMutations(['CHANGE_PAGINATION'])

    /* listItems () {
      const { allFlags, currentPage, itemsPerPage } = this

      const result = []
      const totalPage = Math.ceil(allFlags.length / itemsPerPage)
      let count = (currentPage * itemsPerPage) - itemsPerPage
      const delimiter = count + itemsPerPage

      if (currentPage <= totalPage) {
        for (let i = count; i < delimiter; i++) {
          if (allFlags[i] !== null) {
            result.push(allFlags[i])
          }
          count++
        }
      }
      return result
    } */
  }

  /* totalPages () {
    const total = this.allFlags.length / 10
    return total !== Infinity ? Math.ceil(total) : 0
  } */
}
</script>

<style scoped>
.pagination {
  justify-content: center;
  width: 100%;
  /* position: fixed;
  bottom: 40px; */
  font-family: Montserrat;
  color: #8D8D8D;

}

.page {
  padding: 5px 8px 8px 8px;
  margin-right: 5px;
  text-align: center;
  vertical-align: middle;
  width: 34px;
  height: 34px;
  left: 86px;
  border-radius: 2px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
}

a.active {
  background-color: #6D2080 !important;
  color: #fff !important;
}

.back-page {
  margin-top: 3px;
  width: 28px;
  height: 28px;
  margin-right: 5px;
  padding-left: 10px;
  padding-top: 2.5px;
  border-radius: 2px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
}

.next-page {
  margin-top: 3px;
  width: 28px;
  height: 28px;
  padding-left: 10px;
  padding-top: 2.5px;
  border-radius: 2px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
}

.pagination :hover:not(.active) {background-color: #ddd;}
</style>
