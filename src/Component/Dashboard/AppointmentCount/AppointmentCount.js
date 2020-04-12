import React from "react";
import "./AppointmentCount.css";

function AppointmentCount(props) {
  return (
    <div className="AppointmentCount">
      <div className="row">
        <div className="col-md-3">
          <div className="content pedding">
            <strong>{props.censelled}</strong>
            <p>Pending Appointments</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="content today">
            <strong>{props.today}</strong>
            <p>Today's Appointments</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="content total">
            <strong>{props.approved}</strong>
            <p>Total Appointments</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="content patients">
            <strong>{props.total}</strong>
            <p>Total Patients</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppointmentCount;
