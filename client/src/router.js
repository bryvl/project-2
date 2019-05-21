import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import Login from '@/views/Login';
import EventFeed from '@/views/Event';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login/',
      name: 'login',
      component: Login
    },
    {
      path: '/eventfeed/',
      name: 'event',
      component: EventFeed
    }
  ]
});
