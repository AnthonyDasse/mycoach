<template>
    <div class="trainingplan">  
        <TraininPlanHeader v-bind:planId=$route.params.id></TraininPlanHeader>

        <!-- Training plan Header -->

        <!-- Sessions -->
        <WeekSessions numWeek=1 ></WeekSessions>
        <WeekSessions numWeek=2></WeekSessions>

    </div>
</template>

<script>
import TraininPlanHeader from './TrainingPlanHeader';
import WeekSessions from './WeekSessions';
export default {
  name: 'TrainingPlan',
  components : {
      TraininPlanHeader,
      WeekSessions
  }
}
</script>
