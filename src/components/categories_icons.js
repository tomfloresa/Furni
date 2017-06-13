import React, { Component } from 'react';
import ProductIcon from './product_icon';

class CategoriesIcons extends Component {
  render() {
    return (
      <div className="container mar-top-100">
        <div className="row">
          <div className="col-md-3">
            <ProductIcon source={"img/icons/table.svg"} header={"Tables"} />
          </div>
          <div className="col-md-3">
            <ProductIcon source={"img/icons/bed.svg"} header={"Beds"} />
          </div>
          <div className="col-md-3">
            <ProductIcon source={"img/icons/chair.svg"} header={"Chairs"} />
          </div>
          <div className="col-md-3">
            <ProductIcon source={"img/icons/drawers.svg"} header={"Drawers"} />
          </div>
        </div>
      </div>
    );
  }
}

export default CategoriesIcons;
