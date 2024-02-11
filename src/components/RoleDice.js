
import './RoleDice.css';

const RoleDice=({roleDice,currentDice})=>{

    

   
    
    return(
        <div className='dice_container'>
            <div className='dice'
            onClick={roleDice}
            >
                <img src={`/images/dice_${currentDice}.png`} alt="" />
            </div>
            <p>Click on Dice to roll</p>
        </div>
    )
}

export default RoleDice;