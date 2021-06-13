<template>
  <div class="pagination">
    <!-- < &nbsp; -->
    <div class="back-page"> ❮ &nbsp; </div>
    <div v-for="(page, index) in pages" :key="index">
      <div class="page">
        {{ page }}
      </div>
    </div>
    <div class="next-page"> &nbsp; ❯</div>
  </div>
</template>

<script>

export default {
  name: 'Pagination',
  data () {
    return {
      pages: ['1', '2', '3', '4', '5']
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
