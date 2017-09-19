import React, { Component } from 'react';
import PropTypes from 'prop-types';
import JeansImg from './jeans.jpg';

export default class Item extends Component {
    render() {
        return (
        <article className='Item'>    
            <h1>
                {this.props.price}
            </h1>
            <img src={JeansImg}/>
            <h2>
                {this.props.score}
            </h2>
            <p>  
                {this.props.brand} {this.props.size}  {this.props.model}
            </p>
        </article>
        );
    }
}
