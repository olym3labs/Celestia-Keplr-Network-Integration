import React from "react";
import MainnetNetwork from "./components/MainnetNetwork";
import MochaNetwork from "./components/MochaNetwork";
import ArabicaNetwork from "./components/ArabicaNetwork";
import "./App.css"; // Thêm file CSS mới

function App() {
  return (
    <div className="appContainer">
      <h1>Celestia Keplr Network Integration</h1>
      <MainnetNetwork />
      <MochaNetwork />
      <ArabicaNetwork />
    </div>
  );
}

export default App;
