<template>
  <div class="background">
    <div class="row">
      <NavbarComp />
    </div>

    <div class="container">
      <h1>Products</h1>

      <div class="row d-flex justify-content-evenly">
        <!-- must have sort and sear button displayed flex, -->
        <button type="button" class="btn btn-submit sort ">Sort</button>

        <input type="text" placeholder="search " class="search m-2 " />
        <!-- must collect cards that will display all products -->
        <!-- when selecting a products, you must router to a product page a single page of a selected product -->

        <div class="row d-flex justify-content-center" v-if="products">
          <Card class="card m-2 " style="width: 16rem;" v-for="product in products"
            :key="product.products_id"
          >
            <template #cardImgTop>
              <img class=" m-4" style="height: 200px;" :src="product.prodUrl" :alt="product.prodName" />
            </template>
            <template #cardHeader>
              <h4 class="card-title">{{ product.prodName }}</h4>
            </template>
            <template #cardBody>
              <p class="card-text text-dark bg-gradient bg-dark-subtle p-2">
                Quantity: {{ product.prodQuantity }}
              </p>
              <p class="card-text text-dark bg-gradient bg-dark-subtle p-2">
                Amount: R{{ product.productAmount }}
              </p>
              <router-link
                :to="{ name: 'product', params: { id: product.prodID } }"
                >View More</router-link
              >
            </template>
          </Card>
        </div>
        <div class="row" v-else>
          <p class="lead">Loading</p>
        </div>
      </div>
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
    Card,
  },

  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
  },
};
</script>

<style scoped>
.search {
  background-color: #f7e1bc;
  border: 1px solid #f7e1bc;
  width: 10rem;
  border-radius: 0.5em;
}
.sort {
  width: 10rem;
  background-color: #f7e1bc;
  border: 1px solid black;
}
.background {
  background-image: url('https://i.ibb.co/ncqwf8z/nathan-dumlao-Y3-Aqmbmt-LQI-unsplash.jpg" alt="nathan-dumlao-Y3-Aqmbmt-LQI-unsplash');
  background-size: cover;
  background-blend-mode: soft-light;
  background-position: center center;
}
</style>
