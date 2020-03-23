import React, { Component } from 'react';
// import { connect } from 'react-redux';
import axios from 'axios';

class MyList extends Component {

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

    handleStoresClick = () => {
        this.props.history.push('/Stores')
    }

    render() {
        return (
            <div>
                <header><h1>My List</h1></header>
                <h2>{JSON.stringify(this.props.reduxState)}</h2>
                <button onClick={this.handleAddItemClick}>Add Item</button>
                <button onClick={this.handleStoresClick}>Stores</button>

            </div>
        )
    }
}

export default MyList;