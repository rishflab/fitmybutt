import React, { Component } from 'react';
import Item from './Item.js'

export default class Results extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <section className='Results'>
                {this.props.searchResults.map(item => 
                    <Item
                        price={item.price}
                        brand={item.brand}
                        model={item.model}
                        score={item.score}
                        size={item.size}
                    />
                )}
            </section>
        );
    } 
}