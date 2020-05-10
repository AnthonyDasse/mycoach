<template>
   <b-card no-body v-bind:header="this.$t('week.resume', { numWeek: this.numWeek, distance:  this.distance(sessions) } )" variant="danger">
    <b-list-group flush>
      <b-table striped hover :fields="fields" :items="sessions"></b-table>
    </b-list-group>
    <AddSession v-bind:week=numWeek @newSession="newSession"></AddSession>
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
            { key: 'date', label: this.$t("session.tableDate"), sortable: true },
            { key: 'time', label: this.$t("session.tableTime") },
            { key: 'name', label: this.$t("session.tableName") },
            { key: 'type', label: this.$t("session.tableType") },
            { key: 'duration', label: this.$t("session.tableDuration") },
            { key: 'heightDifference', label: this.$t("session.tableHeightDifference") },
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
       newSession: () => {}
    }
}

</script>

<style>

</style>