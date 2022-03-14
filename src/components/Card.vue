<template>
  <div class="col-lg-4 mt-4 col-md-6 col-sm-12">
    <div class="card">
      <img
        v-if="src"
        :src="src"
        class="card-img-top"
        style="max-height: 320px"
      />
      <div class="card-body">
        <h5 class="card-title">{{ menaxhimiLibrarise.type }}</h5>
        <p class="card-text"><b>Author:</b> {{ menaxhimiLibrarise.author }}</p>
        <p class="card-text"><b>Title:</b> {{ menaxhimiLibrarise.title }}</p>
        <p class="card-text"><b>Price:</b> {{ menaxhimiLibrarise.price }} <b>€ </b></p>
        <p class="card-text"><b>Numer of pages:</b> {{ menaxhimiLibrarise.page }}</p>
        <router-link
          class="btn btn-primary"
          :to="{ name: 'View', params: { id: menaxhimiLibrarise._id } }"
          >View</router-link
        >
        <button type="button" v-if="this.$store.state.user.claims && this.$store.state.user.claims.admin"  class="btn btn-danger ml-3" @click="deleteMenaxhimiLibrarise" >Delete </button> 
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import apiRequest from '../utility/apiRequest';
export default {
  props: {
    menaxhimiLibrarise: Object,
  },
  computed: {
    src() {
      const filename = this.menaxhimiLibrarise.files?.split(";")[0];

      return filename ? `http://localhost:4000/static/${filename}` : null;
    },
    ...mapGetters({
      user: "user",
      claims: "claims",
    }),
  },
  methods: {
     async deleteMenaxhimiLibrarise(){
       await apiRequest.deleteMenaxhimiLibrarise(this.menaxhimiLibrarise._id);

      const result = await apiRequest.getLibrariaList();
      this.$store.dispatch("fetchMenaxhimiLibrarise", result);
    },

  }
};
</script>