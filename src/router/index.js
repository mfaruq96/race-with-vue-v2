import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
// import Userfront from "@userfront/vue";
import HomeView from '../views/HomeView.vue'

// dashboard
import DashboardView from '../views/Dashboard/DashboardView.vue'

// auth
import LoginView from '../views/Auth/LoginView.vue'
import RegisterView from '../views/Auth/RegisterView.vue'

// stock
import InventoryView from '../views/Stock/InventoryView.vue'
import ProductsView from '../views/Stock/ProductsView.vue'

// shipment
import InboundView from '../views/Shipment/InboundView.vue'
import OrdersView from '../views/Shipment/OrdersView.vue'
import OutboundView from '../views/Shipment/OutboundView.vue'
import TrackingView from '../views/Shipment/TrackingView.vue'

// settings
import IntegrationsView from '../views/Settings/IntegrationsView.vue'
import IntegrationsAddView from '../views/Settings/IntegrationsAddView.vue'

// settings
import ProfileView from '../views/Profile/ProfileView.vue'


Vue.use(VueRouter)

const routes = [
  // dashboard
  { path: '/', name: 'home', component: DashboardView },
  { path: '/dashboard', name: 'dashboard', component: DashboardView },

  // auth
  { path: '/auth/login', name: 'login', component: LoginView },
  { path: '/auth/register', name: 'register', component: RegisterView },
  { path: '/homepage', name: 'homepage', component: HomeView },

  // stock
  { path: '/inventory', name: 'inventory', component: InventoryView },
  { path: '/products', name: 'products', component: ProductsView },

  // shipment
  { path: '/inbound', name: 'inbound', component: InboundView },
  { path: '/orders', name: 'orders', component: OrdersView },
  { path: '/outbound', name: 'outbound', component: OutboundView },
  { path: '/tracking', name: 'tracking', component: TrackingView },

  // settings
  { path: '/integrations', name: 'integrations', component: IntegrationsView },
  { path: '/integrations/add', name: 'integrationsAdd', component: IntegrationsAddView },

  // profile
  { path: '/profile', name: 'profile', component: ProfileView },


  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },

  // learn
  {
    path: '/learn/home',
    name: 'learnHome',
    component: () => import('../views/learn/HomeView.vue')
  },
  {
    path: '/learn/login',
    name: 'learnLogin',
    component: () => import('../views/learn/LoginView.vue'),
    beforeEnter: (to, from, next) => {
      if (store.getters['auth/authenticated']) {
        return next({ path: "/learn/home" })
      }
      next()
    }
  },
  {
    path: '/learn/reset',
    name: 'learnReset',
    component: () => import('../views/learn/ResetView.vue')
  },
  {
    path: '/learn/dashboard',
    name: 'learnDashboard',
    component: () => import('../views/learn/DashboardView.vue'),
    beforeEnter: (to, from, next) => {
      if (!store.getters['auth/authenticated']) {
        return next({ path: "/learn/login" })
      }
      // console.log(store.getters);
      next()
    }
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   // If the user is not logged in, redirect to /login
//   const isLoggedIn = localStorage.token;
//   if (to.name === "homepage" && !isLoggedIn) {
//     return next({ path: "/auth/login" });
//   }

//   next();
// });

export default router
