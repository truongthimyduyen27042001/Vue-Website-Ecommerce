import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
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
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
