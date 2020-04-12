import React from "react";
import Button from "../../../utilities/Button/Button";
import "./Booking.css";

function Booking(props) {
  const { title, time, available } = props;

  return (
    <div className="col-md-4">
      <div className="booking m-2">
        <h4>{title}</h4>
        <strong>{time}</strong>
        <p>{available}</p>
        <Button
          text="Book Appointment"
          handleClick={() => props.handleClick({ title, time, available })}
        />
      </div>
    </div>
  );
}

export default Booking;
