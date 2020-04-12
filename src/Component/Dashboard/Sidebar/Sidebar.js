import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faCalendar,
  faFilePrescription,
  faHospitalUser,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
function Sidebar() {
  return (
    <div className="Sidebar">
      <ul>
        <li>
          <Link to="dashboard">
            <FontAwesomeIcon icon={faTachometerAlt} />
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/appointmentDeshbord">
            <FontAwesomeIcon icon={faCalendar} />
            Appointment
          </Link>
        </li>
        <li>
          <Link to="patients">
            <FontAwesomeIcon icon={faHospitalUser} />
            Patients
          </Link>
        </li>
        <li>
          <Link to="prescriptions">
            <FontAwesomeIcon icon={faFilePrescription} />
            Prescriptions
          </Link>
        </li>
        <li>
          <Link to="setting">
            <FontAwesomeIcon icon={faCog} />
            Setting
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
