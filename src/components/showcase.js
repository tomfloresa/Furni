import React, { Component } from 'react';
import MainSection from './main_section';
import HighlightedProducts from './highlighted_products';
import Products from '../containers/products';

class Showcase extends Component {
  render() {
    return (
      <div>
        <Products />
      </div>
    );
  }
}

export default Showcase;
