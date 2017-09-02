import React, { Component } from 'react';

export default class MenuButton extends Component {

    constructor(props){
        super(props);

        this.style = {
            color: '#FFFFFF',
            backgroundColor: '#333333',
            border: 'none',
            margin: '1em'
        };
    }

    render() {
        return (
            <button style={this.style} onClick={this.props.handler}>
                {this.props.label}
            </button>
        );
    }
}


