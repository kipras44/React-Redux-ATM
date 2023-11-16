import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';


const root = ReactDOM.createRoot(document.getElementById('root')); // Utilising the provider to take advantage of Redux methods.
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

