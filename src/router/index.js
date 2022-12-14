import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from '../views/DataBinding'
import RenderingVIf from '../views/RenderingVIf'
import EventClick from '../views/EventClick'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(
      /* webpackChunkName: "about" */ 
      '../views/AboutView.vue'
      )
  },
  {
    path: '/databinding',
    name: 'DataBinding',
    component: DataBinding
  },
  {
    path: '/rendering-vif',
    name: 'RenderingVIf',
    component: RenderingVIf
  },
  {
    path: '/event-click',
    name: 'EventClick',
    component: EventClick
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
