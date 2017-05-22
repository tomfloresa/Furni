import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReduxPromise from 'redux-promise';

import Navbar  from './components/navbar';
import Home  from './components/home';
import Contact  from './components/contact';
import Products  from './containers/products';
import Product from './components/product';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

require('../style/app.scss');

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route path="/productos/:id" component={Product} />
          <Route path="/productos" component={Products} />
          <Route path="/contacto" component={Contact} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('#app'));
