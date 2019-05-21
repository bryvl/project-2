import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import Login from '@/views/Login';
import EventFeed from '@/views/Event';
import Signup from '@/views/Signup';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/eventfeed/',
      name: 'event',
      component: EventFeed
    },
    {
      path: '/signup/',
      name: 'signup',
      component: Signup
    }
  ]
});
