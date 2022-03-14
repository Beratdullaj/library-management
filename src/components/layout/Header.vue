<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="d-flex flex-row">
      <a class="navbar-brand">Menaxhimi Librarise App</a>
      <ul class="navbar-nav flex-row">
        <li class="nav-item mr-2">
          <router-link class="nav-link" :to="{ name: 'Home' }"
            >Home
          </router-link>
         </li>

        <li class="nav-item mr-2">
          <router-link class="nav-link" :to="{ name: 'Listing' }"
            >Books
          </router-link>
        </li>
        <li class="nav-item mr-2">
          <router-link class="nav-link" :to="{ name: 'ListingAssets' }"
            >Assets
          </router-link>
        </li>
        <li class="nav-item mr-2">
          <router-link class="nav-link" :to="{ name: 'ListingNews' }"
            >News
          </router-link>
        </li>
        <li v-if="this.$store.state.user.claims && this.$store.state.user.claims.admin" class="nav-item mr-2">
          <router-link  class="btn btn-primary" :to="{ name: 'Create' }"
            >Add Book
          </router-link>
        </li>
        <li v-if="this.$store.state.user.claims && this.$store.state.user.claims.admin" class="nav-item mr-2">
          <router-link  class="btn btn-primary" :to="{ name: 'CreateAssets' }"
            >Add Assets
          </router-link>
        </li>
        <li v-if="this.$store.state.user.claims && this.$store.state.user.claims.admin" class="nav-item mr-2">
          <router-link  class="btn btn-primary" :to="{ name: 'CreateNews' }"
            >Add News
          </router-link>
        </li>
        <li class="nav-item mr-2">
          <router-link class="nav-link" :to="{ name: 'About' }"
            >About Us
          </router-link>
        </li>
        <li v-if="!this.$store.state.user.claims"  class="nav-item mr-2">
          <router-link class="btn btn-success" :to="{ name: 'Login' }"
            >Login
          </router-link>
        <li  v-if="!this.$store.state.user.claims"  class="nav-item mr-2">
          <router-link class="btn btn-primary" :to="{ name: 'Register' }"
            >Register
          </router-link>
        </li>
      </ul>

    </div>


    <div>
        <!-- <div v-if="!this.$store.state.user.claims"  class="justify-content-end ">
        <router-link class="btn btn-success mr-2" :to="{ name: 'Login' }"
            >Login
        </router-link>

                  <router-link class="btn btn-primary mr-2" :to="{ name: 'Register' }"
            >Register
          </router-link>
          </div> -->
      <ul
        v-if="user && user.data"
        class="navbar-nav d-flex flex-row align-items-center"
      >
        <div style="color: white;" class="mr-4">
          
          <p class="mb-0">Hello {{ user.data.email }} !</p>
        </div>
        <li class="nav-item dropdown">
          <img
            class="rounded-circle dropdown-toggle"
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            style="width: 30px; height: 30px"
            alt="user-avatar"
          />
          <ul class="dropdown-menu position-absolute dropdown-menu-right">
            <li>
              <a class="dropdown-item disabled">Profile</a>
            </li>
            <li>
              <a class="dropdown-item disabled">Settings</a>
            </li>
            <li>
              <a @click="handleLogout" class="dropdown-item">Logout</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script> 
import { getAuth, signOut } from '@firebase/auth';
import { mapGetters } from "vuex";
export default {

  computed: {
    ...mapGetters({
      user: "user",
      claims: "claims",
    }),
  },
  methods:{
    handleLogout(){
      signOut(getAuth());
    }
  }
};
</script>

<style>
.dropdown-menu {
  display: none;
}

.nav-item:hover .dropdown-menu {
  display: block;
}
</style>
