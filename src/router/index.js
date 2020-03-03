import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Sku from '@/components/Sku'
import Index from '@/view/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
          name: 'sku规格组件',
          component: Sku
        }
      ]
    }
  ]
})
