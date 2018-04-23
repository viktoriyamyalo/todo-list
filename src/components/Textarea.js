import React from 'react';

export const Textarea = (props) => {
    return (
        <div>
            <label>{props.label}</label>
            <textarea 
                rows={props.rows}
                placeholder={props.placeholder}
                // className={props.className}
                onChange={props.onChange}
                value={props.value}
            ></textarea>
        </div>
    );
}