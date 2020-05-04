<template>
    <div class="trainingplan">  
        <TraininPlanHeader v-bind:planId=$route.params.id></TraininPlanHeader>

        <!-- Training plan Header -->

        <!-- Sessions -->
        <WeekSessions v-for="week in weeks" :key="week.numWeek" v-bind:numWeek="week.numWeek" v-bind:sessions="week.sessions"></WeekSessions>

    </div>
</template>

<script>
import TraininPlanHeader from './TrainingPlanHeader';
import WeekSessions from './WeekSessions';
export default {
    name: 'TrainingPlan',
    components : {
        TraininPlanHeader,
        WeekSessions
    },
    data() {
      return {
            weeks : [
                {
                    numWeek:1,
                    sessions: [
                        {
                            date : "2019-02-03T09:00:00.000Z",
                            name : "Go go go ! ",
                            type : "fractionné",
                            distance : 8,
                            time : "00:00:00",
                            heightDifference : 230,
                            circuit : "boel 18K",
                            details : "90% VMA sur 20min"
                        },
                        {
                            date : "2019-02-06T09:00:00.000Z",
                            name : "Plus loin ",
                            type : "sortie longue",
                            distance : 18,
                            time : "00:00:00",
                            heightDifference : 230,
                            circuit : "boel 18K",
                            details : "90% VMA sur 20min"
                        }
                    ]
                },
                {
                    numWeek:2,
                    sessions: [
                        {
                            date : "2019-02-10T09:00:00.000Z",
                            name : "Ah ah ah",
                            type : "fractionné",
                            distance : 10,
                            time : "00:00:00",
                            heightDifference : 230,
                            circuit : "boel 18K",
                            details : "90% VMA sur 20min"
                        },
                        {
                            date : "2019-02-13T09:00:00.000Z",
                            name : "Outcg ",
                            type : "sortie longue",
                            distance : 18.6,
                            time : "00:00:00",
                            heightDifference : 230,
                            circuit : "boel 18K",
                            details : "90% VMA sur 20min"
                        }
                    ]
                }

            ]            
        }
    }
}
</script>
