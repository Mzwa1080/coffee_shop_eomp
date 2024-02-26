<template>
    <div class="row">
        <NavbarComp />
    </div>

    <div class="ro">
        <h1>This is a select product page</h1>

    </div>

    <div class="row">
        <div class="box">
            <Card >
                <!-- <template #cardImgTop>
                    <img :src="product.prodUrl" alt="">

                </template>

                <template #cardHeader>
                    <h4 class="card-title">{{ product.prodName }}</h4>
                </template> -->

            

            </Card>
        </div>
    </div>

    
</template>

<script>
import NavbarComp from '@/components/NavbarComp.vue';
import Card from '../components/Card.vue'
    export default {
    name: 'ProductViewComp',
    components: { NavbarComp,
    Card },
    
    methods:{
        product(){
            return this.$store.state.product
        },
    
    },
    mounted(){
        this.$store.dispatch('fetchProduct')
    }
}
</script>

<style scoped>


</style>