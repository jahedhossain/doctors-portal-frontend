import React, { useState } from "react";
import Booking from "./Booking/Booking";
import BookingForm from "./BookingForm/BookingForm";
import "./AppointmentBooking.css";

function AppointmentBooking(props) {
  const [model, setModel] = useState(false);
  const [bookingInfo, setBookingInfo] = useState({});

  const [bookings, setBookings] = useState([
    {
      title: "Teeth Orthodontics",
      time: "8:00 AM - 9:00 AM",
      available: " 10 spaces available",
    },
    {
      title: "Cosmetic Dentistry",
      time: "10:05 AM - 11:30 AM",
      available: " 10 spaces available",
    },
    {
      title: "Teeth cleaning",
      time: "5:00 pm - 6:30 pm",
      available: " 10 spaces available",
    },
    {
      title: "Cavity Protection",
      time: "7:00 AM - 8:30 AM",
      available: " 10 spaces available",
    },
    {
      title: "Teeth Orthodontics",
      time: "8:00 AM - 9:00 AM",
      available: " 10 spaces available",
    },
    {
      title: "Teeth Orthodontics",
      time: "2:00 PM - 3:00 PM",
      available: " 10 spaces available",
    },
  ]);
  // appointment booking button click handler
  const handleClick = (booking) => {
    setModel(true);
    setBookingInfo(booking);
  };
  //appointment form close button
  const modelClose = () => {
    setModel(false);
  };

  //appointment from data summit handler
  const handlerSubmit = (data) => {
    const dataSend = {
      ...data,
      ...bookingInfo,
      date: props.date.toLocaleDateString(),
      time: props.date.toLocaleTimeString("en-US"),
      visited: false,
      prescription: null,
      status: "pending",
    };
    fetch("https://shrouded-reaches-60236.herokuapp.com/appointment", {
      method: "POST",
      body: JSON.stringify(dataSend),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setModel(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container-fluid">
      <div className="AppointmentBooking text-center m-5">
        <h2> Available Appointments on {props.date.toDateString()} </h2>
        <div className="row">
          {bookings.map((booking, index) => (
            <Booking
              key={index}
              title={booking.title}
              time={booking.time}
              available={booking.available}
              handleClick={handleClick}
            />
          ))}
        </div>

        {model && (
          <BookingForm
            modelClose={modelClose}
            bookingInfo={bookingInfo}
            date={props.date.toDateString()}
            handlerSubmit={handlerSubmit}
          />
        )}
      </div>
    </div>
  );
}

export default AppointmentBooking;
