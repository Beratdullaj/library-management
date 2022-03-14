import Vue from "vue";
import Vuex from "vuex";
import user from './modules/user';
import menaxhimiLibrarise from "./modules/menaxhimiLibrarise";
import news from "./modules/news";
import assets from "./modules/assets"
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    menaxhimiLibrarise,
    news,
    assets,
  },
});
