import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';

import { ListProducts } from './components/ListProducts';
import { ListCategories } from './components/ListCategories';

import FormProduct from './components/FormProduct';
import FormCategory from './components/FormCategory';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/list-products' component={ListProducts} />
        <Route path='/form-product/add' component={FormProduct} />
        <Route path='/form-product/:operation/:id' component={FormProduct} />
        <Route path='/list-categories' component={ListCategories} />
        <Route path='/form-category/add' component={FormCategory} />
        <Route path='/form-category/:operation/:id' component={FormCategory} />
      </Layout>
    );
  }
}
