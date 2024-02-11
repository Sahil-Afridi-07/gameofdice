import Button from './Button';
import './GamePlay.css';
import NumberSelector from './NumberSelector';
import RoleDice from './RoleDice';
import { useState } from 'react';
import Rules from './Rules';

const GamePlay=()=>{
    const[score,setScore]=useState(0);
    const[selectedNumber,setSelectedNumber]=useState();
    const[currentDice,setCurrentDice]=useState(1);
    const[error,setError]=useState("");
    const[showRules, setShowRules]=useState(false);

    const generateRandomNumber=(min,max)=>{
        return Math.floor(Math.random()*(max-min)+min);
    };

    const roleDice=()=>{
        if(!selectedNumber){
            setError("You have not selected any number");
            return;
        } 
        

        const randomNumber=generateRandomNumber(1,7);
        setCurrentDice((prev)=>randomNumber);
        
        if(selectedNumber===randomNumber){
            setScore((prev)=>prev+randomNumber)
        }
        else{
            setScore((prev)=>prev-2)
        }
        setSelectedNumber(undefined);
    }

    const resetScore=()=>{
        setScore(0);
    }


    return(
        <main>
            <div className='top_section'>
                <div className='score_container'>
                    <h1>{score}</h1>
                    <p>Total Score</p>
                </div>
                <NumberSelector
                setError={setError}
                error={error}
                selectedNumber={selectedNumber}
                setSelectedNumber={setSelectedNumber}/>
            </div>
            <RoleDice currentDice={currentDice} roleDice={roleDice}/>
            <div className="btns">
                <Button onClick={resetScore} isOutline={true} lable="Reset Score"/>
                <Button onClick={()=>setShowRules(prev=> !prev)} lable={showRules? "Hide Rules": "Show Rules"}/>
            </div>
           {showRules &&  <Rules/>}
        </main>
    );
}
export default GamePlay;