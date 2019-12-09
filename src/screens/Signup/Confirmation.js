import React from 'react';
import './Signup.css';

import Button from 'components/Button/'

class SignupConfirmation extends React.Component{

    //Sample function to signal that signin button is pressed.
    handleSignin=()=>{
        alert("Sign in button pressed.")
    }

    render(){
        const formData=this.props.formData
        return(
            <div className="Signup" data-testid="confirmation">
            <header className="title">
                <h1 style={{fontWeight: 'normal'}}>Welcome,</h1>
                <h1>{formData['firstName']}</h1>
            </header>
            <p className="helperText">You have been registered for this awesome service.
            Please check your email listed below for instructions.</p>
            
            <p style={{fontWeight:'bold'}}>{formData['email']}</p>
            <Button
                onClick={this.handleSignin}
                label="Sign In"
                />
            </div>
        )
    }
}

export default SignupConfirmation;