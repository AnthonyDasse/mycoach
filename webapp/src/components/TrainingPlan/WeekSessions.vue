<template>
<!-- v-bind:title="post.title + ' par ' + post.author.name"  -->
   <b-card no-body v-bind:header="'Week ' + numWeek + ' (Total distance: '+ distance(sessions)+' )'" variant="danger">
    <b-list-group flush>
      <b-table striped hover :fields="fields" :items="sessions"></b-table>
    </b-list-group>
    <AddSession v-bind:week=numWeek></AddSession>
  </b-card>
</template>

<script>
import AddSession from './AddSession';
export default {
    name : 'WeekSessions',
    components : {
      AddSession
    },
    props: {
        numWeek: Number,
        sessions: Array
    },
     data() {
      return {
       fields: [
                    {
            // A regular column with custom formatter
            key: 'date',
            formatter: value => {
                let tmp = new Date (value);
              return tmp.getDay();
            }
          },
           'name',
            'type',
            'distance',
            'time',
            'heightDifference',
            'circuit',
            'details'

       ]       
      }
    },
    methods: {
      distance: (sessions) => {         
         return sessions.map(session => session.distance).reduce((a,b) => {
           return a + b
           }, 0);
       }
    }
}

</script>

<style>

</style>