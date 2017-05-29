import React, {Component} from 'react';
import { connect } from 'react-redux';
import {fetchProduct} from '../actions';

class Product extends Component {
  componentDidMount() {
    const {id} = this.props.match.params;
    this.props.fetchProduct(id);
  }

  getHoverImages(product) {
    return _.map(product.product_images, image => {
      return (
        <img src={image.image_url} alt="" key={image.image_url}/>
      );
    });
  }

  getFirstHoverImage(product) {
    console.log(product.product_images[0].image_url);
    return (
      <img src={product.product_images[0].image_url} alt=""/>
    );
  }

  render() {
    const {product} = this.props;

    return(
      <div className="container">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        {this.getFirstHoverImage(product)}
      </div>
    );
  }
}

function mapStateToProps({products}, ownProps) {
  return {product: products[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchProduct})(Product);
