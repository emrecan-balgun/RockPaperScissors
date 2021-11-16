import React from 'react';
import { useSelector } from 'react-redux';
import { score } from '../redux/historySlice';

function ScoreBoard() {

    const scoreBoard = useSelector(score);

    return (
        <div className="scoreContainer">
            <div className="scoreBoard">
                <h1 className="gameName">Rock Paper Scissors</h1>
                <div className="board">
                    <h1>Score</h1>
                    <div className="box">
                        <h2>{scoreBoard}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScoreBoard
