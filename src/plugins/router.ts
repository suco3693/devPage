import Vue from 'vue';
import VueRouter from 'vue-router';
import LandingPage from '@/views/LandingPage.vue';
import ResumePage from '@/views/ResumePage.vue';
import ContactPage from '@/views/ContactPage.vue';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'LandingPage',
            component: LandingPage,
        },
        {
            path: '/resume',
            name: 'ResumePage',
            component: ResumePage,
        },
        {
            path: '/contact',
            name: 'ContactPage',
            component: ContactPage,
        },
    ],
});
