import React from 'react'

function ScoreBoard() {
    return (
        <div className="scoreContainer">
            <div className="scoreBoard">
                <h1 className="gameName">Rock Paper Scissors</h1>
                <div className="board">
                    <h1>Score</h1>
                    <div className="box">
                        <h2>0</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScoreBoard
