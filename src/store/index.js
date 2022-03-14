import Vue from "vue";
import Vuex from "vuex";
import user from './modules/user';
import menaxhimiLibrarise from "./modules/menaxhimiLibrarise";
import news from "./modules/news";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    menaxhimiLibrarise,
    news,
  },
});
