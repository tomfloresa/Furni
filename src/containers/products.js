import React, {Component} from 'react';
import { connect } from 'react-redux';
import {fetchProducts} from '../actions/index';
import Product from '../components/product';

class Products extends Component {
  showProducts() {
    return(
      <div>
        <Product />
      </div>
    );
  }

  render() {
    return(
      <div>
        {this.showProducts()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {products: state.props}
}

export default connect(mapStateToProps, {fetchProducts})(Products);
