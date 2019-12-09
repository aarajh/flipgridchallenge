import React from 'react';
import './Field.css'
import "typeface-roboto";

const ShowError = error =>(
    <div style={error?{}:{visibility:'hidden'}} className="ErrorField">
        {error}
    </div>
)

const Field = props => (
    <div className={props.className} data-testid="field">
        <div className={props.labelClass}>
        {props.label}
        {ShowError(props.error)}
        </div>
    <input 
        data-testid="inputfield"
        className={props.innerClass}
        style={props.error?{borderColor:"#df0d6f52"}:null}
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
    error: null,
    innerClass: 'DefaultInnerClass',
    labelClass: 'DefaultLabelClass',
    className: 'DefaultFieldClass',
    onChange: () => {},
}

export default Field;