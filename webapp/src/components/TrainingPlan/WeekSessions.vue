<template>
  <div class="session-container">
   <b-card no-body  variant="danger">
    <template v-slot:header>
        <b-card-text >
              {{ $t('week.resume', { numWeek: numWeek, distance:  distance(sessions), elevation: elevation(sessions)}) }}
        </b-card-text>
        <AddSession v-bind:week=numWeek ></AddSession>
      </template>
    <b-list-group flush>
      <b-table striped hover :fields="fields" :items="sessions"></b-table>
    </b-list-group>
  </b-card>
  </div>
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
            { key: 'date', label: this.$t("session.tableDate"), sortable: true },
            { key: 'time', label: this.$t("session.tableTime") },
            { key: 'name', label: this.$t("session.tableName") },
            { key: 'type', label: this.$t("session.tableType") },
            { key: 'duration', label: this.$t("session.tableDuration") },
            { key: 'elevation', label: this.$t("session.tableElevation") },
            { key: 'circuit', label: this.$t("session.tableCircuit") },
            { key: 'details', label: this.$t("session.tableDetails") }
       ]       
      }
    },
    methods: {
      distance: (sessions) => {         
         return sessions.map(session => session.distance).reduce((a,b) => {
           return parseFloat(a) + parseFloat(b)
           }, 0);
       },
       elevation: (sessions) => {         
         return sessions.map(session => session.elevation).reduce((a,b) => {
           return parseInt(a) + parseInt(b)
           }, 0);
       }
    }
}

</script>

<style>
.session-container{
  margin-bottom: 1%;
}
</style>