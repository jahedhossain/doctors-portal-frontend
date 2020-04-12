import React from "react";
import "./Appointments.css";

function Appointments(props) {
  console.log(props.dateAppointments);
  return (
    <div className="Appointments mt-5">
      <div className="top">
        <h5 className="mb-5">Appointments</h5>
        <p>{props.date.toLocaleDateString()}</p>
      </div>
      <div className="dateAppointments">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Schedule</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          {props.dateAppointments.map((dateAppointment, index) => (
            <tbody key={index}>
              <tr>
                <td>{dateAppointment.name}</td>
                <td>{dateAppointment.time}</td>
                <td>
                  <select
                    className="custom-select"
                    id="inputGroupSelect03"
                    onChange={(e) => props.handeleVisited(dateAppointment, e)}
                  >
                    <option value="false">Not Visited </option>
                    <option
                      value="true"
                      selected={dateAppointment.visited && "true"}
                    >
                      Visited
                    </option>
                  </select>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}

export default Appointments;
