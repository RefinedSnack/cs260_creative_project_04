import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Catan from '../views/Catan.vue'
import Bohnanza from '../views/Bohnanza.vue'
import SevenWonders from '../views/SevenWonders.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Catan',
        name: 'Catan',
        component: Catan
    },
    {
        path: '/SevenWonders',
        name: 'SevenWonders',
        component: SevenWonders
    },
    {
        path: '/Bohnanza',
        name: 'Bohnanza',
        component: Bohnanza
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router