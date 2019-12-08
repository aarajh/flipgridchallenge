import React from 'react';
import './Field.css'


const Field = props => (
    <div className={props.className} data-testid="field">
        {props.label}
    <input 
        data-testid="inputfield"
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
    className: 'DefaultFieldClass',
    onChange: () => {},
}

export default Field;