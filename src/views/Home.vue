<template>
  <div class="home">

  <img src="../images/3.jpg" style="width:100%;"/>
    <div v-if="user.data">Hello {{  user.data.email }}</div>
          <router-link class="nav-link" :to="{ name: 'Listing' }"
            ><div>
            <b-button style="width: 40%;">Books</b-button>
            </div>
          </router-link>
  </div>

</template>

<script>
// @ is an alias to /src
import { mapGetters } from "vuex";

export default {
  name: "Home",
  computed: {
    ...mapGetters({
      user: "user",
    }),
  },
};
</script>
