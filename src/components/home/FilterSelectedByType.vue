<template>
  <div> {{selectfilteredType}}
    <b-form-group
      :label="textTypeFiltered"
      label-for="filterByType">
      <b-form-select
        id="filterByType"
        @change="changeTypeFiltered()"
        v-model="selectfilteredType"
        >
        <template #first>
          <b-form-select-option selected :value="null" disabled> Escolha uma {{ textTypeFiltered }} </b-form-select-option>
        </template>
        <template v-if="this.typeOfFilter === 'region'">>
          <b-form-select-option
            v-for="(region, index) in regions" :key="index" :value="region.value"> {{ region.text }}
          </b-form-select-option>
        </template>

        <template v-if="this.typeOfFilter === 'capital'">>
          <b-form-select-option
            v-for="(capital, index) in capitals" :key="index" :value="capital"> {{ capital }}
          </b-form-select-option>
        </template>

        <template v-if="this.typeOfFilter === 'language' || this.typeOfFilter === 'lang'">
          <b-form-select-option
            v-for="(lang, index) in languages" :key="index" :value="lang.iso639_1"> {{ lang.name }}
          </b-form-select-option>
        </template>

        <template v-if="this.typeOfFilter === 'country' || this.typeOfFilter === 'name'">>
          <b-form-select-option
            v-for="(country, index) in countries" :key="index" :value="country"> {{ country }}
          </b-form-select-option>
        </template>

        <template v-if="this.typeOfFilter === 'callingcode'">>
          <b-form-select-option
            v-for="(code, index) in callingCodes" :key="index" :value="code"> {{ code }}
          </b-form-select-option>
        </template>

      </b-form-select>
    </b-form-group>

  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      selectfilteredType: null,
      regions: [
        { text: 'Africa', value: 'africa' },
        { text: 'Americas', value: 'americas' },
        { text: 'Ásia', value: 'asia' },
        { text: 'Europa', value: 'europe' },
        { text: 'Oceania', value: 'oceania' }
      ],
      capitals: [],
      languages: [],
      countries: [],
      callingCodes: [],
      allCountries: []
    }
  },

  created () {
    this.$store.state.filteredType === 'region' ? this.selectfilteredType = this.$store.selectfilteredType : this.selectfilteredType = null
  },

  mounted () {
    this.getCountries()
    this.changeTypeFiltered()
  },

  computed: {
    ...mapState(['typeOfFilter', 'textTypeFiltered', 'filteredType'])
  },

  watch: {
    typeOfFilter () {
      this.getFilters()
    },

    filteredType () {
      this.changeTypeFiltered()
    }
  },

  methods: {
    async getCountries () {
      const { data } = await this.$axios.get('/all')
      this.allCountries = data
    },

    async changeTypeFiltered () {
      if (this.typeOfFilter === 'language') {
        this.$store.commit('CHANGE_TYPE_OF_FILTER', { type: 'lang', textType: this.textTypeFiltered })
      } else if (this.typeOfFilter === 'country') {
        this.$store.commit('CHANGE_TYPE_OF_FILTER', { type: 'name', textType: this.textTypeFiltered })
      }

      this.$store.commit('CHANGING_FILTERED_TYPE', this.selectfilteredType)
    },

    async getFilters () {
      if (this.selectfilteredType !== null) {
        setTimeout(() => {
          this.selectfilteredType = null
        }, 75)
      }

      if (this.typeOfFilter === 'region') {

      } else if (this.typeOfFilter === 'capital') {
        this.getAllCapitals()
      } else if (this.typeOfFilter === 'language' || this.typeOfFilter === 'lang') {
        this.getAllLanguages()
      } else if (this.typeOfFilter === 'country' || this.typeOfFilter === 'name') {
        this.getAllCountries()
      } else if (this.typeOfFilter === 'callingcode') {
        this.getAllCallingCodes()
      }
    },

    async getAllCapitals () {
      const allCapitals = []

      for (const i in this.allCountries) {
        allCapitals.push(this.allCountries[i].capital)
      }
      this.capitals = allCapitals.filter(item => item !== '')
    },

    async getAllLanguages () {
      let allLanguages = []

      for (const langs of this.allCountries) {
        allLanguages.push(langs.languages)
      }

      allLanguages = allLanguages.flat(Infinity)
      const unikLanguages = []

      for (const i of allLanguages) {
        const languageExist = unikLanguages.find(elem => elem.name === i.name)
        if (!languageExist) {
          unikLanguages.push(i)
        }
      }
      this.languages = unikLanguages
    },

    async getAllCountries () {
      for (const country in this.allCountries) {
        this.countries.push(this.allCountries[country].name)
      }
      this.countries = this.countries.filter(item => item !== '')
    },

    async getAllCallingCodes () {
      for (const codes in this.allCountries) {
        this.callingCodes.push(this.allCountries[codes].callingCodes[0])
      }
      this.callingCodes = this.callingCodes.filter(item => item !== '')
      const unikCallingCodes = new Set()

      this.callingCodes.forEach((item) => {
        unikCallingCodes.add(item)
      })
      this.callingCodes = [...unikCallingCodes.values()]
    }
  }
}
</script>
