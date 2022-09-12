import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

Vue.use(Vuex)

const vuexLocalStorage = new VuexPersist({
  key: 'vuex',
  storage: window.localStorage,
})

export default new Vuex.Store({
  state: {
    user: '',
  },
  getters: {
    getUser: state => state.user,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    setUser({ commit }, payload) {
      commit('setUser', payload);
    },
  },
  modules: {
  },
  plugins: [vuexLocalStorage.plugin]
})
