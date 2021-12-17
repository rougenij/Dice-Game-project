import React from "react";
import Button from "./Button";
import Dice from "./Dices";
import "../App.css";

function GameOptions(props) {
  return (
    <div className="gameoptions-container">
      <p>{props.text}</p>
      <input
        disabled={props.disabled}
        onChange={(e) => {
          props.value(e.target.value);
        }}
      ></input>
      <Button
        text="New Game"
        handleClick={props.newGameHandle}
        iconclass="fas fa-play"
      />
      <Dice source={props.diceImgs[0]} />
      <Dice source={props.diceImgs[1]} />
      <Button
        text="Roll Dice"
        handleClick={props.rollHandle}
        iconclass="fas fa-dice"
      />
      <Button
        text="Hold"
        handleClick={props.holdHandle}
        iconclass="fas fa-pause"
      />
    </div>
  );
}

export default GameOptions;
