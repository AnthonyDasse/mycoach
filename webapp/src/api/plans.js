/**
 * Mocking client-server processing
 */
const _plans = [
    { id: 1, name: 'Glazig 2019', competition: { name: 'Glazig 2019', distance: 28, date: '2019-02-03T09:00:00.000Z' } },
    { id: 2, name: 'UTMB 2019', competition: { name: 'UTMB 2019', distance: 170, date: '2019-08-31T18:00:00.000Z' } },
    { id: 3, name: 'Glazig 2020', competition: { name: 'Glazig 2020', distance: 26, date: '2020-02-03T09:00:00.000Z' } }
];

export default {
    getPlans(cb) {
        setTimeout(() => cb(_plans), 100)
    }
}