import React from "react";
import "./RecentAppointment.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenAlt } from "@fortawesome/free-solid-svg-icons";
import Model from "../Model/Model";

function RecentAppointment(props) {
  return (
    <div className="RecentAppointment">
      <div className="top">
        <h4 className="m-3">RecentAppointment</h4>
        <select className="custom-select" id="inputGroupSelect03">
          <option>Week</option>
          <option value="1">Month</option>
          <option value="2">Year</option>
        </select>
      </div>
      <div className="row">
        <div className="col-md-12">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Sr.NO</th>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
                <th scope="col">Name</th>
                <th scope="col">Contact</th>
                <th scope="col">Prescription</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            {props.appointments.map((appointment, index) => (
              <tbody key={index}>
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{appointment.date}</td>
                  <td>{appointment.time}</td>
                  <td>{appointment.name}</td>
                  <td>{appointment.phoneNumber}</td>
                  <td onClick={() => props.handlePrescription(appointment)}>
                    {appointment.prescription ? (
                      <button
                        style={{ width: "100px" }}
                        data-toggle="modal"
                        data-target="#exampleModal"
                        className="btn action"
                      >
                        View
                      </button>
                    ) : (
                      <button
                        data-toggle="modal"
                        data-target="#exampleModal"
                        className="btn action"
                        style={{ background: "#fff", width: "100px" }}
                      >
                        Not added
                      </button>
                    )}
                  </td>
                  <td className="edit">
                    <select
                      className={"custom-select " + appointment.status}
                      id="inputGroupSelect03"
                      onChange={(e) => props.handleAction(appointment, e)}
                    >
                      <option
                        selected={
                          appointment.status === "pending" ? true : false
                        }
                        value="pending"
                      >
                        Pending
                      </option>
                      <option
                        selected={
                          appointment.status === "approved" ? true : false
                        }
                        value="approved"
                      >
                        Approved
                      </option>
                      <option
                        selected={
                          appointment.status === "cancelled" ? true : false
                        }
                        value="cancelled"
                      >
                        Cancelled
                      </option>
                    </select>
                    <b className="editIcon">
                      <FontAwesomeIcon icon={faPenAlt} />
                    </b>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
          <Model
            editPrescription={props.editPrescription}
            handleChange={props.handleChange}
            handleSubmit={props.handleSubmit}
            success={props.success}
          />
        </div>
      </div>
    </div>
  );
}

export default RecentAppointment;
