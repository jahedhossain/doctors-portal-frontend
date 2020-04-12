import React from "react";
import "./Model.css";

function Model(props) {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <p className="success">{props.success}</p>
          <div className="modal-header flex-column">
            <h4
              className="modal-title"
              id="exampleModalLabel"
              style={{ display: "block" }}
            >
              Name: {props.editPrescription.name}
            </h4>
            <p className="mt-2">Prescription Add</p>
          </div>
          <div className="modal-body">
            <textarea
              name=""
              id=""
              cols="50"
              rows="10"
              className="form-control"
              onChange={props.handleChange}
            ></textarea>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={props.handleSubmit}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Model;
