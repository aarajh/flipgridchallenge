import React from 'react';
import SignupForm from './SignupForm'
import SignupConfirmation from './Confirmation'
import './Signup.css';

class SignupRouting extends React.Component{
    constructor(props){
        super(props);
        this.state={
            formData:null
        }
    }

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