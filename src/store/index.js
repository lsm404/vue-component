import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    test: 0
  },
  getters: {
    title: state => state.test
  }
})

export default store
