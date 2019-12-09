import React from 'react';
import SignupForm from './SignupForm'
import SignupConfirmation from './Confirmation'
import './Signup.css';

class SignupRouting extends React.Component{
    constructor(props){
        super(props);
        this.state={
            signupFormComplete: false
        }
    }

    toggleCompletion=()=>{
        let isComplete=this.state.signupFormComplete;
        this.setState({signupFormComplete: !isComplete})
    }

    render(){
        if(!this.state.signupFormComplete)
        return(
            <SignupForm toggleCompletion={this.toggleCompletion}/>
        )
        return(
            <SignupConfirmation/>
        )
    }
}


export default SignupRouting;