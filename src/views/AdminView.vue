<template>
  <div class="background">
    <div class="row">
      <NavbarComp />

      <h1>Admin page</h1>

      <div class="row d-flex justify-content-evenly">
        <!-- must have sort and sear button displayed flex, -->
        <div class="col">
          <button type="button" class="btn btn-submit sort ">Sort</button>

        </div>
        <div class="col">
          <input type="text" style="height: 40px;" placeholder="search " class="search  " />

        </div>

<nav class="navbar d-flex background-img navbar-expand-lg ">
  <div class="container-fluid justify-content-center">

    <button class="navbar-toggler collor" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon collor"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink to="#" class="nav-link collor" aria-current="page" >Products</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/users" class="nav-link collor" >Users</RouterLink>
        </li>
        
      </ul>
    </div>


  </div>
</nav>
</div>
      


        <div class="container">
            <table class="table table-hover" v-if="products">
          <thead>
            <tr >
              <th scope="col">Item No</th>
              <th scope="col">Item Image</th>
              <th scope="col">Item Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Edit Item</th>
            </tr>
          </thead>
          <tbody v-for="product in products" :key="product.prodID">
            <tr>
              <th scope="row">{{product.prodID}}</th>
              <td><img :src="product.prodUrl" width="50px" height="50px" :alt="product.prodUrl"></td>
              <td>{{product.prodName}}</td>
              <td>R{{ product.productAmount }}</td>
              <td>{{ product.prodQuantity }}</td>
            </tr>
            
          </tbody>
        </table>

        </div>
        

    </div>
  </div>
</template>

<script>
import NavbarComp from "@/components/NavbarComp.vue";

export default {
  name: "AdminView",
  components: { NavbarComp },


  computed : {
    products(){
      return this.$store.state.products
    },

  },

  mounted(){
    this.$store.dispatch('fetchProducts')
  }
  
  

};
</script>

<style scoped>
.background {
  background-image: url('https://i.ibb.co/rxm0PNY/nolan-issac-It0-DCa-CBr40-unsplash.jpg" alt="nolan-issac-It0-DCa-CBr40-unsplash');
  height: 800px;
  background-size: cover;
  /* opacity: .99; */
  background-blend-mode: soft-light;
  background-position: center center;
}
table {
  opacity: 0.7;
}
</style>
