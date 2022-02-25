import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function EventCard(props) {
  let eventCard = props.data;
  const navigate = useNavigate();

  const bookEvent = () => {
    navigate('./event/' + eventCard.id + '/booking', { replace: true });
  };

  return (
    <div className="card">
      <img src={eventCard.img} className="card-img" alt="..." />
      <div className="card-body">
        <div className="card-title">{eventCard.name}</div>

        <div className="card-text py-20">
          <div className="card-text-date">{eventCard.date}</div>
          <div className="card-text-avail">
            TicketAvailable:
            {eventCard.available_tickets === 0 && (
              <span className="font-bold"> N/A </span>
            )}
            {eventCard.available_tickets > 0 && (
              <span className="font-bold font-orange">
                {' '}
                {eventCard.available_tickets}{' '}
              </span>
            )}{' '}
          </div>
        </div>

        {eventCard.available_tickets === 0 && (
          <button className="btn-soldout">
            <a href="#" className="soldout_icon">
              {' '}
            </a>
            Sold Out
          </button>
        )}

        {eventCard.available_tickets > 0 && (
          <button className="btn-available" onClick={bookEvent}>
            <a href="#" className="available_icon">
              {' '}
            </a>
            Book Event
          </button>
        )}

        {eventCard.available_tickets === 0 && (
          <a href="#" className="soldout_icon">
            {' '}
          </a>
        )}

        {eventCard.available_tickets > 0 && (
          <a href="#" className="available_icon" onClick={bookEvent}>
            {' '}
          </a>
        )}
      </div>
    </div>
  );
}

export default EventCard;
