import React from "react";
import "./Bunner.css";
import { Link, useLocation } from "react-router-dom";
import Button from "../../utilities/Button/Button";
import banner_img_left from "../../assets/images/Mask Group 1.png";
import Calender from "../Calender/Calender";

function Banner(props) {
  let { pathname } = useLocation();
  return (
    <div className="banner_section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            {pathname === "/" ? (
              <div className="content_left w-50">
                <h1>Your New Smile Starts Here</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  laboriosam facilis ab aliquam! Sunt, quae?
                </p>
                <Link to="/appointment" className="btn text-uppercase">
                  <Button text="Get Appointment" className="text-uppercase" />
                </Link>
              </div>
            ) : (
              <div className="calender">
                <h1>Appointment</h1>
                <Calender handleDate={props.handleDate} />
              </div>
            )}
          </div>
          <div className="col-md-6">
            <img src={banner_img_left} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
