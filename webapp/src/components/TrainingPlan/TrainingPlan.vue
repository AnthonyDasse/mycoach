<template>
    <div class="trainingplan">  
        <TraininPlanHeader v-bind:planId=$route.params.id></TraininPlanHeader>
        
        <!-- Sessions -->
        <WeekSessions v-for="week in plan.weeks" :key="week.numWeek" v-bind:numWeek="week.numWeek" v-bind:sessions="week.sessions"></WeekSessions>

    </div>
</template>

<script>
import TraininPlanHeader from './TrainingPlanHeader';
import WeekSessions from './WeekSessions';
import { mapState } from 'vuex'
export default {
    name: 'TrainingPlan',
    components : {
        TraininPlanHeader,
        WeekSessions
    },
    computed: mapState({
        plan: state => {
            return state.plans.currentPlan
            }
    }),
    created () {
        this.$store.dispatch('plans/getPlanById',this.$route.params.id);
    }
}
</script>
