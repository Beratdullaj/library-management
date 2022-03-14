<template>
  <section>
    <div class="container">
      <div class="row">
        <Card
          v-for="entry in menaxhimiLibrariseList"
          :key="entry._id"
          :menaxhimiLibrarise="entry"
        />
      </div>
    </div>
  </section>
</template>


<script>
import Card from "@/components/Card.vue"
import { mapGetters } from "vuex";
import apiRequest from '../utility/apiRequest';
export default {
  components:{
    Card,
  },
  created() {
    this.fetchMenaxhimiLibrarise();
  },
  methods: {
    async fetchMenaxhimiLibrarise() {
      const result = await apiRequest.getLibrariaList();
      this.$store.dispatch("fetchMenaxhimiLibrarise", result);
    },
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      user: "user",
      menaxhimiLibrariseList: "menaxhimiLibrariseList",
    }),
  },
};

</script>