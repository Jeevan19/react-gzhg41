import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Event from './Components/Event';
import EventBooking from './Components/EventBooking';
import './style.css';

export default function App() {
  return (
    <div className="body">
      <BrowserRouter>
        <Routes>
          <Route path="/event" element={<Event />} />
          <Route path="/event/:id" exact element={<EventBooking />} />
          <Route path="/" element={<Event />} />
          <Route path="*" element={<Event />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
