import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import Login from '@/views/Login';
import Signup from '@/views/Signup';
import Feed from '@/views/Feed';
import Profile from '@/views/Profile';

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
      path: '/signup/',
      name: 'signup',
      component: Signup
    },
    {
      path: '/feed',
      name: 'feed',
      component: Feed
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    }
  ]
});
