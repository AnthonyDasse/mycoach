<template>
    <div class="trainingplan">       
        <h2>{{ $t("training.listTitle") }} </h2>
        <b-list-group>
          <b-list-group-item v-for="plan in plans" v-bind:key="plan.id" button >
            <b-link v-bind:to="'/plan/'+plan.id">
              {{ plan.name }} ( {{ $t("training.listDistanceHeader") }} : {{ plan.competition.distance}} KM)
            </b-link>
          </b-list-group-item>          
        </b-list-group>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'TrainingPlanList',
  computed: mapState({
    plans: state => state.plans.all
  }),
  props: {
    msg: String
  },
  created () {    
    this.$store.dispatch('plans/getAllPlans')
  }
}
</script>
