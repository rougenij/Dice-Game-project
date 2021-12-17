//! React
//----------------------------------------------------------------
//TODO Components:
// Player Card Component
// 1) Player Name Component
// 2) Score Component
// 3) Total Score Component
// 4) CurrentPlayer Component

// Middle Component
// Button Component
// Input Component
// Dices Component

//! CSS
// selected Class -- Activate the red dot
// notselected Class Deactivate the red dot

import React from "react";

const test = (props) => {};

class GameBoard extends React.Component {
  state = {
    score: 0,
  };
  render() {
    return (
      <div>
        <Player playername="Player1" />
        <GameSettings />
        <Player playername="Player2" />
      </div>
    );
  }
}

class Player extends React.Component {
  render() {
    return (
      <div>
        <PlayerName />
        {/*  return <h1 className={this.props.playername}>{this.props.playername}</h1> */}
        <PlayerScore />
        {/*  return <h4>Score : {this.props.playescore}</h4> */}
        <PlayerTotalScore />
        {/*  return <h3>Total : {this.props.playertotalscore}</h3> */}
      </div>
    );
  }
}

//! Deleted
// this.setState({
//   player1totalscore: this.player1currentscore + this.player1totalscore,
//   player1currentscore: 0,
// this.setState({
//   player2totalscore: this.player2currentscore + this.player2totalscore,
//   player2currentscore: 0,
