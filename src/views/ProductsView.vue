<template>
    <div class="background">
        <div class="row">
          <NavbarComp />
        </div>

        <div class="container">
          <h1>Products</h1>
      
          <div class="row d-flex justify-content-between">
              <!-- must have sort and sear button displayed flex, -->
              <button type="button" class="btn btn-submit sort">Sort</button>
      
              <input type="text" placeholder="search" class="search" >
              <!-- must collect cards that will display all products -->
              <!-- when selecting a products, you must router to a product page a single page of a selected product -->
          </div>
      
          <div class="row" v-if="products">
            <Card class="card m-4" style="width: 18rem;" v-for="product in products" :key="product.products_id" >
              <template #cardImgTop>
                <img class="w-25" src="{{ product.products_url }}" >
              </template>
                <template #cardHeader>
                    <h4 class="card-title">{{ product.products_name }}</h4>
                </template>
                <template #cardBody>
                    <!-- <p class="card-text text-dark bg-gradient bg-dark-subtle p-2">
                        Quantity: {{ product.quantity }}
                    </p>
                    <p class="card-text text-dark bg-gradient bg-dark-subtle p-2">
                        Amount: R{{ product.amount }}
                    </p>
                    <router-link :to="{name: 'product', params:{id:product.products_id}}" class="btn btn-success"> view more</router-link> -->
                </template>
            </Card>

          </div>
          <div class="row" v-else>
            <p class="lead">Loading...</p>
          </div>
          
          <Card class="card p-4 m-4" style="width: 18rem;" >
              <template #cardImgTop>
                <img class=" card-img-top" src="https://i.ibb.co/FWVvhNt/Screenshot-2024-02-20-134757.png" alt="Screenshot-2024-02-20-134757" >
              
              </template>

                <template #cardHeader>
                    <h4 class="card-title">Haanim</h4>
                </template>

                <template #cardBody>
                    <p class="card-text">The founder</p>
                </template>

      </Card>



        </div>
    </div>

</template>

<script>
import NavbarComp from "@/components/NavbarComp.vue";
import Card from "@/components/Card.vue";
export default {
  name: "ProductsComp",
  components: {
    NavbarComp,
    Card
  },

  computed:{
        products(){
            return this.$store.state.products
        }
    },
    mounted() {
        this.$store.dispatch('fetchProducts')
    }
};
</script>

<style scoped>
.search{
    background-color: #F7E1BC;
    border: 1px solid #F7E1BC;
    width: 10rem;
    border-radius: .5em;
    }
.sort{
    width: 10rem;
    background-color: #F7E1BC;
    border: 1px solid black;
}
.background{
    background-image: url('https://i.ibb.co/ncqwf8z/nathan-dumlao-Y3-Aqmbmt-LQI-unsplash.jpg" alt="nathan-dumlao-Y3-Aqmbmt-LQI-unsplash');
    background-size: cover;
    height: 800px;
    background-blend-mode: soft-light;
    background-position: center center;
}
</style>
