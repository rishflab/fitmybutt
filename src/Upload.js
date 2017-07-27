import React, { Component } from 'react';
// import Item from './Item.js'


class Upload extends Component {

      
    render() {
        return (
            <div>
                
                <form>

                    <h3>Upload Clothing Data</h3>
                    <div className='form-row'>  
                    
                    <label>Brand:</label>
                    <input onChange={this.props.handleBrandChange} type="text"/>

                    <label>Model:</label>
                    <input onChange={this.props.handleModelChange} type="text"/>

                    <label>Waist:</label>
                    <input onChange={this.props.handleWaistChange} type="text"/>

                    <label>Inseam:</label>
                    <input onChange={this.props.handleInseamChange} type="text"/>

                    <label>Thigh:</label>
                    <input onChange={this.props.handleThighChange} type="text"/>

                    <label>Front Rise:</label>
                    <input onChange={this.props.handleFrontRiseChange} type="text"/>
                    
                    </div>
                    <button onClick={this.props.handleUpload}>Upload</button>
                  
                </form>
           
                {/*{this.state.searchResults.map((item) => <Item key={item.key} itemData={item}/>)}*/}

             </div>
        );
    }

  
}

export default Upload;
