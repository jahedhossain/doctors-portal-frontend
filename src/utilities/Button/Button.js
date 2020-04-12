import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <button className="btn primary_btn" onClick={props.handleClick}>
      {props.text}
    </button>
  );
}

export default Button;
