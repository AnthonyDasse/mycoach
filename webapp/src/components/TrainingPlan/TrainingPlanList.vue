<template>
    <div class="trainingplan">       
        <h1>{{ welcomeMessage }}</h1>
        <b-list-group>
          <b-list-group-item v-for="plan in plans" v-bind:key="plan.id" button >
            <b-link v-bind:to="'/plan/'+plan.id">
              {{ plan.name }} ( distance : {{ plan.competition.distance}})
            </b-link>
          </b-list-group-item>          
        </b-list-group>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'TrainingPlanList',
  computed: mapState({
    plans: state => state.plans.all
  }),
  props: {
    msg: String
  },
  data: function(){
    return  {
        welcomeMessage : 'Hello champion, yours plans ...'
    }
  },
  created () {
    this.$store.dispatch('plans/getAllPlans')
  }
}
</script>
