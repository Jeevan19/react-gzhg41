import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import EventCard from './EventCard';
import Header from './Header';
import { getEventsList } from '../Service/eventsServices';
import { addEvents } from '../store/eventStore';

function Event() {
  let eventList = useSelector((state) => state);
  const dispatch = useDispatch();

  const [events, setEvents] = useState([]);
  const [eventListCount, setEventListCount] = useState(0);
  const [query, setQuery] = useState('');
  const [eventCallFlag, setEventCallFlag] = useState(false);

  let filteredEvents = eventList.length > 0 ? eventList : events;
  //let filteredEvents =  eventList;

  useEffect(() => {
    if (eventList.length == 0) {
      let listMounted = true;
      getEventsList()
        .then((data) => {
          if (listMounted) {
            dispatch(addEvents(data));
            setEventListCount(data.length);
            setEvents(data);
            setEventCallFlag(true);
            //events = useSelector(state => console.log(state));
            filteredEvents = events;
          }
        })
        .catch((err) => {
          console.log(err);
        });
      return () => (listMounted = false);
    }
  }, []);

  if (query !== '') {
    filteredEvents = events
      .filter((eve) => {
        return eve.name.toLowerCase().includes(query.toLowerCase());
      })
      .map((eve) => {
        return eve;
      });
  }

  const eventsSection = filteredEvents.map(function (key, index) {
    return (
      <div className="col-4 col-m-12 col-s-12 event-y-10 ">
        <EventCard data={key} key={index} />
      </div>
    );
  });

  const filterEvent = (event) => {
    setQuery(event.target.value);
  };

  return (
    <React.Fragment>
      <Header />
      <div className="row">
        <div className="col-12 bg-grey py-20">
          <form onSubmit={filterEvent}>
            <input
              type="search"
              placeholder="Search By Event Title.."
              autoComplete="off"
              onChange={filterEvent}
            />
            <button type="submit" className="event-search">
              Search
            </button>
          </form>
        </div>
      </div>
      <div className="row py-20"></div>

      {filteredEvents.length >= 0 && (
        <React.Fragment>
          <div className="row contect-Header ">
            <div className="col-12 font-34 py-20 ">
              <span className="font-bold"> Events </span> ({eventListCount})
            </div>
          </div>

          {filteredEvents.length > 0 && (
            <div className="row contect-Header">{eventsSection}</div>
          )}

          {filteredEvents.length === 0 && eventCallFlag && (
            <div className="row">
              <div className="col-12 col-s-12">
                <div className="no-records">No Records Available!</div>
              </div>
            </div>
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default Event;
