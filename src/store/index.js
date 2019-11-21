import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import display from './display.js'
import position from './position.js'

export default new Vuex.Store({
  /* state: {
    isdisplay : false
  },
  mutations: {
    increment(state){
      state.isdisplay = !state.isdisplay
    }
  },
  actions: {

  }, */
  modules: {
    display : display,
    position : position
  }
})
