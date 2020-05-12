<template>
    <div class="trainingplan" v-if="plan != null">  
        <TraininPlanHeader v-bind:plan="plan"></TraininPlanHeader>
        <!-- Sessions -->
        <WeekSessions v-for="week in plan.weeks" :key="week.numWeek" v-bind:numWeek="week.numWeek" v-bind:sessions="week.sessions"></WeekSessions>
        <AddWeek/>
    </div>    
</template>

<script>
import TraininPlanHeader from './TrainingPlanHeader';
import WeekSessions from './WeekSessions';
import AddWeek from './AddWeek';

import { mapState } from 'vuex'
export default {
    name: 'TrainingPlan',
    components : {
        TraininPlanHeader,
        WeekSessions,
        AddWeek
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
<style>
.trainingplan{
    margin-bottom: 5%;
}
</style>
