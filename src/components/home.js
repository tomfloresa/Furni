import React, { Component } from 'react';
import MainSection from './main_section';
import HighlightedProducts from './highlighted_products';
import Products from '../containers/products';
import CategoriesIcons from '../components/categories_icons';

class Home extends Component {
  render() {
    return (
      <div>
        <MainSection/>
        <CategoriesIcons />
        <Products furnitureToRender={3} />
      </div>
    );
  }
}

export default Home;
