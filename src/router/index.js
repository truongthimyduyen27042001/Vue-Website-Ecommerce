import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomePage/HomeView.vue'
import Login from '../views/Auth/Login.vue'
import Register from '../views/Auth/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { layout: "unauth" },
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: { layout: "unauth" },
  },
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/products',
    name: 'listproducts',
    component: () => import('../views/Product/ListProducts.vue'),

  },
  {
    path: '/products/:id',
    name: 'detail',
    component: () => import('../views/Product/DetailProduct.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About/AboutView.vue')
  },
  {
    path: '/admin/category',
    name: 'Category',
    component: () => import('../views/Category/Category.vue')
  },
  {
    path: '/admin/category/add',
    name: 'AddCategory',
    component: () => import('../views/Category/AddCategory.vue')
  },
  {
    path: "/dashboard",
    name: 'Dashboard',
    component: () => import("../views/Dashboard/Dashboard.vue"),
    meta: { layout: "secret" },
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
