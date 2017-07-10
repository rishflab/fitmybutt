import React, { Component } from 'react';
import './App.css';

class SearchButton extends Component {

  render() {
    return (
      <input className="SearchButton" onClick={this.props.handle} type="button" value="Search"/>
    );
  }
}

export default SearchButton;
