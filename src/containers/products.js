import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {fetchProducts} from '../actions/index';
import Product from '../components/product';
import _ from 'lodash';

class Products extends Component {
  componentDidMount() {
    const {id} = this.props.match.params;
    this.props.fetchProducts(id);
  }

  getHoverImages(product) {
    return _.map(product.product_images, image => {
      console.log(image.index);
      return (
        <img src={image.image_url} alt="" key={image.image_url}/>
      );
    });
  }

  playImages() {
    console.log("TEst");
  }

  stopAndBackToBegin() {
    console.log("TEst");
  }

  showProducts() {
    return _.map(this.props.products, product => {
      return (
        <div key={product.id} className="col-lg-4 col-md-4 product-showcase">
          <Link to={`productos/${product.id}`}>
            <div className="product-showcase-inner">
              <div className="images-product-hover" onMouseEnter={this.playImages} onMouseLeave={this.stopAndBackToBegin}>
                {this.getHoverImages(product)}
              </div>
              <h3 className="text-center">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <h5 className="product-availability">{product.available ? 'Disponible' : 'No Disponible'}</h5>
            </div>
          </Link>
        </div>
      );
    });
  }

  render() {
    return(
      <div className="container">
        {this.showProducts()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {products: state.products}
}

export default connect(mapStateToProps, {fetchProducts})(Products);
