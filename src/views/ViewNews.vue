<template>
  <section>
    <div v-if="this.news" class="row justify-content-center">
      <div class="col-5 col-md-8 col-lg-8">
        <div class="flex">          
        <h3> {{ this.news.title }}</h3>
          <p><b>Autori:</b> {{ this.news.author }}</p>

          <p>Permbajtja: {{ this.news.description }}</p>
        </div>
        <DropNews
          :newsId="this.$route.params.id"
          :initialFiles="news.files"
        />
      </div>
    </div>
  </section>
</template>

<script>
import apiRequest from "../utility/apiRequest";
import DropNews from "@/components/form/DropNews";

export default {
  components: {
    DropNews,
  },
  created() {
    this.fetchNews();
  },
  data() {
    return {
      news: null,
    };
  },
  methods: {
    async fetchNews() {
      this.news = await apiRequest.getNews(this.$route.params.id);
    },
  },
  
};
</script>
