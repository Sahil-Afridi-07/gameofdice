import './Button.css';
import React from 'react';
const Button=(props)=>{
    return(
        <div>
            <button onClick={props.onClick} className={props.isOutline? "outline_btn" :"main_btn"}>{props.lable}</button>
        </div>
    );
}
export default Button;