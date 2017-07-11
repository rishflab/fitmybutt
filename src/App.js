import React, { Component } from 'react';
import Search from './Search.js';
import Login from './Login.js';
import './App.css';



class App extends Component {
 
  render() {
    return (
    <div>
      <div className='menu-container'>
        <div className="menu">
          <div className='brand'>Brand</div>
          <div className='links'>   
            <div className='signup'>Sign Up</div>
            <div className='login'>Login</div>
          </div>
        </div>
      </div>
      <div className='header-container'>
        <div className='header'>
          <div className='subscribe'>Subscribe</div>
          <div className='logo'>
            gergerg
          </div>
          <div className='social'>
            wrefwefw
          </div>
        </div>
      </div>
      </div>
      // <div className="App">
      //   <Search/>
      //   <Login/>
      // </div>
  
    );
  }
}


export default App;
