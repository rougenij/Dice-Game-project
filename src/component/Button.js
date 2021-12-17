import React from "react";
import "../App.css";

function Button(props) {
  return (
    <button className="gameoptions-buttons" onClick={props.handleClick}>
      <i className={props.iconclass}></i> {props.text}
    </button>
  );
}

export default Button;
