import React, { Component } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';

class AddItem extends Component {

    State ={
        itemInfo: {
            itemName: '',
            amountNumber: 0,
        }
    }
    
    handleItemChange = (propertyName, event) => {
        console.log('value: ', event.target.value)
        
        this.setState({
            itemInfo: {
                ...this.state.itemInfo,
                [propertyName]: event.target.value
            }    
        })
    }
    
    handleMyListClick = () => {
        this.props.history.push('/MyList')
    }

    handleStoresClick = () => {
        this.props.history.push('/Stores')
    }

    render() {
        return (
            <div>
                <header><h1>Add Item</h1></header>

                <label>Name of Item: </label>
                {/* <input onChange={this.handleItemChange} /><br/> */}
                <input value={this.state.itemName} placeholder="Item Name" type="text"
                onChange={(event) => this.handleItemChange('itemName', event)} /><br/>

                <label>Amount: </label>
                <input value={this.state.amountNumber} placeholder="Amount" type="number"
                onChange={(event) => this.handleItemChange('amountNumber', event)} /><br/>

                <button onClick={this.handleItemClick}>ADD ITEM</button><br/>

                <button onClick={this.handleMyListClick}>My List</button>
                <button onClick={this.handleStoresClick}>Stores</button>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
});
  

export default connect(putReduxStateOnProps)(AddItem);