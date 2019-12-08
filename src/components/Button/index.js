import React from 'react';
import './Button.css'


const Button = props => (
    <div className="defaultMainButtonClass">
    <button 
        onClick= {props.onClick}
        className={props.className}
        data-testid="button"
        > 
    {props.label}
    </button>
    </div>
)

Button.defaultProps = {
    label: 'DefaultButton',
    name: '',
    className: 'DefaultButtonClass',
    onClick: null
}

export default Button;