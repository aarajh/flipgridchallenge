import React from 'react';
import './Signup.css';
import Field from 'components/Field/'
import Button from 'components/Button/'
import validator from "email-validator"
//Displays the signup form with header and text.
class Signup extends React.Component{
    constructor(props){
        super(props);
        this.state={
            formData:{},
            valErrors:{}
        }
    }

    //Updates the state with whatever change is made
    // to the input field.
    inputHandler = (e)=>{
        
        let {formData, valErrors}=this.state;
        const fieldName = e.target.name;
        formData[fieldName] = e.target.value;
        valErrors[fieldName]=null;
        this.setState({
            valErrors,formData
        });
    }

    formValidation = () =>{
        let isValidForm=true;
        let {formData,valErrors}=this.state
        //Checks if firstName field has been filled.
        if(!formData['firstName']){
            valErrors['firstName']="Required Field";
            isValidForm=false;
        }
        //Checks if Email is filled and present
        if(formData['email']){
            if(!validator.validate(formData['email'])){
                valErrors['email']="Invalid Email";
                isValidForm=false;
            }
        }
        else{
            valErrors['email']="Required Field";
            isValidForm=false;
        }
        //Checks if password is provided
        if(!formData['password']){
            valErrors['password']="Required Field";
            isValidForm=false;
        }
        //Updates the state with error messages if any
        this.setState({valErrors});
        //Returns true if no errors
        return isValidForm;
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        if(this.formValidation()){
            console.log("Signed up with", this.state)
        }
    }
    render(){
        const {formData,valErrors}=this.state
        return(
            <div className="Signup">
            <header className="title">
                <h1 style={{fontWeight: 'normal'}}>Let's</h1>
                <h1>Sign up</h1>
            </header>
            <p className="helperText">Use the form below to sign up for this super awesome 
                service. You're only a few steps away!</p>
            <form className="SignupForm" onSubmit={this.handleSubmit}>
            <Field 
                value={formData.firstName} 
                label="First Name"
                name="firstName"
                error={valErrors['firstName']}
                onChange={this.inputHandler}
                
                />
            <Field 
                value={formData.email}
                label="Email"
                name="email"
                error={valErrors['email']}
                onChange={this.inputHandler}
                />
            <Field 
                value={formData.password} 
                label="Password"
                name="password"
                type="password"
                error={valErrors['password']}
                onChange={this.inputHandler}
                />
            
            <Button
                onClick={this.handleSubmit}
                label="Sign up!"
                />
            </form>
            </div>
        )
    }
}

export default Signup;