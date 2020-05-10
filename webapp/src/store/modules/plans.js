import plansApi from '../../api/plans'

// initial state
const state = () => ({
  all: [],
  currentPlan: null
})

// getters
const getters = {
    getCurrentPlan: state => {
      return state.currentPlan;
    }
  
}

// actions
const actions = {
  getAllPlans({ commit }) {
    plansApi.getPlans(plans => {
      commit('setPlans', plans)
    })
  },
  getPlanById({ commit }, id) {
    plansApi.getPlanById(id, plan => {
           commit('setCurrentPlan', plan)
    });
  }
}

// mutations
const mutations = {
  setPlans(state, plans) {
    state.all = plans
  },
  setCurrentPlan(state, plan) {
    state.currentPlan = plan
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}