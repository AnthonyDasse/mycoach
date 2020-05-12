<template>
    <div class="trainingplaneheader">
      
      <b-card border-variant="dark" v-bind:title="this.$t('training.title', {name: plan.name})">

        <div class="row">
          <div class="col-sm">
             <b-card-text>
              {{$t('training.planHeaderDescription', { competition: plan.competition.name, dueDate: plan.competition.date})}}
            </b-card-text>
            <EditTrainingPlanHeader v-bind:plan="plan"/>
          </div>
          <div class="col-sm">
            <b-badge pill variant="primary">{{ plan.competition.distance }} KM</b-badge>
            <b-card-text>
              {{plan.competition.location}}
            </b-card-text>
          </div>         
        </div>
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
