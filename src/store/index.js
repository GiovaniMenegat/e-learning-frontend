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
    token: ''
  },
  getters: {
    getUser: state => state.user,
    getToken: state => state.token,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setToken(state, payload) {
      state.token = payload;
    },
  },
  actions: {
    setUser({ commit }, payload) {
      commit('setUser', payload);
    },
    setToken({ commit }, payload) {
      commit('setToken', payload);
    },
  },
  modules: {
  },
  plugins: [vuexLocalStorage.plugin]
})
