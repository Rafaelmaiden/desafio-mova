<template>
  <div>
    <NavBar/>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from '../components/Navbar'
export default {
  name: 'Default',
  components: {
    NavBar
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss">
  /* .main-content {
    margin-top: 60px;
    margin-bottom: 60px;
  } */

</style>
