import React, { Component } from 'react';
import MenuButton from './MenuButton';

export default class Banner extends Component {
    render() {
        return (
            <section className='Banner'>
                <h1>Clothes that Fit</h1>
                <h5>all in one place</h5>
                 <button className='Guide'>
                    Measuring Guide
                </button>
                
            </section>
        );
    }
}


