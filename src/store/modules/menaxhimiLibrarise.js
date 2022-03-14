const state = () => ({
    list: [],
  });
  
  const mutations = {
    SET_LIST(state, list) {
      state.list = list;
    },
  };
  
  const actions = {
    fetchMenaxhimiLibrarise({ commit }, list) {
      commit("SET_LIST", list);
    },
  };
  
  const getters = {
    menaxhimiLibrariseList(state) {
      return state.list;
    },
  };
  
  export default {
    state,
    mutations,
    actions,
    getters,
  };
  