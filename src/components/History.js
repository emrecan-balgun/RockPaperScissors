import { nanoid } from 'react'
import { useSelector } from "react-redux";
import { history } from "../redux/historySlice";

function History() {
    const historyList = useSelector(history);

    // function asagiKaydir() {
    //     window.scrollBy(0, 25)
    // }

    return (
        <div className="history">
            <h1>History</h1>
            <div className="historyContainer">
                {
                    historyList.map((history) => (
                        <p className="round">{history.playerChoice} <span style={{ color: '#B91646', backgroundColor: 'transparent'}}>vs</span> {history.computerChoice}</p>
                    ))
                }
            </div>
        </div>
    )
}

export default History
