import React, { Component } from 'react';
import PropTypes from 'prop-types';
import JeansImg from './jeans.jpg';

export default class Item extends Component {

    constructor(props){
        super(props);
        this.itemStyle = {
            color: '#333333',
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column',
            margin: '1em'
        };

        this.img = {
            height: '10em'
        }
        this.price = {
            fontSize: '1em'
        }
        this.brand = {
            fontSize: '0.8em'
        }
        this.model = {
            fontSize: '0.7em'
        }
        this.score = {
            fontsize: '1.2em'
        }
    }

    render() {
        return (
        <article style = {this.itemStyle}>    
            
            <p style={this.score}>
                95% Fit
            </p>

            <img style={this.img} src={JeansImg}/>
            
            <p style={this.price}>
                $149
            </p>

            <p style={this.brand}>  
                {this.props.brand}  {this.props.model}
            </p>
        </article>
        );
    }
}

Item.propTypes = {
    brand: PropTypes.string,
    model: PropTypes.string,
    score: PropTypes.number,
    waist: PropTypes.number,
    inseam: PropTypes.number,
    thigh: PropTypes.number,
    backRise: PropTypes.number,
    frontRise: PropTypes.number,
    legOpening: PropTypes.number
};