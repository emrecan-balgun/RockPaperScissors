import React from "react";
import ScoreBoard from "./ScoreBoard";
import "./styles.css";
import GameBoard from "./GameBoard";
import GameOverModal from "./GameOverModal";
import { useSelector } from "react-redux";
import { score } from "../redux/historySlice";


const Game = () => {
  const scoreBoard = useSelector(score);

  return (
    <div className="game">
      <GameOverModal /> 
      <ScoreBoard />
      <GameBoard />
    </div>
  );
};

export default Game;
