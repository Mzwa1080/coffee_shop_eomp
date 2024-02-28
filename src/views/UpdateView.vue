<template>
    <!-- <div class="row " v-for="product in products" :key="product.prodID">
        <div class="modal fade" :id="`${product.prodName}` + `${product.prodID}`" role="dialog" data-backdrop="true"
            tabindex="-1" aria-labelledby="updateDatalabel" aria-hidden="false">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5 text-black">Modal title</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body text-black">
                        <div class="mb-3 col-11">
                            <label for="prodID${product.prodID}" class="form-label">Item No</label>
                            <input type="number" class="form-control product-name text-black" :value="product.prodID"
                                id="prodID${product.prodID}" brand-name aria-describedby="emailHelp" />
                        </div>

                        <div class="mb-3 col-11">
                            <label for="prodName${product.prodID}" class="form-label">Item Name</label>
                            <input type="text" class="form-control product-prodName" :value="product.prodName"
                                id="prodName${product.prodID}" brand-prodName aria-describedby="emailHelp" />
                        </div>

                        <div class="mb-3 col-11">
                            <label for="productAmount${product.prodID}" class="form-label">Item Price</label>
                            <input type="number" class="form-control product-productAmount" :value="product.productAmount"
                                id="productAmount${product.prodID}" brand-prodName aria-describedby="emailHelp" />
                        </div>

                        <div class="mb-3 col-11">
                            <label for="prodQuantity${product.prodID}" class="form-label">Quantity</label>
                            <input type="number" class="form-control product-prodQuantity" :value="product.prodQuantity"
                                id="prodQuantity${product.prodID}" brand-prodName aria-describedby="emailHelp" />
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
                            Close
                        </button>
                        <button type="button" class="btn btn-success">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div> -->

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



            <button class="btn btn-success" @click="updatee"> UPDATE </button>

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
        async updatee() {
                await this.$store.dispatch('updateProduct', this.product);

                this.$router.push('/admin');
  
        },
    },
    mounted() {
        this.$store.dispatch('fetchProduct', this.$route.params)
    }
};
</script>

<style scoped></style>
