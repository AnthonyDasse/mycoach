import plansApi from '../../api/plans'

// initial state
const state = () => ({
  all: []
})

// getters
const getters = {}

// actions
const actions = {
  getAllPlans ({ commit }) {      
      plansApi.getPlans(plans => {
        commit('setPlans', plans)
      })
  }
}

// mutations
const mutations = {
  setPlans (state, plans) {
    state.all = plans
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}