import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {submitContactForm} from '../actions/';

class ContactForm extends Component {

    renderField(field) {
        const {
            meta: {
                touched,
                error
            }
        } = field;

        const className = `form-group ${touched && error
            ? 'has-danger'
            : ''}`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input className="form-control" type={field.type} {...field.input}/>
                <div className="text-help">
                    {touched
                        ? error
                        : ''}
                </div>
            </div>
        );
    }

    onSubmit(values) {
      console.log(values);
        this.props.submitContactForm(values, () => {
          console.log("Test");
        });
    }

    render() {
        const {handleSubmit} = this.props;

        return (
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2">
                  <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field label="Nombre" name="name" type="text" component={this.renderField}/>
                    <Field label="Correo Electrónico" name="email" type="text" component={this.renderField}/>
                    <Field label="Mensaje" name="message" type="text" component={this.renderField}/>
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </form>
                </div>
              </div>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};

    if (!values.name) {
        errors.name = <div className="animated fadeInUp form-error">Necesitamos tu nombre.</div>;
    }

    if (!values.email) {
        errors.email = <div className="animated fadeInUp form-error">Necesitamos tu correo.</div>;
    }

    if (!values.message) {
        errors.message = <div className="animated fadeInUp form-error">Favor, escribe un mensaje.</div>;
    }

    return errors;
}

export default reduxForm({
  validate,
  form: 'ContactForm'
})(
  connect(null, {submitContactForm})(ContactForm)
);
