import React, { Component } from 'react';
import Item from './Item.js'

export default class Results extends Component {

    constructor(props){
        super(props);

        this.style = {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            flexWrap: 'wrap'
        };
    }


    render() {
        return (
            <section style={this.style}>
                <Item brand='Levis' model='501'/>
                <Item brand='Levis' model='501'/>
                <Item brand='Levis' model='501'/>
                <Item brand='Levis' model='501'/>
                <Item brand='Levis' model='501'/>
                <Item brand='Levis' model='501'/>
            </section>
        );
    } 
}