import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import TrainingPlanList from './components/TrainingPlan/TrainingPlanList.vue'
import TrainingPlan from './components/TrainingPlan/TrainingPlan.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
