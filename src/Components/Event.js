import React, { useState } from 'react';
import Header from './Header';

function Event() {
  const [events, setEvents] = useState('');
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
    </React.Fragment>
  );
}

export default Event;
