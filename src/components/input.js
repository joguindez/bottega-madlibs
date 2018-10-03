import React from 'react';

const Input = ({title, state, name}, onchange) => {
    return (
        <div key={name} className="input">
            <input name={name} value={state} onChange={onchange}/>
            <label>{title}</label>
        </div>
    )
}

export default Input;