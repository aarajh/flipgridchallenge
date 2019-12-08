import React from 'react';
import './Signup.css';
import Field from 'components/Field/'

class Signup extends React.Component{
    constructor(props){
        super(props);
        this.state={
            firstName: '',
            email: '',
            password: '',
        }
    }

    inputHandler = (event)=>{
        var e=event;
        const fieldName = e.target.name;
        const val = e.target.value;
        console.log(event.target)
        this.setState({
            [fieldName]: val
        })
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
            <button>Sign up!</button>
            </div>
        )
    }
}

export default Signup;