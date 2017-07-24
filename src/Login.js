import React, { Component } from 'react';
// import * as firebase from 'firebase/app';
// import 'firebase/auth';


class Login extends Component {
    
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>

                <label>Email:</label>
                <input type="email" value={this.props.email} onChange={this.props.handleEmailChange}/>
            
                <label>Password:</label> 
                <input type="password" value={this.props.password} onChange = {this.props.handlePasswordChange}/>
                       
                <input type="submit" value="Login"/>
        

                <button onClick={this.props.handleLogout} value='Sign Out'>Log Out</button>
            
            </form>
        );
    }

   
  
}

export default Login;
