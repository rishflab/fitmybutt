import React, { Component } from 'react';
import Jeans from './Jeans';
import SearchButton from './SearchButton.js';

class Search extends Component {

    constructor(props){
        super(props);

        this.state = {
            genes: [
                {
                    brand: "Levis",
                    model: "501",
                    size: 32,
                    waist: 32,
                    inseam: 32
                },
                {
                    brand: "Wrangler",
                    model: "Spencer",
                    size: 32,
                    waist: 33,
                    inseam: 32
                },
                {
                    brand: "Uniqlo",
                    model: "Stretch Skinny",
                    size: 32,
                    waist: 32,
                    inseam: 30
                }
            ],
            searchResults: []
        }

           this.fetch = this.fetch.bind(this);
    }
    
      
    render() {
        return (
            <section className="Search">
                <SearchButton handle={this.fetch}/>
                {this.state.searchResults.map((item) => <Jeans itemData={item}/>)}
            </section>
        );
    }

    fetch(){

        var results = this.state.genes;
        this.setState({searchResults : results});
        console.log(this.state.searchResults)
    };
  
}

export default Search;
