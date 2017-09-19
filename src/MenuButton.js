import React, { Component } from 'react';

export default class MenuButton extends Component {
    render() {
        return (
            <button className='MenuButton' onClick={this.props.handler}>
                {this.props.label}
            </button>
        );
    }
}


