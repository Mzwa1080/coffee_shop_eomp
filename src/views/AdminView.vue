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
          <button type="button" class="btn addItems">
            <span class="material-symbols-outlined">add</span>
          </button>

        </div>

<nav class="navbar d-flex background-img bg navbar-expand-lg ">
  <div class="container-fluid  justify-content-center">

    <button class="navbar-toggler collor" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon collor"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul class="navbar-nav bg-light collor">
        <li class="nav-item">
          <RouterLink to="#" class="  nav-link " aria-current="page" >Products</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/users" class="  nav-link " >Users</RouterLink>
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
              <td><img :src="product.prodUrl" width="80px" height="50px" :alt="product.prodUrl"></td>
              <td>{{product.prodName}}</td>
              <td>R{{ product.productAmount }}</td>
              <td>{{ product.prodQuantity }}</td>
              <td>
                <button type="button" class="btn btn-success"  data-bs-toggle="modal" :data-bs-target="`#${product.prodName}`+ `${product.prodID}`">
                        update
                        </button>
        
                        <!-- Modal -->
                        <div class="modal fade"  :id="`${product.prodName}`+ `${product.prodID}`" tabindex="-1" aria-labelledby="updateDatalabel" aria-hidden="false">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5 text-black " >Modal title</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body text-black ">
        
                                        <div class="mb-3 col-11">
                                            <label for="prodName${product.prodID}" class="form-label">{{ product.prodName}}</label>
                                            <input type="text" class="form-control product-name text-black" :value="product.prodName" id="prodName${product.prodID}"
                                                brand-name aria-describedby="emailHelp">
                                        </div>
        
                                        <div class="mb-3 col-11">
                                            <label for="description${product.prodID}" class="form-label">{{product.description}}</label>
                                            <input type="text" class="form-control product-description" :value="product.description" id="description${product.prodID}"
                                                brand-description aria-describedby="emailHelp">
                                        </div>

                                    
                                    
        
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-danger" onclick='' data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-success " onclick='new EditTheItem(${JSON.stringify(item)}, ${JSON.stringify(i)})' save-btn>Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>

              </td>
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
    update(){
      return this.$store.state.product
    }

  },

  mounted(){
    this.$store.dispatch('fetchProducts')
    this.$store.dispatch('updateProduct')
  },


  

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
  opacity: 0.9;
}
.collor{
  border-radius: 2rem;
}
.modal-dialog {
  pointer-events: unset !important;
}
.sort {
  width: 6rem;
  background-color: #f7e1bc;
  border: 1px solid black;
}
.addItems {
  background-color: #f7e1bc;
  border: 1px solid #f7e1bc;
  width: 6rem;
  border-radius: 0.5em;
}



</style>
