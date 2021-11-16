import React from 'react'
import ScoreBoard from './ScoreBoard';
import History from './History';
import './styles.css';

import { useDispatch } from "react-redux";
import { addHistory } from "../redux/historySlice";
 
function Main() {
    const dispatch = useDispatch()
  
    const choiceList = ["Rock", "Paper", "Scissors"];
    const choiceImgList = ["https://i.ibb.co/NmgKXvZ/rock.png", "https://i.ibb.co/xs2PrfY/paper.png", "https://i.ibb.co/q0tfr48/scissors.png"]
    const game = (playerChoice) => {
      const computerChoice = choiceList[Math.floor(Math.random() * 3)];
      dispatch(addHistory({ playerChoice, computerChoice }));
    };

    return (
        <>
            <ScoreBoard />
            <div className="main">
                <div className="container">
                    <h1>Player</h1>
                    <div className="gameContainer">
                        <img 
                            className="playerChoice" 
                            onClick={() => game(choiceList[0])} 
                            src={choiceImgList[0]}
                            alt={choiceList[0]}
                        />
                        <img 
                            className="playerChoice" 
                            onClick={() => game(choiceList[1])} 
                            src={choiceImgList[1]}
                            alt={choiceList[1]}
                        />
                        <img 
                            className="playerChoice"
                            onClick={() => game(choiceList[2])} 
                            src={choiceImgList[2]}
                            alt={choiceList[2]}
                        />
                    </div>
                    <h1>Computer</h1>
                    <div className="gameContainer">
                        <img 
                            className="computerChoice"
                            src="https://i.ibb.co/NmgKXvZ/rock.png"
                            alt="rock"/>
                    </div>
                </div>
                <History/>
            </div>
        </>
    )
}

export default Main
