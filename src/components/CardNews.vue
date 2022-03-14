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
        <p class="card-text"><b>Title:</b> {{ news.title }}</p>
        <p class="card-text"><b>Author:</b> {{ news.author }}</p>

        <p class="card-text"><b>description:</b> {{ news.description }}</p>

        <router-link
          class="btn btn-primary"
          :to="{ name: 'ViewNews', params: { id: news._id } }"
          >View</router-link
        >
        <button type="button" v-if="this.$store.state.user.claims && this.$store.state.user.claims.admin"  class="btn btn-danger ml-3" @click="deleteNews" >Delete </button> 
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import apiRequest from '../utility/apiRequest';
export default {
  props: {
    news: Object,
  },
  computed: {
    src() {
      const filename = this.news.files?.split(";")[0];

      return filename ? `http://localhost:4000/static/${filename}` : null;
    },
    ...mapGetters({
      user: "user",
      claims: "claims",
    }),
  },
  methods: {
     async deleteNews(){
       await apiRequest.deleteNews(this.news._id);

      const result = await apiRequest.getNewsList();
      this.$store.dispatch("fetchNews", result);
    },

  }
};
</script>