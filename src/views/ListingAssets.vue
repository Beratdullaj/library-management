<template>
  <section>
    <div class="container">
      <div class="row">
        <CardAssets
          v-for="entry in assetsList"
          :key="entry._id"
          :assets="entry"
        />
      </div>
    </div>
  </section>
</template>


<script>
import CardAssets from "@/components/CardAssets.vue"
import { mapGetters } from "vuex";
import apiRequest from '../utility/apiRequest';
export default {
  components:{
    CardAssets,
  },
  created() {
    this.fetchAssets();
  },
  methods: {
    async fetchAssets() {
      const result = await apiRequest.getAssetsList();
      this.$store.dispatch("fetchAssets", result);
    },
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      user: "user",
      claims:"claims",
      assetsList: "assetsList",
    }),
  },
};

</script>