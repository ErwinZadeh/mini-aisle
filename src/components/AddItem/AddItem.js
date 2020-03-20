import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddItem extends Component {

    handleMyListClick = () => {
        this.props.history.push('/MyList')
    }

    handleStoresClick = () => {
        this.props.history.push('/Stores')
    }

    render() {
        return (
            <div>
                <h1>This is Add Item View!</h1>
                <button onClick={this.handleMyListClick}>My List</button>
                <button onClick={this.handleStoresClick}>Stores</button>
            </div>
        )
    }
}

export default connect()(AddItem);