import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    name: "name"
};

const mutations = {
    updateName(state, payload) {
      state.name = payload.name;
    }
  };

const store = new Vuex.Store({
    state,
    mutations
  });

  export default store;