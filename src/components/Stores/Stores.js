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

    editButton = (id) => {
        axios.put(`/item/${id}`)
          .then(response => {
            this.getAllItems();
          })
          .catch( error => {
            console.log('Error in put', error);
            alert('Could not update item at this time. Try again later.');
          })
    }
    
    deleteButton = (event) => {
        console.log("delete me!", event.target.name);
        axios.delete(`/item/${event.target.name}`)
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
                        {this.state.itemsArray.map((itemsArray) => (
                            <tr key={itemsArray.id}>
                                <td>{itemsArray.item_name}</td>
                                <td>{itemsArray.amount}</td>
                                <td>{itemsArray.amount_id}</td>
                                <td>{itemsArray.category_id}</td>
                                <td>{itemsArray.store_id}</td>
                                <td><button onClick={ () => this.editButton(itemsArray.id) }>Edit</button></td>
                                <td><button name={itemsArray.id} onClick={(event)=>this.deleteButton(event, itemsArray.id)}>Delete</button></td>
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