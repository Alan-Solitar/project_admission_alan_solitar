import Vue from 'vue';
import VueRouter from 'vue-router';
import AppRoutes from '@/router/app';
import NotFound from '@/views/NotFound.vue';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '*',
            component: NotFound,
        },

        ...AppRoutes,
    ],
});
