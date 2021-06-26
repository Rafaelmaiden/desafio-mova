<template>
  <b-navbar toggleable="lg" >
    <b-navbar-brand href="/">
      <img src="../assets/img/logo_principal.png" alt="logo"/>
    </b-navbar-brand>
    <b-navbar-nav class="ml-auto">
      <router-link v-if="this.$route.path !== '/home'" :to="{ name: 'Home' }">
        <img class="small" src="../assets/img/back-small.png" alt="Voltar"/>
        <img class="big" src="../assets/img/back-big.png" alt="Voltar"/>
      </router-link>
    </b-navbar-nav>
  </b-navbar>
</template>

<style lang="scss" scoped>
$border-button: #6D2080;

.navbar {
  display: flex;
  min-width: 100%;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 4px 4px 0px #00000040 !important;
  padding: 0 67px 0 42px;
  min-height: 100px;
}

.small {
  display: none !important;
}

.big {
  display: block !important;
}

@media screen and (max-width: 550px) {
  .navbar {
    padding: 0 20px 0 20px;
  }

  .big {
    display: none !important;
  }

  .small {
    display: block ! important;
  }

}
</style>
