import React, { Component } from 'react';
import Item from './Item.js'


export default class Search extends Component {

      
    render() {
        return (
            <div>
                
                <form >
                    <h3>Search for Clothing by Fit</h3>
                    <div className='form-row'>  

                    <label>Waist:</label>
                    <input onChange={this.props.handleWaistChange} type="text"/>

                    <label>Inseam:</label>
                    <input onChange={this.props.handleInseamChange} type="text"/>

                    <label>Thigh:</label>
                    <input onChange={this.props.handleThighChange} type="text"/>

                    <label>Front Rise:</label>
                    <input onChange={this.props.handleFrontRiseChange} type="text"/>
                    
                    </div>
                    <button onClick={this.props.handleSearch}>Search</button>
                </form>

                <div>
                    {this.props.searchResults.map(item =><Item
                        brand = {item.brand}
                        model = {item.model}
                        waist = {item.waist}
                        inseam = {item.inseam}
                        thigh = {item.thigh}
                        frontRise = {item.frontRise}
                    />)}

                </div>

         
               
  

             </div>
        );
    } 
}