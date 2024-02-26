<template>
  <div class="background">
    <div class="row">
      <NavbarComp />
    </div>

    <div class="container">
      <h1>About Page</h1>

      <div class="bordercontent">
        <p>
          At Haa-Zwaa Coffee Shop, we are passionate about bringing you the
          finest coffee experience. Founded in 2024, Haa-Zwaa was born out of
          the shared love for coffee by two individuals at Life Choices Academy.
        </p>

        <p>
          Driven by our love for coffee, we aim to create a welcoming space
          where you can relax, connect, and savor every sip of our carefully
          crafted brews. Our cozy atmosphere and friendly staff ensure that
          every visit to Haa-Zwaa is a memorable one.
        </p>

        <p>
          At Haa-Zwaa, we believe in the power of quality ingredients and
          meticulous craftsmanship. That's why we source the finest beans from
          around the world and roast them to perfection, ensuring that each cup
          is bursting with flavor and aroma.
        </p>

        <p>
          Whether you're a coffee connoisseur or just starting your coffee
          journey, Haa-Zwaa is here to delight your senses and awaken your taste
          buds. Join us at Haa-Zwaa Coffee Shop and experience the magic of
          coffee like never before.
        </p>
      </div>

      <div class="row d-flex justify-content-evenly">
        <h1 class="mt-4 ">Meet the team</h1>
  
        
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

        <Card class="card p-4 m-4 " style="width: 18rem;" >
                <template #cardImgTop>
                  <img class=" card-img-top" src="https://i.ibb.co/8xpdSXM/Screenshot-2024-02-20-135308.png"  >
                
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
  </div>
</template>

<script>
// import Card from "@/components/Card.vue";
import Card from "@/components/Card.vue";
import NavbarComp from "@/components/NavbarComp.vue";

export default {
  name: "AboutViewComp",
  components: {
    NavbarComp,
    Card
},
};
</script>

<style scoped>
.background {
  background-image: url('https://i.ibb.co/qjXx69X/nathan-dumlao-6-Vh-PY27jdps-unsplash.jpg" alt="nathan-dumlao-6-Vh-PY27jdps-unsplash');
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: overlay;
  background-position: center center;
  }
.bordercontent {
  background-color: aliceblue;
  opacity: 0.4;
  height: auto;
  border-radius: 0.5rem;
  font-weight: bolder;
  color: black;
  /* font-size: 20px; */
  padding: 1rem;
}
p {
}
</style>
