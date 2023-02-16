import { createRouter, createWebHashHistory } from "vue-router";
import MainProperty1 from '../views/MainProperty1.vue';
import MainProperty2 from '../views/MainProperty2.vue';
import MainProperty3 from '../views/MainProperty3.vue';


const routes = [
    { 
        path: '/lamp1',
        component: MainProperty1, 
        alias: '/',
    },

    { 
        path: '/lamp2', 
        component: MainProperty2,
    },

    { 
        path: '/lamp3', 
        component: MainProperty3,
    },
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
})

export default router;
