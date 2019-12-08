import React from 'react';
import './Field.css'


const Field = props => (
    <div className={props.className}>
        <text>{props.label}</text>
    <input 
        type={props.type} 
        name={props.name}
        > 
    
    </input>
    </div>
)

Field.defaultProps = {
    label: 'Field',
    name: 'Field',
    type: 'text',
    className: 'DefaultFieldClass'
}

export default Field;