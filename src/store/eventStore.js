const ADD_EVENT = 'ADD_EVENT';
const BOOKING_EVENT = 'BOOKING_EVENT';

export function addEvents(event) {
  return {
    type: ADD_EVENT,
    event,
  };
}

export function bookTickets(count) {
  return {
    type: BOOKING_EVENT,
    count,
  };
}

const defaultEvent = [];

function eventsReducers(state = defaultEvent, action) {
  switch (action.type) {
    case ADD_EVENT:
      return action.event;
    case BOOKING_EVENT:
      const event = state.find((b) => action.count.name === b.name);
      const events = state.filter((b) => action.count.name !== b.name);
      return [
        ...events,
        {
          ...event,
          available_tickets: event.available_tickets - action.count.headCount,
        },
      ];
    default:
      return state;
  }
}

export default eventsReducers;
