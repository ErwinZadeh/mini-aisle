import React, { Component } from 'react';
// import logo from './logo.svg';
// import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import AddItem from '../AddItem/AddItem'
import MyList from '../MyList/MyList'
import Stores from '../Stores/Stores'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h2 className="App-title">Mini AISLE!</h2>
          </header>
          <br />
          <main>
            <Route exact path='/' component={AddItem} />
            <Route path='/MyList' component={MyList} />
            <Route path='/Stores' component={Stores} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;