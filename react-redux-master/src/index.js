import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'; // Import configureStore from Redux Toolkit
import myReducers from './reducers';

// Create the store using configureStore
const myStore = configureStore({
  reducer: myReducers, // Pass your root reducer to configureStore
  // Other configuration options can be added here, such as middleware, enhancers, etc.
});

// This will console log the current state every time the state changes
myStore.subscribe(() => console.log(myStore.getState()));

// Enveloping the App inside the Provider ensures that the states in the store are available
// throughout the application
ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
