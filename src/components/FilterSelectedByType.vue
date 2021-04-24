<template>
  <div>
    <b-form-input list="filterTypeList"></b-form-input>
    <datalist id="filterTypeList">
      <option v-for="type in filterTypeList" :key="type">{{ type }}</option>
    </datalist>

  </div>
</template>

<script>

export default {
  data() {
    return {
      filterTypeList: []
    }
  },
}
</script>
