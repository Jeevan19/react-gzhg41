import React from 'react';

function EventCard() {
  return (
    <div class="card">
      <img
        src="https://alvimurtaza.github.io/Interview-Front-end/images/l3-l4-engineer/event-1.png"
        class="card-img"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title font-28">
          Understanding Color Theory: The Color Wheel And Findi..
        </h5>

        <div class="card-text py-20">
          <span class="font-24">21 Sep, 2020</span>
          <span class="font-24">TicketAvailable: N/A</span>
        </div>

        <button class="btn-soldout">
          <a href="#" class="soldout_icon">
            {' '}
          </a>
          Sold Out
        </button>
      </div>
    </div>
  );

  /*<button class="btn-available"> 
                    <a href="#" class="available_icon">  </a>
                     Book Event 
                </button>
                */
}

export default EventCard;
