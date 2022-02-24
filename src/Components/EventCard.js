import React, { useState } from 'react';

function EventCard(props) {
  let eventCard = props.data;

  return (
    <div className="card">
      <img src={eventCard.img} className="card-img" alt="..." />
      <div className="card-body">
        <div className="card-title font-28 font-bold">{eventCard.name}</div>

        <div className="card-text py-20">
          <span className="font-24">{eventCard.date}</span>
          <span className="font-24">
            TicketAvailable:
            {eventCard.available_tickets === 0 && 'N/A'}
            {eventCard.available_tickets > 0 && eventCard.available_tickets}
          </span>
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
          <button className="btn-available">
            <a href="#" className="available_icon">
              {' '}
            </a>
            Book Event
          </button>
        )}
      </div>
    </div>
  );

  /*<button className="btn-available"> 
                    <a href="#" className="available_icon">  </a>
                     Book Event 
                </button>
                */
}

export default EventCard;
