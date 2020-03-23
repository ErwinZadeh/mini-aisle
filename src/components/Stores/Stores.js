import React, { Component } from 'react';
// import { connect } from 'react-redux';
import axios from 'axios';

class Stores extends Component {

    state = {
        itemsArray: []
    }

    componentDidMount = () => {
        this.getAllItems()
    }

    getAllItems = () => {
        axios({
            method: 'GET',
            url: '/item'
        }).then((response) => {
            console.log('this is repsonse', response.data);
            this.setState({
                itemsArray: response.data
            });
        }).catch((error) => {
            console.log(error);
        })
    }

    handleAddItemClick = () => {
        this.props.history.push('/')
    }

    handleMyListClick = () => {
        this.props.history.push('/MyList')
    }

    render() {
        return (
            <div>
                <header><h1>Stores</h1></header>
                {/* <h2>{JSON.stringify(this.props.reduxState)}</h2> */}

                <ul>
                    {
                        this.state.itemsArray.map(itemsArray =>
                            <li key={itemsArray.item_name}>
                                {itemsArray.item_name}, 
                                {itemsArray.amount},
                                {itemsArray.amount_id},
                                {itemsArray.category_id},
                                {itemsArray.store_id}
                            </li>)
                    }
                </ul>

                <button onClick={this.handleAddItemClick}>Add Item</button>
                <button onClick={this.handleMyListClick}>My List</button>
            </div>
        )
    }
}

export default Stores;