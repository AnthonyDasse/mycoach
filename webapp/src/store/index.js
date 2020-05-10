import Vue from 'vue'
import Vuex from 'vuex'
import plans from './modules/plans'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    plans
  }
})