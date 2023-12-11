// store.js
import { createStore } from "vuex";
import router from './router/index.js';
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    isLoggedIn: !!localStorage.getItem('token'),
    currentUser: null,
  },
  mutations: {
    SET_CURRENT_USER(state, user) {
      state.currentUser = user;
    },
    LOGIN(state) {
      state.isLoggedIn = true;
    },
    LOGOUT(state) {
      state.isLoggedIn = false;
      state.currentUser = null;
      localStorage.removeItem('token');
      localStorage.removeItem('currentUser');
    },
  },
  actions: {
    login({ commit }, user) {
      commit('SET_CURRENT_USER', user);
      commit('LOGIN');
    },
    logout({ commit, dispatch }) {
      commit('LOGOUT');
      dispatch('navigateToLogin');
    },
    navigateToLogin() {
      router.push({ name: 'Login' });
    },
  },
  plugins: [createPersistedState({
    key: 'my-vuex-state',
    paths: ['isLoggedIn', 'currentUser'],
  })],
});

