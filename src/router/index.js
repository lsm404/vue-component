import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// const HelloWorld = import('@/components/HelloWorld')
// const Sku = import('@/components/Sku')
// const Stars = import('@/components/stars')
// const Index = import('@/view/index')
// const Debounce = import('@/components/Debounce')
// const Vuex = import('@/components/Vuex')

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
      component: resolve => require(['@/view/index'], resolve),
      children: [
        {
          path: 'hello',
          name: 'hello',
          component: resolve => require(['@/components/HelloWorld'], resolve)
        },
        {
          path: 'sku',
          name: 'sku',
          component: resolve => require(['@/components/Sku'], resolve)
        },
        {
          path: 'star',
          name: 'Star',
          component: resolve => require(['@/components/stars'], resolve)
        },
        {
          path: 'vuex',
          name: 'Vuex',
          component: resolve => require(['@/components/Vuex'], resolve)
        },
        {
          path: 'debounce',
          name: 'Debounce',
          component: resolve => require(['@/components/Debounce'], resolve)
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
