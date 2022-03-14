<template>
  <section>
    <div v-if="this.menaxhimiLibrarise" class="row justify-content-center">
      <div class="col-5 col-md-8 col-lg-8">
        <div class="flex">
          <h1>
            {{ this.menaxhimiLibrarise.type }}
          </h1>
          <p>Autori: {{ this.menaxhimiLibrarise.author }}</p>
          <p>Titulli: {{ this.menaxhimiLibrarise.title }}</p>
          <p>Faqe: {{ this.menaxhimiLibrarise.page }}</p>
          <p>Cmimi: {{ this.menaxhimiLibrarise.price }}</p>
        </div>
        <Dropzone
          :menaxhimiLibrariseId="this.$route.params.id"
          :initialFiles="menaxhimiLibrarise.files"
        />
      </div>
    </div>
  </section>
</template>

<script>
import apiRequest from "../utility/apiRequest";
import Dropzone from "@/components/form/Dropzone";

export default {
  components: {
    Dropzone,
  },
  created() {
    this.fetchMenaxhimiLibrarise();
  },
  data() {
    return {
      menaxhimiLibrarise: null,
    };
  },
  methods: {
    async fetchMenaxhimiLibrarise() {
      this.menaxhimiLibrarise = await apiRequest.getMenaxhimiLibrarise(this.$route.params.id);
    },
  },
};
</script>
