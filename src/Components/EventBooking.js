import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router';

import { bookTickets } from '../store/eventStore';

function EventBooking() {
  const [submitted, setSubmitted] = useState(false);
  const [makePaymentFlag, setMakePaymentFlag] = useState(false);
  const [inputVal, setInputVal] = useState({
    name: '',
    email: '',
    phone: '',
    attendeesCount: '',
    attendeeName: '',
  });

  const [validation, setValidation] = useState({
    name: '',
    email: '',
    phone: '',
    attendeesCount: '',
    attendeeName: '',
  });

  const navigate = useNavigate();
  let { id } = useParams();
  const dispatch = useDispatch();
  let attendeeArr = [];
  let addAttendeesSec = '';
  const [addAttendees, setAddAttendees] = useState('');

  //const bookingEvent = useSelector((state) => state.find(state.id === id));
  const events = useSelector((state) => state);
  const bookingEvent =
    events.length > 0 &&
    events.filter((eve) => {
      return eve.id == id;
    })[0];

  useEffect(() => {
    checkValidation();
  }, [inputVal, submitted]);

  const checkValidation = () => {
    let errorFlag = false;
    if (submitted) {
      let errors = validation;
      const nameCondt = "^[$&+,:;=?@#|'<>.^*()%!-0-9]*$"; //'^[a-zA-Z]+(\s[a-zA-Z]+)*';;
      if (!inputVal.name.trim()) {
        errors.name = 'Please enter your name';
        errorFlag = true;
      } else if (inputVal.name.match(nameCondt)) {
        errors.name = 'Only letters and spaces are allowed';
        errorFlag = true;
      } else {
        errors.name = '';
      }

      const emailCond = '[a-z0-9]+@[a-z]+.[a-z]{2,3}';
      //"/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/";
      if (!inputVal.email.trim()) {
        errors.email = ' Please enter your email';
        errorFlag = true;
      } else if (!inputVal.email.match(emailCond)) {
        errors.email = 'invalid email';
        errorFlag = true;
      } else {
        errors.email = '';
      }

      const phoneCondt = '^(0|[1-9][0-9]*)$';
      if (!inputVal.phone.trim()) {
        errors.phone = 'Please enter your Phone No';
        errorFlag = true;
      } else if (!inputVal.phone.match(phoneCondt)) {
        errors.phone = 'Only Numbers allowed';
        errorFlag = true;
      } else {
        errors.phone = '';
      }

      setValidation(errors);

      if (!errorFlag) {
        let bookingObj = bookingEvent;
        bookingObj.headCount = inputVal.attendeesCount;
        setMakePaymentFlag(true);
        setSubmitted(false);
        dispatch(bookTickets(bookingObj));
      } else {
        setSubmitted(false);
      }
    }
  };

  const makePayment = () => {
    navigate('/', { replace: true });
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputVal((values) => ({ ...values, [name]: value }));
    if (name === 'attendeesCount') {
      for (var i = 1; i <= value; i++) {
        let obj = {
          id: i,
        };
        attendeeArr.push(obj);
      }

      addAttendeesSec = attendeeArr.map(function (key, index) {
        return (
          <div className="row my-20" key="index">
            <div className="col-5 col-s-12 text-align-right">
              <label className="booking-form-label px-10">
                Number of Attendee {key.id}:
              </label>
            </div>
            <div className="col-7 col-s-12 ">
              <input
                type="text"
                name={'attendeeName' + key.id}
                value={inputVal.attendeeName}
                onChange={handleChange}
              />
              {validation.attendeeName && (
                <p className="error-text">{validation.attendeeName}</p>
              )}
            </div>
          </div>
        );
      });
      setAddAttendees(addAttendeesSec);
    }
  };

  function bookTicket(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div id="eventBooking">
      <div className="container">
        <div className="row booking-container">
          <div className="col-12 col-s-12 py-20">
            <div className="booking-header">{bookingEvent.name}</div>
          </div>
          <div className="col-12 col-s-12 py-10">
            <div className="booking-date">{bookingEvent.date}</div>
          </div>

          <div className="col-12 col-s-12 py-10">
            <div className="booking-avai_tic">
              Ticket Available :{' '}
              <span className="font-orange">
                {' '}
                {bookingEvent.available_tickets}{' '}
              </span>
            </div>
          </div>
          <div className="col-12 my-20 ">
            <div className="row event-detail-section py-20">
              <div className="col-4 display-s-none display-m-none">
                <div className="evet-image-display">
                  <img
                    className="event-img"
                    alt="event_image"
                    src={bookingEvent.img}
                  />
                </div>
              </div>
              <div className="col-8 col-s-12 py-20">
                <form className="booking-form" onSubmit={bookTicket}>
                  <div className="row my-20">
                    <div className="col-5 col-s-12 text-align-right">
                      <label className="booking-form-label px-10">Name :</label>
                    </div>
                    <div className="col-7 col-s-12 ">
                      <input
                        type="text"
                        name="name"
                        value={inputVal.name}
                        onChange={handleChange}
                        autoComplete="autoComplete"
                      />
                      {validation.name && (
                        <p className="error-text">{validation.name}</p>
                      )}
                    </div>
                  </div>

                  <div className="row my-20">
                    <div className="col-5 col-s-12 text-align-right">
                      <label className="booking-form-label px-10">
                        Email :
                      </label>
                    </div>
                    <div className="col-7 col-s-12 ">
                      <input
                        type="text"
                        name="email"
                        value={inputVal.email}
                        onChange={handleChange}
                        autoComplete="autoComplete"
                      />
                      {validation.email && (
                        <p className="error-text">{validation.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="row my-20">
                    <div className="col-5 col-s-12 text-align-right">
                      <label className="booking-form-label px-10">
                        Phone No :
                      </label>
                    </div>
                    <div className="col-7 col-s-12 ">
                      <input
                        type="text"
                        name="phone"
                        value={inputVal.phone}
                        onChange={handleChange}
                        autoComplete="autoComplete"
                      />
                      {validation.phone && (
                        <p className="error-text">{validation.phone}</p>
                      )}
                    </div>
                  </div>

                  <div className="row my-20 display-s-none">
                    <div className="col-5 col-s-12  text-align-right">
                      <label className="booking-form-label px-10">
                        Number of Seats:
                      </label>
                    </div>
                    <div className="col-7 col-s-12 ">
                      <input
                        type="number"
                        name="attendeesCount"
                        min="1"
                        max={bookingEvent.available_tickets}
                        value={inputVal.attendeesCount}
                        onChange={handleChange}
                        autoComplete="autoComplete"
                      />
                      {validation.attendeesCount && (
                        <p className="error-text">
                          {validation.attendeesCount}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>{addAttendees}</div>

                  <div className="row my-20 display-m-none display-none">
                    <div className="col-s-12 ">
                      <label className="booking-form-label add-Attendee px-10">
                        Add Attendees
                      </label>
                    </div>
                  </div>

                  <div className="row my-20">
                    <div className="col-12 booking-button">
                      <button
                        type="submit"
                        className="booking-submit"
                        onClick={bookTicket}
                      >
                        {' '}
                        Book Tickets{' '}
                      </button>
                      <button type="button" className="booking-cancel">
                        {' '}
                        Cancel{' '}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row py-20"></div>
      </div>
      <div
        className={
          makePaymentFlag ? 'bg-overlay' : 'display-none display-s-none'
        }
      >
        <div className="row makePayment-container">
          <div className="col-12 col-s-12 py-20">
            <div className="makepayment-header">
              You have Booked
              <div className="font-bold font-orange">
                {inputVal.attendeesCount == '' ? 0 : inputVal.attendeesCount}
              </div>
              <span className="font-bold"> tickets </span> for
            </div>
          </div>
          <div className="col-12 col-s-12 py-20">
            <div className="row makepayment-content">
              <div className="col-12">{bookingEvent.name}</div>
              <div className="col-12 makepayment-date">{bookingEvent.date}</div>
            </div>
          </div>
          <div className="col-12 makepayment-button">
            <button
              type="button"
              className="makepayment-submit"
              onClick={makePayment}
            >
              {' '}
              Make Payment{' '}
            </button>
            <button
              type="button"
              className="makepayment-cancel"
              onClick={(e) => setMakePaymentFlag(false)}
            >
              {' '}
              Back to Booking{' '}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventBooking;
