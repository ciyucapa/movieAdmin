import React from 'react';
import {Formik,Form, Field, ErrorMessage} from 'formik'
import '../login boostrap/index.css'
import Button from 'react-bootstrap/Button';
import PropTypes from "prop-types";

const LoginBoo = () => {

    return(
        <div className="box" >
            <Formik
                initialValues={{ email: '', password: ''}}

                validate= {values => {

                    const error = {};

                    if(!values.email){
                        error.email = 'debe ser un formato de correo'
                    }
                    if(values.password.length < 5){
                        error.password = 'La contraseña debe ser mayor a 5 caracteres'
                    }

                    return error;
                }}

                onSubmit={(values, { setSubmitting }) => {
                    console.log(values)
                    setSubmitting(false);
                }}
            >
                {({
                      errors,
                      isSubmitting,
                      isValid
                  }) => (
                    <div className="box-form">
                        <Form>
                            <h1>Inicio de sesión</h1>
                            <label className="label" name='email'>Correo
                                <Field className="input" name='email' type="email" />
                            </label>
                            <ErrorMessage className="error" name='email' component='div' />
                            <label className="label" name='password'>Contraseña
                                <Field className="input" name='password' type="password"  />
                            </label>
                            <ErrorMessage className="error" name='password' component='div' />
                            <Button
                                type='submit'
                                disabled={isSubmitting || !isValid}
                            >Enviar
                            </Button>
                        </Form>
                    </div>
                )
                }
            </Formik>
        </div>
    )
};

LoginBoo.propTypes = {
    email: PropTypes.string,
    password: PropTypes.string,
    isValid: PropTypes.bool,
    isSubmitting: PropTypes.bool,
};

export default LoginBoo;