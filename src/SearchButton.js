import React, { Component } from 'react';


export default class SearchButton extends Component {

    render() {
        return (
           <button onClick={this.props.handler} name={this.props.name}/>
        );
    }
}
