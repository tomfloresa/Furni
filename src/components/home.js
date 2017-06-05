import React, { Component } from 'react';
import MainSection from './main_section';
import HighlightedProducts from './highlighted_products';
import Products from '../containers/products';

class Home extends Component {
  render() {
    return (
      <div>
        <MainSection/>
        <Products furtinureToRender={3} />
      </div>
    );
  }
}

export default Home;
