import React, { Component } from 'react';
//import JeansImg from './jeans.jpg';

export default class Item extends Component {
    render() {
        return (
        <article className='Item'>    
            <img src={this.props.img} onTouchStart={this.handleTouchStart}/>
            <div className='title'>
                <h5>{this.props.price}</h5>
            </div>
            <p>{this.props.brand}</p>
            <p>{this.props.model}</p>
        </article>
        );
    }
    handleTouchStart = (e) => {
        e.preventDefault();
        
    }
}
