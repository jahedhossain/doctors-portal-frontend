import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar/Sidebar";
import AppointmentCount from "./AppointmentCount/AppointmentCount";
import RecentAppointment from "./RecentAppointment/RecentAppointment";

function Dashboard() {
  const [appointments, setAppointments] = useState([]);
  const [editPrescription, setEditPrescription] = useState({});
  const [textareaValue, setTextareaValue] = useState("");
  const [success, setSuccess] = useState("");
  const [status, setStatus] = useState("padding");

  const [approved, setApproved] = useState(0);
  const [today, setToday] = useState(0);
  const [censelled, setCenselled] = useState(0);
  const [total, setTotal] = useState(0);

  // click  button Prescription data useState store
  const handlePrescription = (prescription) => {
    setEditPrescription(prescription);
  };

  useEffect(() => {
    fetch("https://shrouded-reaches-60236.herokuapp.com/appointment")
      .then((res) => res.json())
      .then((appointments) => {
        setAppointments(appointments);
      })
      .catch((err) => console.log(err));
  }, [status, success]);

  // textarea change hendlear
  const handleChange = (e) => {
    const prescription = e.target.value;
    setTextareaValue(prescription);
  };

  // submit Prescription add
  const handleSubmit = () => {
    const update = {
      id: editPrescription._id,
      prescription: textareaValue,
    };

    fetch("https://shrouded-reaches-60236.herokuapp.com/updatePrescription", {
      method: "PUT",
      body: JSON.stringify(update),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => setSuccess("Update Success full"))
      .then((json) => console.log(json));
  };

  // handleAction updateStatus
  const handleAction = (arg, e) => {
    const id = arg._id;
    const status = e.target.value;
    const updateStatus = {
      id,
      status,
    };

    fetch("https://shrouded-reaches-60236.herokuapp.com/updateStatus", {
      method: "PUT",
      body: JSON.stringify(updateStatus),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        alert("updateStatus successful");
      })
      .catch((err) => console.log(err));
    setStatus(e.target.value);
  };

  useEffect(() => {
    const today = appointments.filter(
      (element) => element.status === "pending"
    );
    setToday(today.length);

    const censelled = appointments.filter(
      (element) => element.status === "cancelled"
    );
    setCenselled(censelled.length);

    const approved = appointments.filter(
      (element) => element.status === "approved"
    );
    setApproved(approved.length);

    const total = appointments.length;
    setTotal(total);
  }, [appointments]);

  return (
    <div className="container-fluid appointments">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9">
          <div className="row">
            <h2 className="m-3">Dashboard</h2>
          </div>
          <AppointmentCount
            approved={approved}
            today={today}
            censelled={censelled}
            total={total}
          />
          <RecentAppointment
            appointments={appointments}
            handlePrescription={handlePrescription}
            editPrescription={editPrescription}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            success={success}
            handleAction={handleAction}
            status={status}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
