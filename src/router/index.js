import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Neon from '../views/neon.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/neon',
    name: 'neon',
    component: Neon,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});
export default router;
