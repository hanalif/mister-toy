import Vue from 'vue'
import VueRouter from 'vue-router'
import toyApp from '../pages/toy-app.vue'
import homePage from '../pages/home-page.vue'
import aboutPage from '../pages/about-page.vue'
import toyEdit from '../pages/toy-edit.vue'
import toyDetails from '../pages/toy-details.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: homePage
  },
  {
    path: '/about',
    component: aboutPage
  },
  {
    path: '/toy-app',
    component: toyApp,
  },
  {
    path: '/toy/edit/:toyId?',
    component: toyEdit
  },
  {
    path: '/toy/:toyId',
    component: toyDetails
  },
]

const router = new VueRouter({
  routes
})

export default router
