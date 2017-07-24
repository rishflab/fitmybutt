import React, { Component } from 'react';
import Search from './Search.js';
import Login from './Login.js';
import './App.css';
import * as fb from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';


  
  
class App extends Component {

  constructor(){
    super()

    var config = {
      apiKey: "AIzaSyDQEAoSJQkSWIz_ffBfPBiizAqlAUMbceQ",
      authDomain: "sizeup-172404.firebaseapp.com",
      databaseURL: "https://sizeup-172404.firebaseio.com",
      projectId: "sizeup-172404",
      storageBucket: "sizeup-172404.appspot.com",
      messagingSenderId: "80593664722"
    };

    
    fb.initializeApp(config);

    fb.auth().onAuthStateChanged(function(user){
      if (user) {
          console.log(user.email);
      } else {
          console.log('no user logged in');
      }
    });
    
    var db = fb.database(); 
    this.state = {firebase: fb, database: db};

    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleLogout = this.handleLogout.bind(this);

  }


  render() {
    return (
    <div>
      <div className='navbar'>
        <div className='menu'>
          <div className='nav-item'>Menu</div>
        </div>
        <div className='links'>   
          <div className='nav-item'>Sign Up</div>
          <div className='nav-item'>Login</div>
        </div>
      </div>

      <div className='container'>
       
        <div className="content">
          <Search/>
        </div>

        <div className = 'content'>
          <Login 
            handleSubmit = {this.handleSubmit} 
            handleEmailChange = {this.handleEmailChange} 
            handlePasswordChange = {this.handlePasswordChange}
          />
        </div>

      </div>
    </div>
 
    );
  }

   handleSubmit(e){
        e.preventDefault();
        console.log('submitted', this.state.email, this.state.password);
        this.props.firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ...
        });
    }

    handleLogout(e){
        e.preventDefault();
        this.props.firebase.auth().signOut().then(function() {
            // Sign-out successful.
            console.log('signout success');
        }).catch(function(error) {
            // An error happened.
            console.log(error);
        });
    }

    handlePasswordChange(e){
        this.setState({password: e.target.value});
    }

    handleEmailChange(e){
        this.setState({email: e.target.value});
    }
}





export default App;
