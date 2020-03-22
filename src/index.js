import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger'


let initialState ={
    itemName: '',
    amountNumber: 0,
    amountUnit: 'other',
    category: '',
    shoppingStore: 'other'
}
  
let itemInfo = (state = initialState, action) => {
    switch (action.type) {
        case '1':
          return { ...state, itemName: action.payload }
        case '2':
          return { ...state, amountNumber: action.payload }
        case '3':
          return { ...state, amountUnit: action.payload }
        case '4':
          return { ...state, shoppingStore: action.payload }
        case 'RESET':
          return initialState
        default: 
          return state
      }
}
  
let store = createStore(
    //reducers
    combineReducers({
        itemInfo
    }),
    //logger/middlewares
    applyMiddleware(
        logger
    )
  )


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
