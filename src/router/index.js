import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Tree from '@/components/Tree'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: 'Home'
      }
    },
    {
      path: '/Tree',
      name: 'Tree',
      component: Tree,
      meta: {
        title: 'Tree'
      }
    }
  ]
})
