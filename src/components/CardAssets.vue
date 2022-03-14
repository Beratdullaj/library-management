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
        <p class="card-text"><b>Type: </b> {{ assets.type }}</p>
        <p class="card-text"><b>Price: </b> {{ assets.price }}</p>

        <router-link
          class="btn btn-primary"
          :to="{ name: 'ViewNews', params: { id: assets._id } }"
          >View</router-link
        >
        <button type="button" v-if="this.$store.state.user.claims && this.$store.state.user.claims.admin"  class="btn btn-danger ml-3" @click="deleteAssets" >Delete </button> 
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import apiRequest from '../utility/apiRequest';
export default {
  props: {
    assets: Object,
  },
  computed: {
    src() {
      const filename = this.assets.files?.split(";")[0];

      return filename ? `http://localhost:4000/static/${filename}` : null;
    },
    ...mapGetters({
      user: "user",
      claims: "claims",
    }),
  },
  methods: {
     async deleteAssets(){
       await apiRequest.deleteAssets(this.assets._id);

      const result = await apiRequest.getAssetsList();
      this.$store.dispatch("fetchAssets", result);
    },

  }
};
</script>