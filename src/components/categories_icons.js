import React, { Component } from 'react';
import ProductIcon from './product_icon';

class CategoriesIcons extends Component {
  render() {
    return (
      <div className="container mar-top-60">
        <div className="row">
          <div className="col-md-3">
            <ProductIcon source={"img/icons/table.svg"} header={"Test"} />
          </div>
          <div className="col-md-3">
            <ProductIcon source={"img/icons/bed.svg"} header={"Test"} />
          </div>
          <div className="col-md-3">
            <ProductIcon source={"img/icons/chair.svg"} header={"Test"} />
          </div>
          <div className="col-md-3">
            <ProductIcon source={"img/icons/drawers.svg"} header={"Test"} />
          </div>
        </div>
      </div>
    );
  }
}

export default CategoriesIcons;
