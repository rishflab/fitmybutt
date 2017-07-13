import React, { Component } from 'react';
import Search from './Search.js';
import Login from './Login.js';
import Item from './Item.js'
import './App.css';



class App extends Component {


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
          <div className='item'/>
          <div className='item'/>
          <div className='item'/>
        </div>
       
        {/* <div className="sidebar">
          dgt
        </div> */}

      </div>
    </div>
 
    );
  }
}


export default App;
