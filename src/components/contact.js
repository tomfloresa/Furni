import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {submitContactForm} from '../actions'

class Contact extends Component {

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
        this.props.submitContactForm(values, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const {handleSubmit} = this.props;

        return (
            <div className="container">
              <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field label="Nombre" name="name" type="text" component={this.renderField}/>
                <Field label="Correo Electrónico" name="email" type="text" component={this.renderField}/>
                <Field label="Mensaje" name="message" type="text" component={this.renderField}/>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};

    if (!values.name) {
        errors.name = "Necesitamos tu nombre.";
    }

    if (!values.email) {
        errors.email = "Necesitamos tu correo para poder conctactarte.";
    }

    if (!values.message) {
        errors.message = "Favor, ingresa un mensaje.";
    }

    return errors;
}

export default reduxForm({validate, form: 'ContactForm'})(connect(null, {submitContactForm})(Contact));
