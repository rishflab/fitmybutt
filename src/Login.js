import React, { Component } from 'react';
// import * as firebase from 'firebase/app';
// import 'firebase/auth';


class Login extends Component {
    
    render() {
        return (
            <form>

                <label>Email:</label>
                <input type="email" value={this.props.email} onChange={this.props.handleEmailChange}/>

                <label>Password:</label> 
                <input type="password" value={this.props.password} onChange = {this.props.handlePasswordChange}/>
                        
                <button onClick={this.props.handleLogin}>Log In</button>
                <button onClick={this.props.handleRegister}>Register</button>
                <button onClick={this.props.handleLogout}>Log Out</button>

                <p>logged in as: {this.props.authState}</p>

            </form>
        );
    }

   
  
}

export default Login;
