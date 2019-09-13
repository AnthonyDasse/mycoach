<template>
    <div class="trainingplaneheader">       
        <h1>Training plan {{ planId }}</h1>
    </div>
</template>

<script>

  export default {
    name: 'TrainingPlanHeader',
    components : {
    },
    props: {
        planId: String
    }
  }

</script>
