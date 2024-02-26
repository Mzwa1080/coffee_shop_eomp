<template>
<nav class="navbar d-flex background-img navbar-expand-lg ">
  <div class="container-fluid justify-content-center">

    <button class="navbar-toggler collor" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon collor"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink to="/" class="nav-link collor" aria-current="page" >Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/about" class="nav-link collor" >About</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/products" class="nav-link collor" >Products</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/admin" class="nav-link collor" >Admin</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/contact" class="nav-link collor" >Contact</RouterLink>
        </li>
      </ul>
      <div class="collorr">
        <a class="navbar-brand collor HZ" href="/">HZ</a>

      </div>
    </div>


  </div>
</nav>
</template>

<script>
    export default {
        name : 'NavBarComp'
    }
</script>

<style scoped>


.collor{
    /* background-color: #F7E1BC; */
    color: #F7E1BC;
}
.collorr{
    /* background-color: #F7E1BC; */
    color: #F7E1BC;
    border: 5px solid #F7E1BC;
    border-radius: .4rem;
    width: 80px;
    
}

.HZ{
  font-size: 30px;
}
.logo-border{
  border-style: 1px solid red;
}

/* .background-img{
    background-image: url('https://i.ibb.co/Jm86SfK/fahmi-fakhrudin-nzyz-AUsb-V0-M-unsplash.jpg" alt="fahmi-fakhrudin-nzyz-AUsb-V0-M-unsplash');
    background-size: cover;
} */
nav{
  box-shadow: .1vw .2vw .4vw .1vw;
}

</style>