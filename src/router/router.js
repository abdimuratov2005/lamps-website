import { createRouter, createWebHashHistory } from "vue-router";
import MainProperty1 from '../pages/MainProperty1.vue';
import MainProperty2 from '../pages/MainProperty2.vue';
import MainProperty3 from '../pages/MainProperty3.vue';


const routes = [
    { 
        path: '/one', 
        component: MainProperty1, 
        alias: '/',
    },

    { 
        path: '/two', 
        component: MainProperty2,
    },

    { 
        path: '/three', 
        component: MainProperty3,
    },
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
})

export default router;
