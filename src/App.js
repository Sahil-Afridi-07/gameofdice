
import './App.css';
import {useState} from "react";
import StartGame from './components/StartGame';
import GamePlay from './components/GamePlay';



function App() {

  const[isGameStarted, setGameStarted]=useState(false);

  const toggleGamePlay=()=>{
    setGameStarted((prev) => !prev);
  }

  return (
    <div className="">
        {
          isGameStarted ? <GamePlay/> : <StartGame toggle={toggleGamePlay}/>
        }   
        
    </div>
  );
}

export default App;
