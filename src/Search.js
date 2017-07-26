import React, { Component } from 'react';
// import Item from './Item.js'


class Search extends Component {

      
    render() {
        return (
            <div>
                
                <form onSubmit={this.props.loadTestData}>
                    <div className='form-row'>  

                    <label>Waist:</label>
                    <input onChange={this.props.handleWaistChange} type="text"/>

                    <label>Inseam:</label>
                    <input onChange={this.props.handleInseamChange} type="text"/>

                    <label>Thigh:</label>
                    <input onChange={this.props.handleThighChange} type="text"/>

                    <label>Front Rise:</label>
                    <input onChange={this.props.handleFrontRiseChange} type="text"/>
                    
                    </div>
                    <button onClick={this.props.handleSearch}>Search</button>
                    <input type="submit" value='LoadData'/>
                </form>
           
                {/*{this.state.searchResults.map((item) => <Item key={item.key} itemData={item}/>)}*/}

             </div>
        );
    }

  
}

export default Search;
