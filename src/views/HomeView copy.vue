<template>
  <div class="background">
     <NavbarComp />
    
    <div class="container">

      <div class=" push ">
        <!-- <h1 class="col-3 pt-5 hazwa">HAA-ZWA</h1> <br>
        <h1 class="col-3 pt-5  coffee-shop">Coffee Shop </h1> -->

        <div class="col-3  pt-5">
            <h1 class="hazwa">HAA-ZWA</h1>
            <h1 class="coffee-shop">Coffee Shop</h1>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import NavbarComp from '@/components/NavbarComp.vue';

// @ is an alias to /src

export default {
  
  name: 'HomeView',
  components: {
    NavbarComp
}
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Damion&family=Kavoon&family=Lobster&family=Londrina+Solid&family=Roboto:wght@100;300&family=Salsa&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Damion&family=Dancing+Script:wght@400..700&family=Kavoon&family=Lobster&family=Londrina+Solid&family=Roboto:wght@100;300&family=Salsa&display=swap');
.hazwa{
  font-family: "Damion", cursive;
  font-weight: 800;
  font-style: bolder;
  font-size: 3rem;
}
.coffee-shop, .hazwa{
  -webkit-text-stroke: 1px black;
   /* color: white; */
   text-shadow:
       3px 3px 0 #fff,
     -2px -2px 0 #000,  
      2px -2px 0 #fff,
      /* -2px 2px 0 #000, */
       2px 2px 0 #fff;

  font-family: "Dancing Script", cursive;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: normal;
  font-size: 3rem;
}
h1{
  /* box-shadow: .1vw .1vw .1vw .1vw; */

}
.push{
  padding-top: 10rem;
}
.background{
  background-image: url('https://i.ibb.co/Jm86SfK/fahmi-fakhrudin-nzyz-AUsb-V0-M-unsplash.jpg" alt="fahmi-fakhrudin-nzyz-AUsb-V0-M-unsplash');
  height: 800px;
  background-size: cover;
  background-blend-mode: soft-light;
  background-position: center center;
}
</style>