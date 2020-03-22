import React, { Component } from 'react';
import { connect } from 'react-redux';
// import AddItem from '../AddItem/AddItem'

// import axios from 'axios';

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
                <h2>{JSON.stringify(this.props.reduxState)}</h2>
                <button onClick={this.handleAddItemClick}>Add Item</button>
                <button onClick={this.handleStoresClick}>Stores</button>

            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
});


export default connect(putReduxStateOnProps)(MyList);