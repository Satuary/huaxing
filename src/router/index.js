import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import about from '@/pages/about'
import menu from '@/pages/menu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/menu',
      name: 'menu',
      component: menu
    }
  ]
})
