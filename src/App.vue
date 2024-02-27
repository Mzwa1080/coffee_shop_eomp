<template>

  <!-- <NavbarComp /> -->
  
  <!-- <main class="container-fluid"> -->

  <router-view/>
<!-- </main> -->


</template>

<script>
// import NavbarComp from './components/NavbarComp.vue';

  export default {

    components : {
      // NavbarComp
    }
  }

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kavoon&family=Lobster&family=Londrina+Solid&family=Roboto:wght@100;300&family=Salsa&display=swap');

#app {
  font-family: "Kavoon", serif;
  font-weight: 400;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #F7E1BC;
  background-color: #54372B;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #F7E1BC;
}

nav a.router-link-exact-active {
  color: #42b983;
  background-color: #54372B;
}
</style>
