import React from "react";
import "../App.css";

const Dice = (props) => {
  return <div className={"dice " + props.source}></div>;
};

export default Dice;
