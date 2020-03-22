import React, { Component } from 'react';
import { connect } from 'react-redux';
// import AddItem from '../AddItem/AddItem'

// import axios from 'axios';

class MyList extends Component {

    // componentDidMount = () => {
    //     this.getAllItems();
    // }

    // getAllItems = () => {
    //     axios({
    //         method: 'GET',
    //         url: '/item'
    //     }).then((response) => {

    //         this.props.dispatch({
    //             type: 'SET_ITEMS',
    //             payload: response.data
    //         })

    //     }).catch((error) => {
    //         console.log(error);
    //     })
    // }


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
                {/* <AddItem getAllItems={this.getAllItems} /> */}
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