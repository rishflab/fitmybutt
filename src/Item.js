import React, { Component } from 'react';

export default class Item extends Component {

    render() {
        return (
        <div className="Item">
            {this.props.brand},
            {this.props.model},
            score:{this.props.score},
            waist:{this.props.waist},
            inseam:{this.props.inseam},
            thigh:{this.props.thigh},
            frontRise:{this.props.frontRise}
        </div>
        );
    }
}
