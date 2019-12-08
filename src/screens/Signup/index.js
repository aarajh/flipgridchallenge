import React from 'react';
import './Signup.css';
import Field from 'components/Field/'
import Button from 'components/Button/'

//Displays the signup form with header and text.
class Signup extends React.Component{
    constructor(props){
        super(props);
        this.state={
            firstName: '',
            email: '',
            password: '',
        }
    }

    //Updates the state with whatever change is made
    // to the input field.
    inputHandler = (e)=>{
        const fieldName = e.target.name;
        const val = e.target.value;
        this.setState({
            [fieldName]: val
        })
    }

    handleSubmit = () =>{
        console.log("Sign up pressed with values", this.state)
    }
    render(){

        return(
            <div className="Signup">
            <header className="title">
                <h1 style={{fontWeight: 'normal'}}>Let's</h1>
                <h1>Sign up</h1>
            </header>
            <p className="helperText">Use the form below to sign up for this super awesome 
                service. You're only a few steps away!</p>
            <Field 
                value={this.state.firstName} 
                label="First Name"
                name="firstName"
                onChange={this.inputHandler}
                
                />
            <Field 
                value={this.state.email} 
                label="Email"
                name="email"
                onChange={this.inputHandler}
                />
            <Field 
                value={this.state.password} 
                label="Password"
                name="password"
                type="password"
                onChange={this.inputHandler}
                />
            
            <Button
                onClick={this.handleSubmit}
                label="Sign up!"
                />
            </div>
        )
    }
}

export default Signup;