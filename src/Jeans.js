import React, { Component } from 'react';

class Jeans extends Component {

  render() {
    return (
      <div>
        <p>{this.props.itemData.brand}</p>
        <p>waist:{this.props.itemData.waist}</p>
        <p>inseam:{this.props.itemData.inseam}</p>
      </div>
    );
  }
}

export default Jeans;
