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
  },
  addSessionOnWeek({ commit}, data) {
    // eslint-disable-next-line no-console
    console.log(`Actions ! Je vais rajouter une nouvelle session pour le week ${data.weekId},${data.session.circuit} `,);
    plansApi.addSession(data.weekId,data.session, session => {
      commit('addSession', { ...data.weekId, ...session })
    })
  }

}

// mutations
const mutations = {
  setPlans(state, plans) {
    state.all = plans
  },
  setCurrentPlan(state, plan) {
    state.currentPlan = plan
  },
  
  addSession(state, data) {    
    let currentWeek = state.currentPlan.weeks.find(week => week.numWeek == data.weekId )
    currentWeek.sessions.push(data.session.circuit);
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}