import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { layout: "unauth" },
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { layout: "unauth" },
  },
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/products/:id',
    name: 'detail',
    component: () => import('../views/Product/DetailProduct.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/admin/category',
    name: 'Category',
    component: () => import('../views/Category/Category.vue')
  },
  {
    path: '/admin/Category/add',
    name: 'AddCategory',
    component: () => import('../views/Category/AddCategory.vue')
  },
  {
    path: "/dashboard",
    name: 'Dashboard',
    component: () => import("../views/Dashboard.vue"),
    meta: { layout: "secret" },
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
