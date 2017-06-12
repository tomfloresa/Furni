import React, { Component } from 'react';

class ProductIcon extends Component {
  render() {
    const {source, header} = this.props;

    return (
      <div className="icon-holder">
        <img src={source} alt=""/>
        <h3 className="text-center">{header}</h3>
      </div>
    );
  }
}

export default ProductIcon;
