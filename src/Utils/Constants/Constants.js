import {
  rockImage,
  paperImage,
  scissorsImage,
} from "../Helpers/Images.helpers";

export const GameOverMessage = {
  playerWon: {
    message: "You Won. Congratulations. ",
  },
  computerWon: {
    message: "You Lost. Try again.",
  },
};

export const RoundChoices = [
  {
    name: "Rock",
    src: rockImage,
    alt: "rock",
    cursor: true
  },
  {
    name: "Paper",
    src: paperImage,
    alt: "paper",
    cursor: true
  },
  {
    name: "Scissors",
    src: scissorsImage,
    alt: "scissors",
    cursor: true
  },
];


{/*           <img
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
          /> */}