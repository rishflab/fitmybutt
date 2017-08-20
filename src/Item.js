import React, { Component } from 'react';

export default class Item extends Component {

    render() {
        return (
        <div className="Item">
            {this.props.brand},
            {this.props.model},
            waist:{this.props.waist},
            inseam:{this.props.inseam},
            thigh:{this.props.thigh},
            frontRise:{this.props.frontRise}
        </div>
        );
    }
}
