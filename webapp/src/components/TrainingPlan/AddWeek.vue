<template>
  <b-button variant="outline-primary" block size="sm"  v-on:click="addWeek()">
      {{$t('week.addWeekButton')}}
  </b-button>
</template>

<script>
export default {
    methods:{
        addWeek: function(){
            this.$store.dispatch('plans/addEmptyWeek');  
        }
    }
}
</script>

<style>

</style>