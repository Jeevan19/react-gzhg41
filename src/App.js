import React from "react";
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import Header from "./Components/Header";
import Event from "./Components/Event";
import EventDetail from "./Components/EventDetail";
import "./style.css";

export default function App() {
  return (
    <React.Fragment>
      
      <BrowserRouter>
        <Routes>
          <Route path="/event" element={<Event /> } />
          <Route path="/eventDetail" element={<EventDetail /> } />
          <Route path="/" element={<Event /> } />
          <Route path="*" element={<Event /> } />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}
