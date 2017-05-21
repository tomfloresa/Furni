import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {fetchProducts} from '../actions/index';
import Product from '../components/product';
import _ from 'lodash';

class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  showProducts() {
    return _.map(this.props.products, product => {
      return (
        <div key={product.id}>
          <Link to={`products/${product.id}`}>
            <div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <h5>{product.available ? 'Disponible' : 'No Disponible'}</h5>
            </div>
          </Link>
        </div>
      );
    });
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
  return {products: state.products}
}

export default connect(mapStateToProps, {fetchProducts})(Products);
