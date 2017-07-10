import React, { Component } from 'react';

class Jeans extends Component {

  render() {
    return (
      <div className="Jeans">
        {this.props.itemData.brand},
        waist:{this.props.itemData.waist},
        inseam:{this.props.itemData.inseam}
      </div>
    );
  }
}

export default Jeans;
