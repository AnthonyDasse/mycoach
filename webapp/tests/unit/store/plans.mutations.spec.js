import { mutations } from '../../../src/store/modules/plans'


// eslint-disable-next-line no-console
console.log(mutations);
// destructure assign `mutations`
const { setPlans } = mutations

describe('mutations setPlans', () => {

    it('SETPLANS empty', () => {
        // mock state
        const state = { all: [] };
        // apply mutation
        setPlans(state, []);
        // assert result
        expect(state.all.length).toBe(0);
    })

    it('SETPLANS one plan', () => {
        // mock state
        const state = { all: [] };
        // apply mutation
        setPlans(state, [{
            id: 1, name: 'PLAN1', weeks: [], competition: { name: 'COMPET1', distance: "28.0", date: '2021-02-03', location: 'HERE' }
        }]);
        // assert result
        expect(state.all.length).toBe(1);
        expect(state.all[0].name).toBe('PLAN1');
        expect(state.all[0].competition.name).toBe('COMPET1');
    })

})