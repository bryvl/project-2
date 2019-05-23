import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import Login from '@/views/Login';
import EventPage from '@/views/Event';
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
      path: '/eventpage/',
      name: 'event',
      component: EventPage
    },
    {
      path: '/api/events/',
      name: 'event',
      component: EventPage
    },
    {
      path: '/signup/',
      name: 'signup',
      component: Signup
    }
  ]
});
