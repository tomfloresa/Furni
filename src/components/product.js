import React, {Component} from 'react';
import { connect } from 'react-redux';
import {fetchProduct} from '../actions';

class Product extends Component {
  componentDidMount() {
    const {id} = this.props.match.params;
    this.props.fetchProduct(id);
  }

  render() {
    const {product} = this.props;

    return(
      <div>
        {product.name}
      </div>
    );
  }
}

function mapStateToProps({products}, ownProps) {
  return {product: products[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchProduct})(Product);
