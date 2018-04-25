import React from 'react';

export const Input = (props) => {
    return (
        <div>
            <label>{props.label}</label>
            <input 
                type={props.type}
                placeholder={props.placeholder}
                className="form-control"
                onChange={props.onChange}
                value={props.value}
                style={props.style}
            />
        </div>
    );
}