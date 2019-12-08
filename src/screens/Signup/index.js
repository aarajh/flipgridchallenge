import React from 'react';
import './Signup.css';
import Field from 'components/Field/'

class Signup extends React.Component{

    render(){

        return(
            <div className="Signup">
                
            <h1>Signup</h1>
            <p>Help text</p>
            <Field/>
            <Field/>
            <Field/>
            <button>Sign up!</button>
            </div>
        )
    }
}

export default Signup;