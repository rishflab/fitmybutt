import React, { Component } from 'react';
import MenuButton  from './MenuButton.js';

export default class Menu extends Component {   
    render() {
        return (
            <nav className='Menu'>
                <div className='container'>
                    <MenuButton label='Fitmybutt'/>
                    <MenuButton label='Register'/>
                </div>
            </nav>

        );
    }
}