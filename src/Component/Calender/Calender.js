import React from "react";
import "./Calender.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function Calender(props) {
  return (
    <div>
      <Calendar onChange={props.handleDate} value={new Date()} />
    </div>
  );
}

export default Calender;
