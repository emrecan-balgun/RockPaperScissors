import React from 'react';
import { useSelector } from 'react-redux';
import { score } from '../redux/historySlice';

function ScoreBoard() {

    const scoreBoard = useSelector(score);

    return (
        <div className="score-container">
            <div className="score-board">
                <h1 className="score-board__game-name">Rock Paper Scissors</h1>
                <div className="score-board__board">
                    <h1 className="score-board__board__title">Score</h1>
                    <div className="score-board__box">
                        <h2 className="score-board__box__title">{scoreBoard}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScoreBoard
