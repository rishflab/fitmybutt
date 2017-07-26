import React, { Component } from 'react';
import Search from './Search.js';
import Login from './Login.js';
import './App.css';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

class App extends Component {

  constructor(){
    super()

    this.state = {
      email: '',
      password:'',
      currentUser: 'none',
      query: {
        waist: 0,
        inseam: 0,
        thigh: 0,
        frontRise: 0
      }
    };
    

    var config = {
      apiKey: "AIzaSyDQEAoSJQkSWIz_ffBfPBiizAqlAUMbceQ",
      authDomain: "sizeup-172404.firebaseapp.com",
      databaseURL: "https://sizeup-172404.firebaseio.com",
      projectId: "sizeup-172404",
      storageBucket: "sizeup-172404.appspot.com",
      messagingSenderId: "80593664722"
    };

    firebase.initializeApp(config);

    
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
      
        this.setState({currentUser: user.email});
          console.log(this.state.currentUser);
      } else {
       
        this.setState({currentUser: 'none'});
         console.log(this.state.currentUser);
      }
    });

  }
  
  render() {
    return (
    <div>
      <div className='navbar'>
        <div className='menu'>
          <div className='nav-item'>Logo</div>
        </div>
        <div className='links'>   
          <div className='nav-item'>Sign Up</div>
          <div className='nav-item'>Login</div>
        </div>
      </div>

      <div className='container'>
       
        <div className="content">
          <Search
            loadTestData = {this.loadTestData}
            handleInseamChange = {this.handleInseamChange}
            handleWaistChange = {this.handleWaistChange}
            handleThighChange = {this.handleThighChange}
            handleFrontRiseChange = {this.handleFrontRiseChange}
            handleSearch = {this.handleSearch}
          />
        </div>

        <div className = 'content'>
          <Login 
            handleLogin = {this.handleLogin} 
            handleEmailChange = {this.handleEmailChange} 
            handlePasswordChange = {this.handlePasswordChange}
            handleLogout = {this.handleLogout}
            handleRegister = {this.handleRegister}
            authState = {this.state.currentUser}
          />
        </div>

      </div>
    </div>
 
    );
  }

  handleLogin = (e) => {
      e.preventDefault();
      console.log('submitted', this.state.email, this.state.password);
      firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(error => {
        console.log(error.Code, error.Message);
      });
  }

  handleRegister = (e) => {
      e.preventDefault();
      console.log('register button pressed');
      firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(error => {
        console.log (error.code, error.message);
      });
  }

  handleLogout = (e) => {
    e.preventDefault();
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      console.log('signout success');
    }).catch(function(error) {
      // An error happened.
      console.log(error);
    });
  }

  handlePasswordChange = (e) => {
    this.setState({password: e.target.value});
  }

  handleEmailChange = (e) => {
    this.setState({email: e.target.value});
  }

  loadTestData = (e) => {
    e.preventDefault();
    firebase.database().ref('/jeans/').once('value').then(snapshot => {
      console.log(snapshot.val());
    });
  }

  handleWaistChange = (e) => {
    e.preventDefault();
    this.setState({query: {waist: e.target.value}});
  }

  handleInseamChange = (e) => {
    e.preventDefault();
    this.setState({query: {inseam: e.target.value}});
  }

  handleThighChange = (e) => {
    e.preventDefault();
    this.setState({query: {thigh: e.target.value}});
  }

  handleFrontRiseChange = (e) => {
    e.preventDefault();
    this.setState({query: {frontRise: e.target.value}})
  }

  handleSearch = (e) => {
    e.preventDefault();
    console.log("search Button pressed");
  }



  
}





export default App;
