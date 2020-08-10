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
                    } else if (values.password.length < 5 ) { 
                        error.password = "debe ser mayor a 5 digitos"
                    }
                    return error;
                }}
                
                onSubmit = { (values) => {
                    console.log(values)
                }}
            >
            <Form>
                <div className="container">
                <div className="container-form">
                <h1>Inicio de sesion</h1>
                    <label className="title">Email
                    <div className="input"><Field name="email" type="text" /></div>
                    </label>
                    <ErrorMessage name="email"/>
                    <label className="title">Contraseña
                    <div className="input"><Field name="password" type="password"/></div>
                    </label>
                    <ErrorMessage name="password"/>
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