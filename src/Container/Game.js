import React from "react";
import ScoreBoard from "./ScoreBoard";

import "./styles.css";

import { currentComputer } from "../redux/historySlice";

import GameBoard from "./GameBoard";

const Game = () => {
  console.log("asdsad", currentComputer);

  return (
    <div className="game">
      <ScoreBoard />
      <GameBoard />
    </div>
  );
};

export default Game;
