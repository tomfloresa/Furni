import React, { Component } from 'react';

class MainSection extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img width="300px" src="http://www.pngpix.com/wp-content/uploads/2016/07/PNGPIX-COM-Chair-PNG-Transparent-Image.png" alt=""/>
          </div>
          <div className="col-lg-8">
            <h1 className="intro-header">There is no place <br/>
              like <span className="underline">home</span></h1>
            <h2>And we help you build it</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default MainSection;
