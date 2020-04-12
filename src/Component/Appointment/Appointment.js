/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Header from "../Header/Header";
import AppointmentBooking from "../AppointmentBooking/AppointmentBooking";

function Appointment() {
  const [date, setDate] = useState(new Date());
  const handleDate = (event) => {
    setDate(event);
  };

  return (
    <div>
      <Header handleDate={handleDate} />
      <AppointmentBooking date={date} />
    </div>
  );
}

export default Appointment;
