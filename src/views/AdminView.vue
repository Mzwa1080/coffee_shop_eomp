<template>
  <div class="background">
    <div class="row">
      <NavbarComp />

      <h1>Admin page</h1>
      <h1>Display</h1>

      


      <div class="container">
        <div class="container">
            <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Item No</th>
              <th scope="col">Item Image</th>
              <th scope="col">Item Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Edit Item</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"></th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            <!-- <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry the Bird</td>
              <td>@twitter</td>
              <td>@twitter</td>
              <td>@twitter</td>
              <td>@twitter</td>
            </tr> -->
          </tbody>
        </table>
        </div>
        
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
    users(){
      return this.$store.state.users
    },

  },

  mounted(){
    this.$store.dispatch('fetchUsers')
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
  opacity: 0.4;
}
</style>
