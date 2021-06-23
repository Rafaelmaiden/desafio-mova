<template>
  <b-container>
    <Loader v-show="this.loading"> </Loader>
    <b-row v-show="!this.loading" align-h="center" class="text-center">
      <b-col sm="12" lg="4" md="4" v-for="flag in listItems()" :key="flag.alpha2Code" class="m-auto p-0">
        <a @click="sendCountryToViewIt(flag.alpha2Code)">
          <b-img class="country-img mb-3" :src="flag.flag" :alt="flag.name"></b-img>
        </a>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <div class="pagination">
          <!-- < &nbsp; -->
          <div @click="currentPage -= 1" class="back-page cursor"> ❮ &nbsp; </div>
            <div v-for="page in totalPages()" :key="page">
              <div class="page cursor" :class="currentPage === page ? 'active' : ''"
                @click="currentPage = page">
                {{ page }}
              </div>
            </div>
          <div @click="currentPage += 1" class="next-page cursor"> &nbsp; ❯</div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Loader from '@/components/Loader'
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  name: 'Flags',
  components: { Loader },
  data () {
    return {
      loading: true,
      currentPage: 1,
      itemsPerPage: 10
    }
  },

  created () {
  },

  mounted () {
    setTimeout(() => {
      if (this.$store.state.filteredType !== null && this.$store.state.typeOfFilter !== null) {
        this.GET_FLAGS({ type: this.typeOfFilter, filtered: this.filteredType })
      } else {
        this.GET_FLAGS()
      }
    }, 500)
    setTimeout(() => {
      this.loading = false
    }, 1000)
  },

  computed: {
    ...mapState(['allFlags', 'load', 'typeOfFilter', 'filteredType', 'itemsToShow'])
  },

  watch: {
    load () {
      this.changeLoadingStatus()
    }
  },

  methods: {
    ...mapActions(['GET_FLAGS']),
    ...mapMutations(['CHANGE_PAGINATION']),

    listItems () {
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
    },

    totalPages () {
      const allFlags = []
      for (const i in this.allFlags) {
        allFlags.push(this.allFlags[i].flag)
        console.log(this.allFlags[i].name)
      }
      const total = allFlags.length / 10
      console.log(allFlags.length)
      return total !== Infinity ? Math.ceil(total) : 0
    },

    async changeLoadingStatus () {
      this.loading = true
      setTimeout(() => {
        this.loading = true
      }, 500)
      setTimeout(() => {
        this.loading = false
      }, 900)
    },

    async sendCountryToViewIt (alphaCode) {
      setTimeout(() => {
        this.GET_FLAGS({ type: 'alpha', filtered: alphaCode })
      }, 1000)
      this.$router.push({ name: 'Country', params: { alpha: alphaCode } })
    }
  }
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

div .active {
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
