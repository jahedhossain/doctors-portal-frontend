import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../../utilities/Button/Button";
import "./BookingFrom.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function BookingForm(props) {
  const { register, handleSubmit, errors } = useForm();
  const { title, time } = props.bookingInfo;

  return (
    <div className="BookingForm form-group">
      <h3 className="mb-3">{title}</h3>
      <form onSubmit={handleSubmit(props.handlerSubmit)}>
        <input
          name="date"
          ref={register({ required: true })}
          className="form-control"
          placeholder="your date"
          defaultValue={props.date}
          disabled
        />
        {errors.date && <span>This field date is required</span>}

        <input
          name="time"
          ref={register({ required: true })}
          className="form-control"
          defaultValue={time}
          disabled
        />
        {errors.time && <span>This field time is required</span>}

        <input
          name="name"
          ref={register({ required: true })}
          className="form-control"
          placeholder="Your Name"
        />
        {errors.name && <span>This field name is required</span>}

        <input
          name="phoneNumber"
          type="number"
          ref={register({ required: true })}
          className="form-control"
          placeholder="Phone Number"
        />
        {errors.phoneNumber && <span>This field phoneNumber is required</span>}

        <input
          name="email"
          type="email"
          ref={register({ required: true })}
          className="form-control"
          placeholder="Email Address"
        />
        {errors.email && <span>This field email is required</span>}

        <input
          name="weight"
          type="number"
          ref={register({ required: true })}
          className="form-control"
          placeholder="Weight/KG"
        />
        {errors.weight && <span>This field weight is required</span>}

        <input
          name="age"
          type="number"
          ref={register({ required: true })}
          className="form-control"
          placeholder="Age"
        />
        {errors.age && <span>This field age is required</span>}

        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          name="address"
          ref={register({ required: true })}
        ></textarea>
        {errors.name && <span>This field address is required</span>}

        <br />
        <div className="div d-flex justify-content-around">
          <Button text="Submit" />
          <button className="btn" onClick={props.modelClose}>
            <FontAwesomeIcon icon={faTimes} />
            Close
          </button>
        </div>
      </form>
    </div>
  );
}

export default BookingForm;
