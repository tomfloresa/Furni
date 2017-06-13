import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {submitContactForm} from '../actions/';
import ContactForm from '../containers/contact_form';
import Products from '../containers/products';

class Contact extends Component {
    render() {
        return (
          <div>
            <ContactForm />
            <div className="rotated-div bg-color-calipso pad-top-150 pad-bottom-150 mar-top-120">
              <div className="rotate-to-normal">
                <Products furnitureToRender={3} />
              </div>
            </div>
          </div>
        );
    }
}

export default Contact;
