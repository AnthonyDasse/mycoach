<template>
    <div class="trainingplan">       
        <h1>{{ welcomeMessage }}</h1>
        <b-list-group>
          <b-list-group-item v-for="plan in plans" v-bind:key="plan.id" button >
            <b-link to="/plan/1">
              {{ plan.name }} ( distance : {{ plan.competition.distance}})
            </b-link>
          </b-list-group-item>          
        </b-list-group>
    </div>
</template>

<script>
export default {
  name: 'TrainingPlanList',
  components : {
  },
  props: {
    msg: String
  },
  data: function(){
    return  {
        plans: [
            { id :1, name: 'Glazig 2019', competition: { name: 'Glazig 2019', distance : 28, date : '2019-02-03T09:00:00.000Z'} },
            { id :2, name: 'UTMB 2019', competition: { name: 'UTMB 2019', distance : 170, date : '2019-08-31T18:00:00.000Z'} },
            { id :3, name: 'Glazig 2020', competition: { name: 'Glazig 2020', distance : 26, date : '2020-02-03T09:00:00.000Z'} }
        ],
        welcomeMessage : 'Hello champion, yours plans ...'
    }
  }
}
</script>
