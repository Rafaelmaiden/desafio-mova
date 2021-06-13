<template>
  <div>
    <b-form-group
      :label="textTypeFiltered"
      label-for="filterByType">
      <b-form-select
        id="filterByType"
        @change="changeTypeFiltered()"
        v-model="filteredType"
        >
        <template #first>
          <b-form-select-option selected :value="null" disabled> Escolha uma {{ textTypeFiltered }} </b-form-select-option>
        </template>
        <b-form-select-option
          v-show="this.typeOfFilter !== 'language'"
          v-for="(type, ind) in optionsOfFilterType" :key="ind" > {{ type }}
        </b-form-select-option>
        <b-form-select-option
          v-show="this.typeOfFilter === 'language'"
          v-for="(lang, index) in languages" :key="index" :value="lang.iso639_1"> {{ lang.name }}
        </b-form-select-option>
      </b-form-select>
    </b-form-group>

  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      filteredType: null,
      optionsOfFilterType: [],
      languages: [],
      allCountries: [],
      allFilteredCountries: [],
      allCallingCodes: []
    }
  },

  mounted () {
    this.getCountries()
  },

  computed: {
    ...mapState(['typeOfFilter', 'textTypeFiltered'])
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
      await this.$store.commit('CHANGING_FILTERED_TYPE', this.filteredType)
    },

    async getFilters () {
      if (this.typeOfFilter === 'region') {
        this.optionsOfFilterType = [
          { text: 'Africa', value: 'africa' },
          { text: 'Americas', value: 'americas' },
          { text: 'Ásia', value: 'asia' },
          { text: 'Europa', value: 'europe' },
          { text: 'Oceania', value: 'oceania' }
        ]
      } else if (this.typeOfFilter === 'capital') {
        this.getAllCapitals()
      } else if (this.typeOfFilter === 'language') {
        this.getAllLanguages()
      } else if (this.typeOfFilter === 'country') {
        this.getAllCountries()
      } else if (this.typeOfFilter === 'callingCode') {
        this.getAllCallingCodes()
      }
    },

    async getAllCapitals () {
      const allCapitals = []

      for (const i in this.allCountries) {
        allCapitals.push(this.allCountries[i].capital)
      }
      this.optionsOfFilterType = allCapitals.filter(item => item !== '')
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
        this.allFilteredCountries.push(this.allCountries[country].name)
      }
      this.optionsOfFilterType = this.allFilteredCountries.filter(item => item !== '')
    },

    async getAllCallingCodes () {
      for (const codes in this.allFlags) {
        this.allCallingCodes.push(this.allFlags[codes].callingCodes)
      }
      this.optionsOfFilterType = this.allCallingCodes.filter(item => item !== '')
    }
  }
}
</script>
