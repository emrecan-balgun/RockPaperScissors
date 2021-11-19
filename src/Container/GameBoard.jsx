import {
    addHistory,
    increaseRound,
    scoreBoard,
    currentComputer,
    setCurrentComputerChoice
  } from "../redux/historySlice";
  import {
    paperImage,
    rockImage,
    scissorsImage,
  } from "../Utils/Helpers/Images.helpers";

  import { useDispatch, useSelector } from "react-redux";
  import History from "./History";

const GameBoard = () => {

    const dispatch = useDispatch();

    const choiceList = ["Rock", "Paper", "Scissors"];
    const currentComputerChoice = useSelector(currentComputer)
  
    const choiceImgList = [
      "https://i.ibb.co/NmgKXvZ/rock.png",
      "https://i.ibb.co/xs2PrfY/paper.png",
      "https://i.ibb.co/q0tfr48/scissors.png",
    ];
    const winner = (playerChoice, computerChoice) => {
      if (playerChoice === "Rock" && computerChoice === "Scissors") {
        return "Player";
      } else if (playerChoice === "Rock" && computerChoice === "Paper") {
        return "Computer";
      } else if (playerChoice === "Rock" && computerChoice === "Rock") {
        return "Draw";
      } else if (playerChoice === "Paper" && computerChoice === "Rock") {
        return "Player";
      } else if (playerChoice === "Paper" && computerChoice === "Scissors") {
        return "Computer";
      } else if (playerChoice === "Paper" && computerChoice === "Paper") {
        return "Draw";
      } else if (playerChoice === "Scissors" && computerChoice === "Rock") {
        return "Computer";
      } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
        return "Player";
      } else if (playerChoice === "Scissors" && computerChoice === "Scissors") {
        return "Draw";
      }
    };
  
    const game = (playerChoice) => {
      const computerChoice = choiceList[Math.floor(Math.random() * 3)];
      const roundWinner = winner(playerChoice, computerChoice);
      dispatch(setCurrentComputerChoice(computerChoice))
      winner(playerChoice, computerChoice) === "Player"
        ? dispatch(scoreBoard(1))
        : winner(playerChoice, computerChoice) === "Computer"
        ? dispatch(scoreBoard(-1))
        : dispatch(scoreBoard(0));
      dispatch(addHistory({ playerChoice, computerChoice, roundWinner }));
      dispatch(increaseRound());
    };
  
    const computerImg =
    currentComputerChoice === "Rock"
        ? rockImage
        : currentComputerChoice === "Paper"
        ? paperImage
        : currentComputerChoice === "Scissors"
        ? scissorsImage
        : "fafa";
  

  return (
    <div className="game-board">
      <div className="game-board__container">
        <h1 className="container__title">Player</h1>
        <div className="game-container">
          <img
            className="game-container__playerChoice"
            onClick={() => game(choiceList[0])}
            src={choiceImgList[0]}
            alt={choiceList[0]}
          />
          <img
            className="game-container__playerChoice"
            onClick={() => game(choiceList[1])}
            src={choiceImgList[1]}
            alt={choiceList[1]}
          />
          <img
            className="game-container__playerChoice"
            onClick={() => game(choiceList[2])}
            src={choiceImgList[2]}
            alt={choiceList[2]}
          />
        </div>
        <h1>Computer</h1>
        <div className="game-container">
          <img
            className="game-container__computerChoice"
            src={computerImg}
            alt="rock"
          />
        </div>
      </div>
      <History />
    </div>
  );
};

export default GameBoard;
