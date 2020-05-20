import { mutations } from '../../../src/store/modules/plans';

// destructure assign `mutations`
const { setPlans, setCurrentPlan } = mutations;

describe('mutations setPlans', () => {

    it('set no plan', () => {
        // mock state
        const state = { all: [] };
        // apply mutation
        setPlans(state, []);
        // assert result
        expect(state.all.length).toBe(0);
    });

    it('set one plan', () => {
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
    });

    it('set two plan', () => {
        // mock state
        const state = { all: [] };
        // apply mutation
        setPlans(state, [
            { id: 1, name: 'PLAN1', weeks: [], competition: { name: 'COMPET1', distance: "28.0", date: '2021-02-03', location: 'HERE' }},
            { id: 2, name: 'PLAN2', weeks: [], competition: { name: 'COMPET2', distance: "8.0", date: '2021-02-03', location: 'HERE' }}
        ]);
        // assert result
        expect(state.all.length).toBe(2);
        expect(state.all[0].name).toBe('PLAN1');
        expect(state.all[1].name).toBe('PLAN2');
        expect(state.all[0].competition.name).toBe('COMPET1');
        expect(state.all[1].competition.name).toBe('COMPET2');
    });
});

describe('mutations setCurrentPlan', () => {
    it('set empty plan', () => {
        // mock state
        const state = { all: [], currentPlan : [] };
        // apply mutation
        setCurrentPlan(state, null);
        // assert result
        expect(state.currentPlan).toBeNull();
    });

    it('set plan', () => {
        // mock state
        const state = { all: [], currentPlan : [] };
        // apply mutation
        setCurrentPlan(state,  { id: 1, name: 'PLAN1', weeks: [], competition: { name: 'COMPET1', distance: "28.0", date: '2021-02-03', location: 'HERE' }});
        // assert result
        expect(state.currentPlan.name).toBe('PLAN1');
    });

    it('set plan and an other after', () => {
        // mock state
        const state = { all: [], currentPlan : [] };
        // apply mutation
        setCurrentPlan(state,  { id: 1, name: 'PLAN1', weeks: [], competition: { name: 'COMPET1', distance: "28.0", date: '2021-02-03', location: 'HERE' }});
        // assert result
        expect(state.currentPlan.name).toBe('PLAN1');
        setCurrentPlan(state,  { id: 2, name: 'PLAN2', weeks: [], competition: { name: 'COMPET2', distance: "28.0", date: '2021-02-03', location: 'HERE' }});
        expect(state.currentPlan.name).toBe('PLAN2');
    });
});
