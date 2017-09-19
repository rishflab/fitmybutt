import React, { Component } from 'react';
import DimensionInput from './DimensionInput.js'


export default class Search extends Component {
    render() {
        return (   
            <form className='Search'>
                <DimensionInput label='Waist' handleChange={this.props.handleWaistChange}/>
                <DimensionInput label='Inseam' handleChange={this.props.handleInseamChange}/>
                <DimensionInput label='Thigh' handleChange={this.props.handleThighChange}/>
                <DimensionInput label='Front Rise' handleChange={this.props.handleFrontRiseChange}/>
                <DimensionInput label='Back Rise' handleChange={this.props.handleBackRiseChange}/>
                <DimensionInput label='Leg Opening' handleChange={this.props.handleLegOpeningChange}/>
            </form>        
        );
    } 
}