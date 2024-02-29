<template>


    <div class="container">



        <div class="row">

            <h1>Update your product</h1>
            
            <div class="col" v-if="product">
                <label for="exampleFormControlInput1" class="form-label">Product Name</label>
                <input type="text" class="form-control" :value="product?.prodName" id="exampleFormControlInput1"
                    placeholder="">
            </div>
            <div class="col">
                <label for="exampleFormControlTextarea1" class="form-label">Product Price</label>
                <input type="number" class="form-control" :value="product?.productAmount" id="exampleFormControlInput1"
                    placeholder="60.00">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Product Quantity</label>
                <input type="number" class="form-control" :value="product?.prodQuantity" id="exampleFormControlInput1"
                    placeholder="1">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Product Description</label>
                <input type="text" class="form-control" :value="product?.description" id="exampleFormControlInput1"
                    placeholder="1">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Image Url</label>
                <input type="text" class="form-control" :value="product?.prodUrl" id="exampleFormControlInput1"
                    placeholder="1">
            </div>



            <button class="btn btn-success" type="button" @click="updateProd(product)"> UPDATE </button>

        </div>
    </div>
</template>

<script>
export default {
    name: "UpdateVIew",

    computed: {
        product() {
            return this.$store.state.product
        },
    },
    methods: {
        async updateProd(payload) {
                await this.$store.dispatch('updateProduct',payload );

                // this.$router.push('/admin');
  
        },
    },
    mounted() {
        this.$store.dispatch('fetchProduct', this.$route.params)
    }
};
</script>

<style scoped></style>
