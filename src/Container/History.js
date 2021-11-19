import { useSelector } from "react-redux";
import { history } from "../redux/historySlice";
import { useState } from "react";

function History() {
  const historyList = useSelector(history);
  const [showHistory, setShowHistory] = useState(true);

  const toggleHistory = () => {
    setShowHistory(!showHistory);
  };

  return (
    <div className="history">
      <div className="history__title" onClick={toggleHistory}>
        History
      </div>
      <div
        className={`history__container ${
          showHistory ? "history__container--toggle" : ""
        }`}
      >
        {historyList.map((history, key) => (
          <div
            className={`history__container-round history__container--${history.roundWinner.toLowerCase()}`}
            key={key}
          >
            <p>
              {history.playerChoice}
              vs
              {history.computerChoice}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default History;
