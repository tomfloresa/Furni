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
        <div className="rotated-div bg-color-purple pad-top-150 pad-bottom-150 mar-top-120">
          <div className="rotate-to-normal">
            <Products furnitureToRender={3} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
