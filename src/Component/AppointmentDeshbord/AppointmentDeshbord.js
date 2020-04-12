import React, { useState, useEffect } from "react";
import Sidebar from "../Dashboard/Sidebar/Sidebar";
import Calendar from "react-calendar";
import Appointments from "./Appointments/Appointments";

function AppointmentDeshbord() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);
  const [dateAppointments, setDateAppointments] = useState([]);

  //currentDate show handle
  const handleDate = (date) => {
    setCurrentDate(date);
  };

  // server data all appointments
  useEffect(() => {
    fetch("https://shrouded-reaches-60236.herokuapp.com/appointment")
      .then((res) => res.json())
      .then((appointments) => {
        setAppointments(appointments);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const clickDateData = appointments.filter(
      (appointment) => appointment.date === currentDate.toLocaleDateString()
    );
    setDateAppointments(clickDateData);
  }, [currentDate, appointments]);

  // visited update
  const handeleVisited = (arg, e) => {
    const id = arg._id;
    let visited;
    if (e.target.value === "true") {
      visited = true;
    } else {
      visited = false;
    }

    const updateVisited = {
      id,
      visited,
    };

    fetch("https://shrouded-reaches-60236.herokuapp.com/updateVisited", {
      method: "PUT",
      body: JSON.stringify(updateVisited),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        alert("updateVisited successful");
      })
      .catch((err) => console.log(err));
    console.log(updateVisited);
  };
  return (
    <div className="container-fluid appointments">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9">
          <div className="row">
            <div className="col-md-6 mt-5">
              <div className="top">
                <h3 className="mb-5">Appointments</h3>
              </div>
              <Calendar onChange={handleDate} value={currentDate} />
            </div>
            <div className="col-md-6 mt-5">
              <Appointments
                date={currentDate}
                dateAppointments={dateAppointments}
                handeleVisited={handeleVisited}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppointmentDeshbord;
