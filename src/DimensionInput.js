import React, { Component } from 'react';

export default class DimensionInput extends Component {
    
    render() {
        return (
            <fieldset className='DimensionInput'>
                <label>{this.props.label}</label>
                <input 
                    onChange={this.props.handleChange}
                    type="text"
                />
            </fieldset>
        );
    }
}

