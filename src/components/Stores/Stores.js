import React, { Component } from 'react';
import { connect } from 'react-redux';

class Stores extends Component {

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
                <button onClick={this.handleAddItemClick}>Add Item</button>
                <button onClick={this.handleMyListClick}>My List</button>
            </div>
        )
    }
}

export default connect()(Stores);