import React, { Component } from 'react';
import { connect } from 'react-redux';

class MyList extends Component {

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
                <button onClick={this.handleAddItemClick}>Add Item</button>
                <button onClick={this.handleStoresClick}>Stores</button>

            </div>
        )
    }
}

export default connect()(MyList);