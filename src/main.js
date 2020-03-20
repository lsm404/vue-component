// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import element from './element/index.js'
import './assets/css/reset.css'
import store from './store'
import VueI18n from 'vue-i18n'
import locale from 'element-ui/lib/locale'

Vue.config.productionTip = false
Vue.use(element)
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: localStorage.getItem('locale') || 'zh-CN', // 语言标识
  // this.$i18n.locale // 通过切换locale的值来实现语言切换
  messages: {
    'zh-CN': require('./lang/zh.js'), // 中文语言包
    'en-US': require('./lang/en') // 英文语言包
  }
})

// I18n语言国际化
locale.i18n((key, value) => i18n.t(key, value)) // 重点：为了实现element插件的多语言切换

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
