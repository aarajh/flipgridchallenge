import React from 'react';
import SignupForm from './SignupForm'
import SignupConfirmation from './Confirmation'
import './Signup.css';

// Checks if we have formData, if we do, routes to confirmation
// else to the form
class SignupRouting extends React.Component{
    constructor(props){
        super(props);
        this.state={
            formData:null
        }
    }

    // Function to allow form to give this component data.
    dispatchFormData=(formData)=>{
        this.setState({formData})
    }

    render(){
        if(!this.state.formData)
        return(
            <SignupForm dispatchFormData={this.dispatchFormData}/>
        )
        return(
            <SignupConfirmation formData={this.state.formData}/>
        )
    }
}


export default SignupRouting;