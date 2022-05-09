import 'babel-polyfill';
import React from "react";
import ReactDom from 'react-dom';
import Routes from './Routes';
import {BrowserRouter as Router} from 'react-router-dom';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import  reducers from './reducers/index';
import { renderRoutes } from "react-router-config";
import { createBrowserHistory } from "history";
export const store =createStore(reducers,{},applyMiddleware(thunk))

if (typeof window !== 'undefined') {
    ReactDom.hydrate(<Provider store={store}>
        <Router >
          {renderRoutes(Routes )}
        </Router>
    </Provider>
  
    ,document.getElementById('root'));
}

