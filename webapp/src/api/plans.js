/**
 * Mocking client-server processing
 */
const _plans = [
    {
        id: 1, name: 'Glazig 2019', competition: { name: 'Glazig 2019', distance: "28.0", date: '2021-02-03' },
        weeks: [
            {
                numWeek: 1,
                sessions: [
                    {
                        date: "2019-02-03",
                        time: "19:12",
                        name: "Go go go ! ",
                        type: "fractionné",
                        distance: "12.5",
                        duration: "00:00:00",
                        heightDifference: 230,
                        circuit: "boel 18K",
                        details: "90% VMA sur 20min"
                    },
                    {
                        date: "2019-02-06",
                        time: "19:12",
                        name: "Plus loin ",
                        type: "sortie longue",
                        distance: 18,
                        duration: "00:00:00",
                        heightDifference: 230,
                        circuit: "boel 18K",
                        details: "90% VMA sur 20min"
                    }
                ]
            },
            {
                numWeek: 2,
                sessions: [
                    {
                        date: "2019-02-10",
                        time: "19:12",
                        name: "Ah ah ah",
                        type: "fractionné",
                        distance: 10,
                        duration: "00:00:00",
                        heightDifference: 230,
                        circuit: "boel 18K",
                        details: "90% VMA sur 20min"
                    },
                    {
                        date: "2019-02-13",
                        name: "Outcg ",
                        time: "19:12",
                        type: "sortie longue",
                        distance: 18.6,
                        duration: "00:00:00",
                        heightDifference: 230,
                        circuit: "boel 18K",
                        details: "90% VMA sur 20min"
                    }
                ]
            }

        ]
    },
    { id: 2, name: 'UTMB 2019', competition: { name: 'UTMB 2019', distance: 170, date: '2019-08-31T18:00:00.000Z' } },
    { id: 3, name: 'Glazig 2020', competition: { name: 'Glazig 2020', distance: 26, date: '2020-02-03T09:00:00.000Z' } }
];

export default {
    getPlans(cb) {
        setTimeout(() => cb(_plans), 100)
    },
    getPlanById(id, cb) { 
        setTimeout(() => cb(_plans.find(p => p.id == id)), 100)
    },
    addSession(weekId,newSession, cb){
        setTimeout(() => cb(newSession), 100)
    },
    updatePlan(id, plan, cb){
        setTimeout(() => cb(plan), 100)
    }
}