import React, { useState, useEffect } from 'react';

import EventCard from './EventCard';
import Header from './Header';

function Event() {
  const [events, setEvents] = useState([{}]);
  const [eventListCount, setEventListCount] = useState(0);

  useEffect(() => {
    fetch('http://localhost:8080/events')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEvents(data);
        setEventListCount(data.length);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const eventsSection = events.map(function (key, index) {
    return (
      <div className="col-4">
        <EventCard data={key} key={index} />
      </div>
    );
  });

  return (
    <React.Fragment>
      <Header />
      <div className="row">
        <div className="col-12 bg-grey py-20">
          <form>
            <input
              type="search"
              placeholder="Search By Event Title.."
              autoComplete="off"
            />
            <button type="submit">Search</button>
          </form>
        </div>
      </div>
      <div className="row py-20"></div>

      {events.length > 0 && (
        <React.Fragment>
          <div className="row contect-Header ">
            <div className="col-12 font-34 font-bold py-20 ">
              Events ({eventListCount})
            </div>
          </div>

          <div className="row contect-Header">{eventsSection}</div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default Event;
