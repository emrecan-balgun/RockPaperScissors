import { useSelector } from "react-redux";
import { history, roundCount } from "../redux/historySlice";

function History() {
  const historyList = useSelector(history);
  const roundWinner = useSelector(roundCount);

  return (
    <div className="history">
      <h1>History</h1>
      <div className="historyContainer">
        {historyList.map((history, key) => (
          <p className={`round ${history.roundWinner}`} key={key}>
            {history.playerChoice}
            <span style={{ color: "#B91646", backgroundColor: "transparent" }}>
              vs
            </span>
            {history.computerChoice}
          </p>
        ))}
      </div>
    </div>
  );
}

export default History;
