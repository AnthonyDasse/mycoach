<template>
<!-- v-bind:title="post.title + ' par ' + post.author.name"  -->
   <b-card no-body v-bind:header="'Week ' + numWeek" variant="danger">
    <b-list-group flush>
      <b-table striped hover :items="items"></b-table>
    </b-list-group>
  </b-card>
</template>

<script>
export default {
    name : 'WeekSessions',
    props: {
        numWeek: Number
    },
     data() {
      return {
        items: [
          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { age: 38, first_name: 'Jami', last_name: 'Carney' }
        ]
      }
    }
}
</script>

<style>

</style>