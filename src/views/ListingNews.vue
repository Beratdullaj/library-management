<template>
  <section>
    <div class="container">
      <div class="row">
        <CardNews
          v-for="entry in newsList"
          :key="entry._id"
          :news="entry"
        />
      </div>
    </div>
  </section>
</template>


<script>
import CardNews from "@/components/CardNews.vue"
import { mapGetters } from "vuex";
import apiRequest from '../utility/apiRequest';
export default {
  components:{
    CardNews,
  },
  created() {
    this.fetchNews();
  },
  methods: {
    async fetchNews() {
      const result = await apiRequest.getNewsList();
      this.$store.dispatch("fetchNews", result);
    },
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      user: "user",
      claims:"claims",
      newsList: "newsList",
    }),
  },
};

</script>