import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Sku from '@/components/Sku'
import Stars from '@/components/stars'
import Index from '@/view/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
      children: [
        {
          path: 'hello',
          name: 'hello',
          component: HelloWorld
        },
        {
          path: 'sku',
          name: 'sku',
          component: Sku
        },
        {
          path: 'star',
          name: 'Star',
          component: Stars
        }
      ]
    }
  ]
})

const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
