import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {thunk} from "redux-thunk"
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import Reducers from './Redux/store.js'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const store = createStore(Reducers,applyMiddleware(thunk));
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <Provider store={store}>
  <React.StrictMode>
    <App />
   </React.StrictMode>
   <ToastContainer/>
   </Provider>
   
);