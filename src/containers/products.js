import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {fetchProducts} from '../actions';
import ProductSquare from '../components/product_square'
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
        <ProductSquare key={product.id} product={product} />
      );
    });
  }

  render() {
    const {products} = this.props;

    return (
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
