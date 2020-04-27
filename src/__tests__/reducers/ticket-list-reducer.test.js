import ticketListReducer from '../../reducers/ticket-list-reducer';

//variable = ticketListReducer
//ticketListReducer takes 2 arguments (1: current state, 2: an action being applied to the current state)
describe('ticketListReducer', () => {
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(ticketListReducer({}, { type: null })).toEqual({});
  });
});