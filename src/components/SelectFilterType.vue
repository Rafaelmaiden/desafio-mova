<template>
  <div>
    <b-form-group
      label="Filtrar por"
      label-for="select">
      <b-form-select
        style="padding-left: 35px"
        id="select"
        v-model="selected">
      <option :v-model="selected" disabled>
          Escolha uma opção
        </option>
        <option v-for="(types, index) in filterTypes" :key="index" :value="types">
          {{ types.type }}
        </option>
      </b-form-select>
    </b-form-group>
  </div>
</template>

<script>
import { AXIOS } from '@/service'

export default {
  data () {
    return {
      selected: 'Escolha uma opção',
      filterTypes: [
        { type: 'País', value: 'name', serve: 'name' },
        { type: 'Região', value: 'region', serve: 'region' },
        { type: 'Capital', value: 'capital', serve: 'capital' },
        { type: 'Língua', value: 'languages', serve: 'lang' },
        {
          code: 'Código de ligação',
          endpoint: 'callingCodes',
          service: 'callingCodes'
        }
      ]
    }
  },

  created () {
    this.getData()
  },

  methods: {
    async getData () {
      const resp = await AXIOS.get()
      // this.filter = resp#6D2080
      console.log(resp)
    }
  }
}
</script>

<style lang="scss" scoped>
$default-color: #6D2080;

.custom-select {
  border-top: none !important;
  border-left: none !important;
  border-right: none !important;
}

.custom-select:focus {
  box-shadow: none !important;
  border-color: $default-color;
}

.custom-select:active {
  border-color: $default-color;
}

.custom-select:hover {
  border-color: $default-color;
}

</style>
