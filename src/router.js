import Vue from 'vue';
import Router from 'vue-router';
import Challenge from './views/Challenge.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'challenge',
      component: Challenge,
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: () => import(/* webpackChunkName: "privacy" */ './views/Privacy.vue'),
    },
  ],
});
