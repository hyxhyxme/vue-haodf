import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import position from './position.js'

export default new Vuex.Store({

  modules: {
    position : position
  }
})
