
import './NumberSelector.css';
const NumberSelector=({setError, error,selectedNumber,setSelectedNumber})=>{

    const arrNumber=[1,2,3,4,5,6];
    
    const numberSelectorHandler=(value)=>{
        setSelectedNumber(value);
        setError("");
    };
    
    return(
        <div className='number_selector'>
            <i className='error'>{error}</i>
            <div className="flex">
            {
                arrNumber.map((value, i) => (
                    <div
                        key={i}
                        className={`box ${value === selectedNumber ? 'selected' : ''}`}
                        onClick={()=>numberSelectorHandler(value)}
                    >
                        {value}
                    </div>
                ))
            }
            </div>
            <p>Select Number</p>
        </div>
    )
}

export default NumberSelector;