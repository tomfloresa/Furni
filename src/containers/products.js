import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {fetchProducts} from '../actions/index';
import Product from '../components/product';
import _ from 'lodash';

class Products extends Component {
  constructor(props) {
    super(props);
    this.playImages =  this.playImages.bind(this);
  }

  componentDidMount() {
    const {id} = this.props.match.params;
    this.props.fetchProducts(id);
  }

  getHoverImages(product) {
    return _.map(product.product_images, image => {
      return (
        <img src={image.image_url} alt="" key={image.image_url}/>
      );
    });
  }

  getFirstHoverImage(product) {
    if (product.product_images.length >= 1) {
      return (
        <img src={product.product_images[0].image_url} alt=""/>
      );
    }
  }

  playImages(event) {
    this.setState({
      hovered: true
    });

    const divHolder =  event.target;
    const images = divHolder.querySelectorAll('img');

    while (this.props.hovered) {
      _.each(images, (image, index) =>{
        image.style.display = 'none';
        setTimeout(() => {
          image.style.display = 'block';
        }, 1000);
      });
    }
  }

  stopAndBackToBegin() {
  }

  showProducts() {
    return _.map(this.props.products, product => {
      return (
        <div key={product.id} className="col-lg-4 col-md-4 product-showcase">
          <Link to={`productos/${product.id}`}>
            <div className="product-showcase-inner">
              <div className="images-product-hover" hovered={false} onMouseEnter={this.playImages.bind(this)} onMouseLeave={this.stopAndBackToBegin}>
                {/* {this.getHoverImages(product)} */}
                {this.getFirstHoverImage(product)}
              </div>
              <h3 className="text-center">{product.name}</h3>
              <p className="product-description text-center">"{product.description}"</p>
              <div className="text-center">
                <div className={product.available ? 'product-availability available' : 'btn product-availability unavailable'}>{product.available ? 'Comprar' : 'No Disponible'}</div>
              </div>
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
