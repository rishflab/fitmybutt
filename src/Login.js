import React, { Component } from 'react';

class Login extends Component {
    constructor(props){
        super(props);

        this.state = {
            user: [
                {
                    name: "rishab",
                    password: "catdog"
                },
                {
                    name: "bagface",
                    password: "12345"
                }
            ]
        }

        this.login = this.login.bind(this);
    }
     
    render() {
        return (
            <form>
                <label>Username:
                    <input type="Text"/>
                </label>
                <label>Password:
                    <input type="Text"/>
                 </label>        
                <input type="submit" value="Submit"/>
            </form>
        );
    }

    login(){

    };
  
}

export default Login;
