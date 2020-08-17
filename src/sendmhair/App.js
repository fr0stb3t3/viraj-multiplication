import React, { useState, Component } from 'react';
import './App.css';
import './components/Instructions'
import Instructions from './components/Instructions';


// function whichComponentToShow(showGame) {
//   if (!showGame) {
//     return (

//     )
//   }
//   else {
//     return (
//       <div>
//         <p>dwdqwd</p>
//       </div>
//     )
//   }
// }

function App() {
  const [score, setScore] = useState(0);
  const [showGame, setShowGame] = useState(false);
  // let componentToShow = ;
  return (
    <div className="App">
      <div className="AppHeading">
        <div>
          Multiplication Gameee!!!
        </div>
      </div>
      <div className="content">
        <div className="showScore"></div>
        <div className="InstructionParentContainer"><Instructions /></div>
      </div>
    </div>
  );
}
// {showGame ? (<p>dasdwad</p>) : (<div className="InstructionParentContainer"><Instructions /></div>)}
export default App;
