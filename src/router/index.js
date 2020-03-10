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

// 如果你的改了push还是没有生效，可以考虑改replace方法
// 修改路由replace方法,阻止重复点击报错
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
