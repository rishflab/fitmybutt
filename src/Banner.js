import React, { Component } from 'react';
import MenuButton from './MenuButton';

export default class Banner extends Component {
    render() {
        return (
            <section className='Banner'>
                <h1>Fitmybutt</h1>
                <div>A clothing aggregator</div>
                <p>that sorts by fit.</p>
                <button className='Guide'>
                    Measuring Guide
                </button>
            
            </section>
        );
    }
}


