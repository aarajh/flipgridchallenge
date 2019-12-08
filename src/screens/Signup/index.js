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

    handleSubmit = e =>{
        console.log("Sign up pressed with values", this.state)
    }
    render(){

        return(
            <div className="Signup">
                
            <h1>Signup</h1>
            <p>Help text</p>
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