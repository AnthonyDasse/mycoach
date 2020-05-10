<template>
    <div class="trainingplaneheader"> 
        <b-card border-variant="dark" v-bind:title="this.$t('training.title', {name: plan.name})">
        <b-badge pill variant="primary">{{ plan.competition.distance }} KM</b-badge>
        <br>
        <b-card-text>
          {{$t('training.planHeaderDescription', { competition: plan.competition.name, dueDate: plan.competition.date})}}
        </b-card-text>
        <EditTrainingPlanHeader v-bind:plan="plan"/>
      </b-card>
    </div>
</template>

<script>
  import EditTrainingPlanHeader from './EditTrainingPlanHeader';
  export default {
    name: 'TrainingPlanHeader',
    components : {
      EditTrainingPlanHeader
    },
    props: ["plan"]
  }

</script>
<style>
  .trainingplaneheader{
    margin-bottom: 2%;
  }
</style>
