import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import TrainingPlanList from './components/TrainingPlan/TrainingPlanList.vue'
import TrainingPlan from './components/TrainingPlan/TrainingPlan.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/plans',
      name: 'TrainingPlanList',
      component: TrainingPlanList
    },
    {
      path: '/plan/:id',
      name : 'TrainingPlan', 
      component: TrainingPlan
    }
  ]
})
