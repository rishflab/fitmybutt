import React, { Component } from 'react';

class SearchButton extends Component {
  constructor(props){
    super(props);
  }


  render() {
    return (
      <input onClick={this.props.handle} type="button" value="Search"/>
    );
  }
}

export default SearchButton;
