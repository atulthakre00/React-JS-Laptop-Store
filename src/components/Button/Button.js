import React from 'react'
import './style.css';

function Button(props) {
    return (
        <div className="actionButton">
            <button onClick={props.onClick}>{props.name}</button>            
        </div>
    )
}

export default Button
