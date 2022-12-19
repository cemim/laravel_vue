import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:8000/api';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/home',
    //   name: 'homeVue',
    //   component: HomeView
    // },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/',
      name: 'login',
      component: () => import('../views/site/LoginView.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/site/HomeView.vue')
    },
    {
      path: '/produtos',
      name: 'produtos',
      component: () => import('../views/site/ProdutosView.vue')
    },
    {
      path: '/clientes',
      name: 'clientes',
      component: () => import('../views/site/ClientesView.vue')
    },    
  ]
})

export default router
