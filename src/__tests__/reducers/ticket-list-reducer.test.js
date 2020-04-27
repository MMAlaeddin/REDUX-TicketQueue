import ticketListReducer from '../../reducers/ticket-list-reducer';



//variable = ticketListReducer
//ticketListReducer takes 2 arguments (1: current state, 2: an action being applied to the current state)
describe('ticketListReducer', () => {

  let action;
  const tickeData = {
    names: "Ryan and Aimen",
    location: "4b",
    issue: "Redux action is not working correctly, cause I suck at it.",
    id: 1
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(ticketListReducer({}, { type: null })).toEqual({});
  });
  
  test('Should successfully add new ticket data to masterTicketList', () => {
    const {names, location, issue, id} = tickeData;
    action = {
      type: 'ADD_TICKET',
      names: names,
      location: location,
      issue: issue,
      id: id
    };
    
    expect(ticketListReducer({},action)).toEqual({
      [id] : {
        names: names,
        location: location,
        issue: issue,
        id: id
      }
    });
  });
});