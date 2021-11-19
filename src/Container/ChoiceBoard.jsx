import {
  addHistory,
  increaseRound,
  scoreBoard,
  currentComputer,
  setCurrentComputerChoice,
} from "../redux/historySlice";
import {
  paperImage,
  rockImage,
  scissorsImage,
} from "../Utils/Helpers/Images.helpers";


import { useDispatch, useSelector } from "react-redux";

const ChoiceBoard = () => {
  const dispatch = useDispatch();

  const choiceList = ["Rock", "Paper", "Scissors"];
  const currentComputerChoice = useSelector(currentComputer);

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
    dispatch(setCurrentComputerChoice(computerChoice));
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
      : scissorsImage;

  return (
    <div className="choice-board">
      <div className="choice-board__container">
        <p className="choice-board__player">Player</p>
        <div className="choice-board__images">
          <img
            className="choice-board__img choice-board__img--cursor"
            onClick={() => game(choiceList[0])}
            src={rockImage}
            alt={rockImage}
          />
          <img
            className="choice-board__img choice-board__img--cursor"
            onClick={() => game(choiceList[1])}
            src={paperImage}
            alt={paperImage}
          />
          <img
            className="choice-board__img choice-board__img--cursor"
            onClick={() => game(choiceList[2])}
            src={scissorsImage}
            alt={scissorsImage}
          />
        </div>

        <p className="choice-board__computer">Computer</p>
        <div className="choice-board">
          <img
            className="choice-board__img"
            src={computerImg}
            alt="rock"
          />
        </div>
      </div>
    </div>
  );
};
export default ChoiceBoard;
