<template>
    <div class="trainingplaneheader">       
        <h1>{{ $t("training.title") }} : {{ plan.name }}</h1>
    </div>
</template>

<script>

  export default {
    name: 'TrainingPlanHeader',
    components : {
    },
    props: ["plan"]
  }

</script>
