import React from "react";
import PlayerScore from "./PlayerScore";

const PlayerCard = (props) => {
  return (
    <div className={`player-container  ${props.classes} ${props.isWinner}`}>
      <h1>{props.name}</h1>
      <PlayerScore score={props.totalScore} />
      <PlayerScore score={props.currentScore} />
    </div>
  );
};

export default PlayerCard;
