import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

class ProductSquare extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: props.product
    };
  }

  componentDidMount() {
  }

  getHoverImages(product) {
    return _.map(product.product_images, image => {
      return (
        <img className="hoverable-image" src={image.image_url} alt="" key={image.image_url} />
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

  initCarrousel(event) {
    const holder = event.target;
    const images = holder.querySelectorAll('img');

    _.forEach(images, (image) => {
      console.log(image);
    });
  }

  render() {
    const {product} = this.props;

    if (!this.props.product) {
      return (<div>Waiting</div>);
    }

    return (
      <div className="col-lg-4 col-md-4 col-sm-6 product-showcase">
        <Link to={`productos/${product.id}`}>
          <div className="product-showcase-inner">
            <div className="images-product-hover" onMouseEnter={this.initCarrousel.bind(this)}>
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
  }
}

export default ProductSquare;
