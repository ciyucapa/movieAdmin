import React from 'react';
import {Formik, Form ,Field, ErrorMessage } from 'formik';
import PropsTypes from 'prop-types'
import './index.css'

function LoginNew (props) {

    const {
        isSubmitting,
        isValid,
        errors,
    } = props

    return(
        <div>
            <Formik
                initialValues = { { 
                    email:'' , 
                    password:'' 
                }}
                validate = { (values) => {
                
                    const error = {};

                    if (!values.password) {
                       error.password = "Este campo es requerido"
                    }
                   if (values.password.length < 5 ) {
                        error.password = "debe ser mayor a 5 digitos"
                    }
                    return error;
                }}
                
                onSubmit = { (values) => {
                    console.log(values)
                }}
            >
            <Form>
                <div className="container-form">
                <div className="container-form-one">

                <h1>Inicio de sesion</h1>
                    <label className="title">Email
                    <div className="input"><Field name="email" type="text" required /></div>
                    </label>
                    <ErrorMessage className="error" name="email" component="div" />
                    <label className="title">Contraseña
                    <div className="input"><Field name="password" type="password"/></div>
                    </label>
                    <ErrorMessage className="error" name="password" component="div"/>
                    <button 
                        type="submit"
                        disabled={isSubmitting }
                    >
                        Click Me!
                    </button>
                </div>
                </div>
            </Form>
            </Formik>
        </div>
    );
}

LoginNew.protoTypes = {
    isSubmitting: PropsTypes.bool,
    isValid: PropsTypes.bool
}

export default LoginNew;