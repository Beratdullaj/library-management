<template>
  <section>
    <div v-if="this.assets" class="row justify-content-center">
      <div class="col-5 col-md-8 col-lg-8">
        <div class="flex">          
        <h3> {{  this.assets.type}}</h3>
          <p>Cmimi: {{ this.assets.price }}</p>
        </div>
        <DropAssets
          :assetsId="this.$route.params.id"
          :initialFiles="assets.files"
        />
      </div>
    </div>
  </section>
</template>

<script>
import apiRequest from "../utility/apiRequest";
import DropAssets from "@/components/form/DropAssets";

export default {
  components: {
    DropAssets,
  },
  created() {
    this.fetchAssets();
  },
  data() {
    return {
      assets: null,
    };
  },
  methods: {
    async fetchAssets() {
      this.assets = await apiRequest.getAssets(this.$route.params.id);
    },
  },
  
};
</script>