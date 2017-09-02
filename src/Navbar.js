import React, { Component } from 'react';
import MenuButton  from './MenuButton.js';


export default class Navbar extends Component {
    
    constructor(props){
        super(props);
        this.navContainer = {
            backgroundColor: '#333333',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: '3em',
        };
    }

    render() {
        return (
            <nav style={this.navContainer}>
                <MenuButton label='Fitmybutt'/>
                <MenuButton label='Login'/>
            </nav>

        );
    }
}

