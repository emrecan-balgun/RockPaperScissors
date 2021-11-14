import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addHistory } from "./features/history/historySlice";
import { history } from "./features/history/historySlice";

import "./App.css";
import "./Styles/main.scss";
import Main from "./Container/Main";
import History from "./Container/History";

function App() {
  const dispatch = useDispatch();
  const historyList = useSelector(history);

  const choiceList = ["Taş", "Kağıt", "Makas"];
  const game = (userChoice) => {
    const machineChoice = choiceList[Math.floor(Math.random() * 3)];
    dispatch(addHistory({ userChoice, machineChoice }));
  };

  return (
    <div className="App">
      <main className="main container">
        <Main />
        <History />
      </main>
      <button onClick={() => game(choiceList[0])}>Taş</button>
      <button onClick={() => game(choiceList[1])}>Kağıt </button>
      <button onClick={() => game(choiceList[2])}>Makas</button>
      <h1>HISTORY</h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {historyList.map((history) => {
          return (
            <p>
              {history.userChoice} vs {history.machineChoice}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default App;
