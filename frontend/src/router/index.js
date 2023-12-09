import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Dashboard from "../pages/Dashboard.vue";
import Login from "../pages/auth/Login.vue";
import Register from "../pages/auth/Register.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {public: true}
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard
        },
        {
            path: '/auth/login',
            name: 'login',
            component: Login,
            meta: {public: true}
        },
        {
            path: '/auth/register',
            name: 'register',
            component: Register,
            meta: {public: true}
        }
    ]

    
});

router.beforeEach((to, from, next) => {
    const isAuthenticated = !!localStorage.getItem('token');

    if(!to.meta.public &&!isAuthenticated) {
        next({name: 'Login'});
    } else {
        next();
    }
});

export default router;