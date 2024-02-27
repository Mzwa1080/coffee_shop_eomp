<template>
  <div class="background">
    <div class="row">
      <NavbarComp />
    </div>

    <div class="container">
      <h1>Users</h1>

      <div class="row d-flex justify-content-evenly">
        <!-- must have sort and sear button displayed flex, -->
        <div class="col">
          <button type="button" class="btn btn-submit sort">Sort</button>
        </div>
        <div class="col">
          <input
            type="text"
            style="height: 40px"
            placeholder="search "
            class="search"
          />
        </div>

        <nav class="navbar d-flex background-img navbar-expand-lg">
          <div class="container-fluid justify-content-center">
            <button
              class="navbar-toggler collor"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div   class="collapse navbar-collapse justify-content-center" id="navbarNav"  >
              <ul class="navbar-nav bg-light collor">
                <li class="nav-item">
                  <RouterLink  to="/admin"   class="nav-link "  aria-current="page"
                    >Products</RouterLink  >
                </li>

                <li class="nav-item">
                  <RouterLink to="/users" class="nav-link "
                    >Users</RouterLink
                  >
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <!-- must collect cards that will display all products -->
        <!-- when selecting a products, you must router to a product page a single page of a selected product -->

        <div class="row d-flex justify-content-center" v-if="users">
          <div class="container table-responsive py-5">
            <table class="table table-hover" >
              <thead>
                <tr>
                  <th scope="col">User No</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Age</th>
                  <th scope="col">Email</th>
                  <th scope="col">Role</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody v-for="userss in users" :key="userss.prodID">
                <tr>
                  <th scope="row">{{ userss.userID }}</th>
                  <td>
                    {{ userss.firstName }}
                  </td>
                  <td>{{ userss.lastName }}</td>
                  <td>{{ userss.userAge }}</td>
                  <td>{{ userss.emailAdd }}</td>
                  <td>{{ userss.userRole }}</td>
                  <td>
                <button type="button" class="btn btn-success">edit</button>
                <button type="button" class="btn btn-danger" onclick="deleteUser">delete</button>

              </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="row mx-auto" v-else>
          <Spinner />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarComp from "@/components/NavbarComp.vue";
import Spinner from "@/components/Spinner.vue";
export default {
  name: "UsersComp",
  components: {
    NavbarComp,
    Spinner,
  },

  computed: {
    users() {
      return this.$store.state.users;
    },
    deleteUser(){
        return this.$store.state.user;
    }

  },


  mounted() {
    this.$store.dispatch("fetchUsers"),
    this.$store.dispatch('fetchProduct', this.$route.params) },
};
</script>

<style scoped>
.search {
  background-color: #f7e1bc;
  border: 1px solid #f7e1bc;
  width: 8rem;
  border-radius: 0.5em;
}
.sort {
  width: 8rem;
  background-color: #f7e1bc;
  border: 1px solid black;
}
.collor{
    border-radius: 2rem;
}
.background {
  background-image: url('https://i.ibb.co/ncqwf8z/nathan-dumlao-Y3-Aqmbmt-LQI-unsplash.jpg" alt="nathan-dumlao-Y3-Aqmbmt-LQI-unsplash');
  background-size: cover;
  background-blend-mode: soft-light;
  background-position: center center;
}
</style>
