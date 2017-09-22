import React, { Component } from 'react';
import Item from './Item.js'

export default class Results extends Component {
    render() {
        return (
            <section className='Results'>
                
                <p>Good Fits</p>
                
                
                <div className='good'>
                    {this.props.good.map(item => 
                        <Item
                            price={item.price}
                            brand={item.brand}
                            model={item.model}
                            score={item.score}
                            size={item.size}
                            img={item.img}
                        />
                    )}
                </div>
                <p>Other Pants</p>
                <p>Other Pants</p>
                <div className='bad'>
                    {this.props.bad.map(item => 
                        <Item
                            price={item.price}
                            brand={item.brand}
                            model={item.model}
                            score={item.score}
                            size={item.size}
                            img={item.img}
                        />
                    )}
                 </div>
            </section>
        );
    } 
}