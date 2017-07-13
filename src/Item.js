import React, { Component } from 'react';

class Item extends Component {

  render() {
    return (
      <div className="Item">
        {this.props.itemData.brand},
        waist:{this.props.itemData.waist},
        inseam:{this.props.itemData.inseam}
      </div>
    );
  }
}

export default Item;
