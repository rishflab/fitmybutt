import React, { Component } from 'react';
import DimensionInput from './DimensionInput.js'


export default class Search extends Component {

    constructor(props){
        super(props);
  
    }
 
    render() {
        return (   
            <form className='Search'>
                <DimensionInput/>

        
            </form>        
        );
    } 
}