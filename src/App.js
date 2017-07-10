import React, { Component } from 'react';
import Search from './Search.js';
import Login from './Login.js';
import './App.css';



class App extends Component {
 
  render() {
    return (
      <div className="App">
        <Search/>
        <Login/>
      </div>
    );
  }
}


export default App;
