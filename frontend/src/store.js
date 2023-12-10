import { createStore } from "vuex";
import router from './router/index.js';

export default createStore({
    state: {
        isLoggedIn: !!localStorage.getItem('token')
    },
    mutations: {
        LOGIN(state) {
            state.isLoggedIn = true;
            // console.log('Usuário logado:', state.isLoggedIn);
        },
        LOGOUT(state) {
            state.isLoggedIn = false;
            localStorage.removeItem('token'); // Remova o token do localStorage durante o logout
            // console.log('Usuário deslogado:', state.isLoggedIn);
        }
    },
    actions: {
        login({ commit }) {
            commit('LOGIN');
        },
        logout({ commit, dispatch }) {
            commit('LOGOUT');
            dispatch('navigateToLogin');
        },
        navigateToLogin() {
            router.push({ name: 'Login' });
        }
    }
});
