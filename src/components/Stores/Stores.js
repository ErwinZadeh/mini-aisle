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

    deleteButton = (event) => {
        console.log("delete me!", event.target.itemsArray.item_name);
        axios.delete(`/item/${event.target.item_name}`, event.target.item_name)
            .then((response) => {
                alert('Item was deleted from your list!');
                console.table('in /item delete', response);
                this.getAllItems();
            }).catch((err) => {
                console.log(err);
                alert(err)
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

                {/* <ul>
                    {
                        this.state.itemsArray.map((itemsArray, i) =>
                            <li key={i}>
                                {itemsArray.item_name}, 
                                {itemsArray.amount},
                                {itemsArray.amount_id},
                                {itemsArray.category_id},
                                {itemsArray.store_id}
                            </li>)
                    }
                </ul> */}

                <table className="itemTable">
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Amount</th>
                            <th>Unit</th>
                            <th>Type</th>
                            <th>Store</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.itemsArray.map((itemsArray, i) => (
                            <tr key={i}>
                                <td>{itemsArray.item_name}</td>
                                <td>{itemsArray.amount}</td>
                                <td>{itemsArray.amount_id}</td>
                                <td>{itemsArray.category_id}</td>
                                <td>{itemsArray.store_id}</td>
                                <td><button name={i} onClick={this.state.deleteButton}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>


                <button onClick={this.handleAddItemClick}>Add Item</button>
                <button onClick={this.handleMyListClick}>My List</button>
            </div>
        )
    }
}

export default Stores;