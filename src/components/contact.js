import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {submitContactForm} from '../actions/';
import ContactForm from '../containers/contact_form';

class Contact extends Component {
    render() {
        return (
          <ContactForm />
        );
    }
}

export default Contact;
