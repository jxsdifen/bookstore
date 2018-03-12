import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import Main from '@/views/Main'
import Home from '@/views/Home'
import Explorer from '@/views/Explorer'
import Cart from '@/views/Cart'
import My from '@/views/My'
import BookDetail from '@/views/BookDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  linkActiveClass: "active",
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      // name: 'Main',
      component: Main,
      children: [
        {path: '/',name: 'Home',component: Home},
        {path: 'explorer',name: 'Explorer',component: Explorer},
        {path: 'cart',name: 'Cart',component: Cart},
        {path: 'my',name: 'My',component: My}
      ]
    },
    {path: '/book/:id', name: 'BookDetail', component: BookDetail}
  ]
})
