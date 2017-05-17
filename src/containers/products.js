import React, {Component} from 'react';
import { connect } from 'react-redux';
import {fetchProducts} from '../actions/index';

class Products extends Component {
  showProducts() {
    return(
      <div>
        This is a single product
      </div>
    );
  }

  render() {
    return(
      <div>
        BLA
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {products: state.props}
}

export default connect(mapStateToProps, {fetchProducts})(Products);
