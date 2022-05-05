import React from "react";
import ReactDom from 'react-dom';
import Routes from './Routes';
import { Router} from 'react-router-dom';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import  reducers from './reducers/index';

import { createBrowserHistory } from "history";
const store =createStore(reducers,{},applyMiddleware(thunk))

const history=createBrowserHistory()
ReactDom.hydrate(<Provider store={store}>
        <Router history={history}>
            <Routes/>
        </Router>
    </Provider>
  
    ,document.querySelector('#root'));