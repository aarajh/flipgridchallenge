import React from 'react';
import './Field.css'


const Field = props => (
    <div className={props.className}>
        <text>{props.label}</text>
    <input 
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
    onChange: null
}

export default Field;