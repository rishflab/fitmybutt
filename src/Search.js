import React, { Component } from 'react';
import Item from './Item.js'


class Search extends Component {

    constructor(props){
        super(props);
        this.state = {
            genes: [
                {
                    key: 0,
                    brand: "Levis",
                    model: "501",
                    size: 32,
                    waist: 32,
                    inseam: 32
                },
                {
                    key: 1,
                    brand: "Wrangler",
                    model: "Spencer",
                    size: 32,
                    waist: 33,
                    inseam: 32
                },
                {
                    key: 2,
                    brand: "Uniqlo",
                    model: "Stretch Skinny",
                    size: 32,
                    waist: 32,
                    inseam: 30
                }
            ],
            searchResults: [],
        }

           this.handleSubmit = this.handleSubmit.bind(this);
        //    this.handleChange = this.handleChange.bind(this);
    }
    
      
    render() {
        return (
            <div>
                
                <form onSubmit={this.handleSubmit}>
                    <div className='form-row'>  
                    <label>
                        Waist:
                        <input type="text"/>
                    </label>
                    </div>
                    
                    <input type="submit" value='Submit'/>
                </form>
           
                {this.state.searchResults.map((item) => <Item key={item.key} itemData={item}/>)}

             </div>
        );
    }

    handleSubmit(e){
        e.preventDefault(); //This line is needed to prevent dissapear after render bug
        var results = this.state.genes;
        this.setState({searchResults : results});
        console.log(this.state.searchResults)
    };

    
    // handleChange(){

    
    // };
  
}

export default Search;
