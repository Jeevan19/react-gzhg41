import React, { useState } from 'react';
import EventCard from './EventCard';
import Header from './Header';

function Event() {
  const [events, setEvents] = useState('');
  let eventListCount = 8;
  return (
    <React.Fragment>
      <Header />
      <div class="row">
        <div class="col-12 bg-grey py-20">
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
      <div class="row py-20"></div>
      <div class="row contect-Header ">
        <div class="col-12 font-34 font-bold py-20 ">
          Events ({eventListCount})
        </div>
      </div>
      <div class="width-90 contect-Header">
        <div class="col-4">
          <EventCard />
        </div>
        <div class="col-4">
          <EventCard />
        </div>
        <div class="col-4">
          <EventCard />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Event;
