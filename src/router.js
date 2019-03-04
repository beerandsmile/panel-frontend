import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Adm from './views/Adm.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter: function (from, to, next) {
        if (!window.axios.defaults.headers.common["token"]) {
          next('login');
        } else {
          next();
        }
      },
      children: [
        {
          path: 'main',
          component: () => import('./views/Main.vue')
        }
      ]
    },
    {
      path: '/adm',
      name: 'adm',
      component: () => import('./views/Adm.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue'),
      beforeEnter: function (from, to, next) {
        localStorage.removeItem('token')
        next();
      },
    }
  ]
})
