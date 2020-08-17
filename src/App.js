import React, { useState } from 'react';
import './App.css';

import Instructions from './components/Instructions';
import Game from './components/Game';
import Clock from './components/Clock';

function App() {
  let [toStartTimer, setToStartTimer] = useState(false);
  let [toSendAlert, setToSendAlert] = useState(false);

  const startTimer = () => {
    setToStartTimer(true);
  }

  const sendAlert = () => {
    setToSendAlert(true);
    setToStartTimer(false);
  }
  return (
    <div className="App">
      <div className="AppHeading">
        <div>
          Multiplication Gameee!!!
        </div>
      </div>
      <div className="content">
        <Clock toStart={toStartTimer} passedSendAlert={sendAlert} />
        <Game sendAlert={toSendAlert} />
        <Instructions passedStartTimer={startTimer} />
      </div>
    </div>
  );
}

export default App;
