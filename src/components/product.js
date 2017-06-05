import React, {Component} from 'react';
import { connect } from 'react-redux';
import {fetchProduct} from '../actions';
import Carousel from 'nuka-carousel';

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
    return (
      <img src={product.product_images[0].image_url} alt={product.name} />
    );
  }

  render() {
    const {product} = this.props;

    if (!product) {
      return (<div>Cargando producto...</div>);
    }

    return(
      <div className="container">
        <div className="row">
          <div className="col-md-7 col-sm-6">
            <Carousel>
              {this.getHoverImages(product)}
            </Carousel>
          </div>
          <div className="col-sm-5 col-sm-6">
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <ul>
              <li>Alto: {product.height ? product.height : 'Sin especificar'}</li>
              <li>Ancho: {product.width ? product.width : 'Sin especificar'}</li>
              <li>Profundidad: {product.depth ? product.depth : 'Sin especificar'}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({products}, ownProps) {
  return {product: products[ownProps.match.params.id]};
}

export default connect(mapStateToProps, {fetchProduct})(Product);
