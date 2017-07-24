import React, { Component } from 'react';
// import * as firebase from 'firebase/app';
// import 'firebase/auth';


class Login extends Component {
    constructor(props){
        super(props);
        this.state = {email:'', password:''};
       
    }
     
    render() {
        return (
            <form onSubmit={this.handleSubmit}>

                <label>Email:</label>
                <input type="email" value={this.state.email} onChange={this.handleEmailChange}/>
            
                <label>Password:</label> 
                <input type="password" value={this.state.password} onChange = {this.handlePasswordChange}/>
                       
                <input type="submit" value="Login"/>
                {/*<input type="submit" value="Sign Up"/>*/}

                <button onClick={this.handleLogout} value='Sign Out'>Log Out</button>
            
            </form>
        );
    } 
}

export default Login;
