import React, { Component } from 'react';

export default class DimensionInput extends Component {
    
    render() {
        return (
            <fieldset className='DimensionInput'>
                <label>Waist</label>
                <input 
                    onChange={this.props.handleChange}
                    type="text"
                />
            </fieldset>
        );
    }

    handleChange = (e) => {
    }

}

