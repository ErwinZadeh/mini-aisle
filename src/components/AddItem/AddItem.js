import React, { Component } from 'react';
// import { connect } from 'react-redux';
import axios from 'axios';

class AddItem extends Component {

    state = {
        newItem: {
            itemName: '',
            amountNumber: 0,
            amountUnit: '',
            category: '',
            shoppingStore: ''
        }
    }

    handleItemChange = (propertyName, event) => {
        console.log('value: ', event.target.value)

        this.setState({
            newItem: {
                ...this.state.newItem,
                [propertyName]: event.target.value
            }
        })
    }

    handleAddItemClick = (event) => {
        event.preventDefault();
        console.log(`Adding Item`, this.state.newItem);
        // TODO - axios request to server to add item
        axios({
            method: 'POST',
            url: '/item',
            data: this.state.newItem
        }).then((reponse) => {
            console.log('response', reponse);
            alert('Item was added to your list!');
            
        }).catch((error) => {
            alert(`Couldn't submit responses at this time`);
            console.log('Error posting to server', error)
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
                <form onSubmit={this.handleAddItemClick}>

                    <label>Name of Item: </label>

                    <input placeholder="item name" type="text" value={this.state.newItem.itemName}
                        onChange={(event) => this.handleItemChange('itemName', event)} /><br />

                    <label>Amount: </label>
                    <input placeholder="amount" type="number" value={this.state.newItem.amountNumber}
                        onChange={(event) => this.handleItemChange('amountNumber', event)} />

                    <label> Unit: </label>
                    <input placeholder="unit" type="text" value={this.state.newItem.amountUnit}
                        onChange={(event) => this.handleItemChange('amountUnit', event)} /><br />

                    <label> Category: </label>
                    <input placeholder="category" type="text" value={this.state.newItem.category}
                        onChange={(event) => this.handleItemChange('category', event)} /><br />
    

                    <label>Store: </label>
                    <input placeholder="store" type="text" value={this.state.newItem.shoppingStore}
                        onChange={(event) => this.handleItemChange('shoppingStore', event)} /><br />

                    <button type="submit">ADD ITEM</button><br />
                </form>

                <footer>
                    <button onClick={this.handleMyListClick}>My List</button>
                    <button onClick={this.handleStoresClick}>Stores</button>
                </footer>

            </div>
        )
    }
}

export default AddItem;