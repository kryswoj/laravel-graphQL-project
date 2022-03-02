import './bootstrap';
import Vue from 'vue';
import VueRouter from 'vue-router';

import Post from './components/Post';
import PostList from './components/PostList';

window.Vue = require('vue').default;
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'index',
        component: PostList,
    },

    {
        path: '/post/:id',
        name: 'post',
        component: Post,
    },
];

const router = new VueRouter({
    routes,
    mode: 'history',
})

const app = new Vue({
    el: '#app',
    router
});
