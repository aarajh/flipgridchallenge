import React from 'react';
import './Field.css'
import "typeface-roboto";

const Field = props => (
    <div className={props.className} data-testid="field">
        <div className={props.labelClass}>
        {props.label}
        </div>
    <input 
        data-testid="inputfield"
        className={props.innerClass}
        type={props.type} 
        name={props.name}
        onChange={props.onChange}
        value={props.value}
        > 
    
    </input>
    </div>
)

Field.defaultProps = {
    label: 'Field',
    name: 'Field',
    type: 'text',
    value: '',
    innerClass: 'DefaultInnerClass',
    labelClass: 'DefaultLabelClass',
    className: 'DefaultFieldClass',
    onChange: () => {},
}

export default Field;