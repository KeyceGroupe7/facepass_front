import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Face from '../views/Face.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Root',
        component: Home
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/face',
        name: 'Face',
        component: Face
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router