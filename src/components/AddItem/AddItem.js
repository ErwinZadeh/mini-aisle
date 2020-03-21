import React, { Component } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';

class AddItem extends Component {

    // State ={
    //     itemInfo: {
    //         itemName: '',
    //         amountNumber: 0,
    //     }
    // }
    
    handleItemChange = (propertyName, event) => {
        console.log('value: ', event.target.value)
        
        this.setState({
            itemInfo: {
                ...this.state,
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
                <input placeholder="item name" type="text"
                onChange={(event) => this.handleItemChange('itemName', event)} /><br/>

                <label>Amount: </label>
                <input placeholder="amount" type="number"
                onChange={(event) => this.handleItemChange('amountNumber', event)} />

                <label> Unit: </label>
                <input placeholder="unit" type="text"
                onChange={(event) => this.handleItemChange('amountUnit', event)} /><br/>

                <label>Store: </label>
                <input placeholder="store" type="text"
                onChange={(event) => this.handleItemChange('shoppingStore', event)} /><br/>

                <button onClick={this.handleAddItemClick}>ADD ITEM</button><br/>
                <footer>
                    <button onClick={this.handleMyListClick}>My List</button>
                    <button onClick={this.handleStoresClick}>Stores</button>
                </footer>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
});
  

export default connect(putReduxStateOnProps)(AddItem);