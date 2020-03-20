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
                <h1>This is Stores View!</h1>
                <button onClick={this.handleAddItemClick}>Add Item</button>
                <button onClick={this.handleMyListClick}>My List</button>
            </div>
        )
    }
}

export default connect()(Stores);