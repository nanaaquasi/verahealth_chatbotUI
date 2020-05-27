import Vue from 'vue';
import Router from 'vue-router';
import Home from '../Views/Start.vue';
import Chat from '@/Views/Chat.vue';
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/start/:id',
      name: 'start',
      component: Chat,
    },
  ],
  mode: 'history',
});
