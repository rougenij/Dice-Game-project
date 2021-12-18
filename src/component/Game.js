import React from "react";
import PlayerCard from "./PlayerCard";
import GameOptions from "./GameOptions";
import "../App.css";

class Game extends React.Component {
  state = {
    pointsToWin: "",
    dices: [null, null],
    playersTurns: 1,
    winner: false,
    player1currentscore: 0,
    player1totalscore: 0,
    player1name: "Player 1",
    player2currentscore: 0,
    player2totalscore: 0,
    player2name: "Player 2",
    player1current: "currentplayer",
    player2current: "",
    player1winner: "",
    player2winner: "",
    isDisabled: false,
    text: "Please Insert a number in the input field down below. Default is 100",
  };

  handleDice = () => {
    if (this.state.pointsToWin === "" || this.state.pointsToWin === undefined) {
      this.setState({ pointsToWin: 100 });
    }
    if (!this.state.winner) {
      const diceImage = {
        1: "Dice-1",
        2: "Dice-2",
        3: "Dice-3",
        4: "Dice-4",
        5: "Dice-5",
        6: "Dice-6",
      };
      const dice1 = Math.ceil(Math.random() * 6);
      const dice2 = Math.ceil(Math.random() * 6);
      this.setState({
        dices: [diceImage[dice1], diceImage[dice2]],
        isDisabled: true,
        text: "",
      });
      this.DiceSum(dice1, dice2);
      if (dice1 === dice2) {
        switch (this.state.playersTurns) {
          case 1:
            this.setState({ playersTurns: 2 }, () => {
              this.setState({
                player1currentscore: 0,
                player2current: "currentplayer",
                player1current: "",
              });
            });
            break;
          case 2:
            this.setState({ playersTurns: 1 }, () => {
              this.setState({
                player2currentscore: 0,
                player1current: "currentplayer",
                player2current: "",
              });
            });
            break;
          default:
        }
      }
    }
  };

  DiceSum = (dice1, dice2) => {
    const sum = dice1 + dice2;
    if (this.state.playersTurns === 1) {
      this.setState({
        player1currentscore: sum + this.state.player1currentscore,
      });
    } else {
      this.setState({
        player2currentscore: sum + this.state.player2currentscore,
      });
    }
  };

  handleHold = () => {
    if (!this.state.winner) {
      const newState = {};
      if (this.state.playersTurns === 1) {
        newState.player1totalscore =
          this.state.player1currentscore + this.state.player1totalscore;
        newState.player1currentscore = 0;
        newState.playersTurns = 2;
        newState.player2current = "currentplayer";
        newState.player1current = "";
      } else if (this.state.playersTurns === 2) {
        newState.player2totalscore =
          this.state.player2currentscore + this.state.player2totalscore;
        newState.player2currentscore = 0;
        newState.playersTurns = 1;
        newState.player1current = "currentplayer";
        newState.player2current = "";
      }
      if (newState.player1totalscore > this.state.pointsToWin) {
        newState.winner = true;
        newState.player1name = "Winner";
        newState.player1winner = "Winner";
        newState.player2current = "";
        newState.player1currentscore = "";
        newState.text = "Click on new Game to begin a new one";
      } else if (newState.player2totalscore > this.state.pointsToWin) {
        newState.winner = true;
        newState.player2name = "Winner";
        newState.player2winner = "Winner";
        newState.player1current = "";
        newState.player2currentscore = "";
        newState.text = "Click on new Game to begin a new one";
      }
      console.log(newState);
      this.setState(newState);
    }
  };
  handleNewGame = () => {
    this.setState({
      pointsToWin: "",
      dices: [null, null],
      playersTurns: 1,
      winner: false,
      player1currentscore: 0,
      player1totalscore: 0,
      player1name: "Player 1",
      player2currentscore: 0,
      player2totalscore: 0,
      player2name: "Player 2",
      player1current: "currentplayer",
      player2current: "",
      player1winner: "",
      player2winner: "",
      isDisabled: "",
      text: "Please Insert a number in the input field down below. Default is 100",
    });
  };
  handleInput = (input) => {
    if (input === "" || input === undefined) {
      this.setState({ pointsToWin: 100 });
    } else {
      this.setState({ pointsToWin: input });
    }
  };

  handleShowRules = () => {};
  render() {
    return (
      <div className="game-container">
        <PlayerCard
          name={this.state.player1name}
          classes={this.state.player1current}
          isWinner={this.state.player1winner}
          totalScore={this.state.player1totalscore}
          currentScore={this.state.player1currentscore}
          iconclass="bx bx-dice-1"
        />
        <GameOptions
          diceImgs={this.state.dices}
          rollHandle={this.handleDice}
          holdHandle={this.handleHold}
          newGameHandle={this.handleNewGame}
          value={this.handleInput}
          pointsToWin={this.state.pointsToWin}
          disabled={this.state.isDisabled}
          text={this.state.text}
        />
        <PlayerCard
          name={this.state.player2name}
          classes={this.state.player2current}
          isWinner={this.state.player2winner}
          totalScore={this.state.player2totalscore}
          currentScore={this.state.player2currentscore}
          iconclass="bx bx-dice-2"
        />
      </div>
    );
  }
}

export default Game;
