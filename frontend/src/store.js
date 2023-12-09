import { createStore } from "vuex";
import router from './router/index.js';

export default createStore({
    state: {
        isLoggedIn: !!localStorage.getItem('token')
    },
    mutations: { // botao
        LOGIN(state) {
            state.isLoggedIn = true // ON
        },
        LOGOUT(state) {
            state.isLoggedIn = false // off
        }
    },

    actions: {
        login({ commit }) {
            commit('LOGIN')
        },
        logout({ commit, dispatch }) {
            commit('LOGOUT')
            dispatch('navigateToLogin')
        },
        navigateToLogin() {
            router.push({name: 'Login'});
        }
    }
})