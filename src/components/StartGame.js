import Button from './Button';
import './StartGame.css';


const StartGame=({toggle})=>{
    return(
        <div className="container">
            <div>
                <img src="/images/dices 1.png" alt="" />
            </div>
            <div className="content">
                <h1>Dice game</h1>
                <div className="btn_content">
                    <Button onClick={toggle} lable="Play Now"/>
                </div>
            </div>
        </div>
    )
}

export default StartGame;

