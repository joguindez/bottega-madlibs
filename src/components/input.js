import React from 'react';

const Input = ({title, state, name}, onchange, index) => {
    return (
        <div key={index} className="input">
            <label className="input_number">{index + 1}</label>
            <input name={name} value={state} onChange={onchange}/>
            <label className="input_number">{title}</label>
        </div>
    )
}

export default Input;