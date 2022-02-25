import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Event from './Components/Event';
import EventBooking from './Components/EventBooking';
import './style.css';

export default function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/event" element={<Event />} />
          <Route path="/event/:id/booking" element={<EventBooking />} />
          <Route path="/" element={<Event />} />
          <Route path="*" element={<Event />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}
