import { Button, Menu, Submenu, MenuItem, MenuItemGroup } from 'element-ui'

const element = {
  install: function (Vue) {
    // Vue.use(NavMenu)
    Vue.use(Button)
    Vue.use(Menu)
    Vue.use(Submenu)
    Vue.use(MenuItem)
    Vue.use(MenuItemGroup)
  }
}

export default element
