import {createRouter, createWebHistory} from 'vue-router'

import Home from "../views/Home.vue";
import Guide from "../views/guide/Guide.vue";
import ButtonViews from "../views/buttons/ButtonViews.vue";

const routes = [
    { path: '/', component: Home },
    {
        path: '/guide',
        component: Guide,
        redirect: '/buttons',
        children: [
            { path: '/buttons', component: ButtonViews },
        ]
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
