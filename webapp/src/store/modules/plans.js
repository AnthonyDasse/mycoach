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
    },
    all : state => {
      return state.plan;
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
    plansApi.addSession(data.weekId,data.session, session => {
      commit('addSession', { ...data.weekId, ...session })
    })
  },
  updatePlan({commit}, data) {      
      plansApi.updatePlan(data.planId, data.plan, plan => {       
        commit('setCurrentPlan', plan)
      })
  },
  addEmptyWeek({commit}){
    commit('addEmptyWeek')
  },
  createPlan({commit, state}, newPlan) {
    newPlan.weeks = [];
    // to delete when backend is coming
    if(state.all.length > 0){
      let lastId = state.all.map(plan => plan.id).sort().pop();
      newPlan.id = lastId + 1;
    }else{
      newPlan.id = 1;
    }
    
    plansApi.createPlan(newPlan, plans => {       
      commit('setPlans', plans)
    })
  }

}

// mutations
export const mutations = {
  setPlans(state, plans) {
    state.all = plans
  },
  setCurrentPlan(state, plan) {
    state.currentPlan = plan
  },
  
  addSession(state, data) {    
    let currentWeek = state.currentPlan.weeks.find(week => week.numWeek == data.weekId )
    currentWeek.sessions.push(data.session);
  },

  addEmptyWeek(state) {
    let newNumWeek = 1;
    
    if(state.currentPlan.weeks != null && state.currentPlan.weeks.length > 0){
      let lastNumWeek = state.currentPlan.weeks.map(w => w.numWeek).sort().pop();
      newNumWeek = parseInt(lastNumWeek) +1 ;
    }
    
    state.currentPlan.weeks.push({
      numWeek: newNumWeek,
      sessions: []
    });
   
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}