<template>
  <b-navbar toggleable="lg" >
    <b-navbar-brand href="/">
      <img src="../assets/img/logo_principal.png" alt="logo"/>
    </b-navbar-brand>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">
      <router-link v-if="this.$route.path !== '/home'" to="/">
        <b-button variant="outline-light">
          <img src="../assets/img/go_back.svg" alt="Voltar"/>
          Voltar
        </b-button>
      </router-link>
    </b-navbar-nav>
  </b-navbar>
</template>

<style lang="scss" scoped>
$border-button: #6D2080;

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 4px 4px 0px #00000040 !important;
  /* box-shadow: 0px 0px 10px 0px #727272 !important; */
  padding: 0 67px;
  min-height: 100px;
}

.btn {
  background: #fff;
  border: 1.5px solid $border-button;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 134px;
  min-height: 36px;
  color: $border-button;
  font-size: 17px;
  padding-left: 1rem;
  padding-right: 1rem;
}
</style>
