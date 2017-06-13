import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {submitAdminLoginForm} from '../actions/';

class AdminLoginForm extends Component {

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
        this.props.submitAdminLoginForm(values, () => {
          console.log(values);
        });
    }

    render() {
        const {handleSubmit} = this.props;

        return (
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2">
                  <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field label="Email" name="mail" type="email" component={this.renderField}/>
                    <Field label="Contraseña" name="secret" type="password" component={this.renderField}/>
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

    if (!values.mail) {
        errors.mail = <div className="animated fadeInUp form-error">Necesitamos tu correo electrónico.</div>;
    }

    if (!values.secret) {
        errors.secret = <div className="animated fadeInUp form-error">Necesitamos tu contraseña.</div>;
    }

    return errors;
}

export default reduxForm({
  validate,
  form: 'AdminLoginForm'
})(
  connect(null, {submitAdminLoginForm})(AdminLoginForm)
);
