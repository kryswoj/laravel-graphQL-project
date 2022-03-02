import './bootstrap';
import Vue from 'vue';
import VueRouter from 'vue-router';
import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo'

import Post from './Post';
import PostList from './PostList';
import TopicPostList from './TopicPostList';

window.Vue = require('vue').default;
Vue.use(VueRouter);
Vue.use(VueApollo)

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

    {
        path: '/topics/:slug',
        name: 'topic',
        component: TopicPostList,
    },
];



const apolloClient = new ApolloClient({
    // You should use an absolute URL here
    uri: 'http://127.0.0.1:8000/graphql'
});

const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
});

const router = new VueRouter({
    routes,
    mode: 'history',
})

const app = new Vue({
    el: '#app',
    router,
    apolloProvider,
});
