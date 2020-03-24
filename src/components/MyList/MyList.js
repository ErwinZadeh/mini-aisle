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

    editButton = (id) => {
        axios({
            method: 'put',
            url: `/item/${id}`,
            data: this.state.itemsArray.amount
        }).then(response => {
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

    handleStoresClick = () => {
        this.props.history.push('/Stores')
    }

    render() {
        return (
            <div>
                <header><h1>My List</h1></header>
                {/* <h2>{JSON.stringify(this.props.reduxState)}</h2> */}

                <ul>
                    {
                        this.state.itemsArray.map((itemsArray, i) =>
                            <li key={i}>
                                {itemsArray.item_name}, 
                                {itemsArray.amount},
                                {itemsArray.amount_id},
                                {itemsArray.category_id},
                                {itemsArray.store_id},
                                <button onClick={ () => this.editButton(itemsArray.id) }>Edit</button>,
                                <button name={itemsArray.id} onClick={(event)=>this.deleteButton(event, itemsArray.id)}>Delete</button>
                            </li>)
                    }
                </ul>

                <button onClick={this.handleAddItemClick}>Add Item</button>
                <button onClick={this.handleStoresClick}>Stores</button>

            </div>
        )
    }
}

export default MyList;