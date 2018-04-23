import React from 'react';

export const Input = (props) => {
    return (
        <div>
            <label>{props.label}</label>
            <input 
                type={props.tyle}
                placeholder={props.placeholder}
                // className={props.className}
                onChange={props.onChange}
                value={props.value}
            />
        </div>
    );
}