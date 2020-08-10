import React from 'react';
import {Formik, Form, Field, ErrorMessage } from 'formik';
import '../login/index.css'


const RegisterNew = () => {
    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                passwordConfirm: '',
            }}
            validate={ (values) => {
                const error = {};

                if (!values.firstName) {
                    error.firstName = 'Este campo requerido'
                }
                if (!values.lastName) {
                    error.lastName = 'Este campo requerido'
                }
                if (!values.email) {
                    error.email = 'formato invalido'
                }

                if (values.password.length < 5) {
                    error.password = 'la contraseña debe ser mayor a 5 caracteres'
                }
                if (values.passwordConfirm.length < 5) {
                    error.passwordConfirm = 'la confirmacion de la contraseña debe ser mayor a 5 caracteres'
                }
                if (values.passwordConfirm !== values.password) {
                    error.passwordConfirm = 'la contraseña debe ser igual'
                }
                return error;
            }}

            onSubmit={(values => {
                console.log(values)
                }
            )

            }
        >
            {
                (props) => {
                    const {
                        isValid,
                        isSubmitting,
                        errors
                    } = props

                    return (
                        <div className='container' >
                            <div className='container-form'>
                                <Form>
                                    <h1>Registro de Usuario</h1>
                                    <label>
                                        Nombre
                                        <Field name='firstName' type='text' className="input" />
                                    </label>
                                    <ErrorMessage className="error" name='firstName' component="div"/>
                                    <label>
                                        Apellido
                                        <Field name='lastName' type='text' className="input"/>
                                    </label>
                                    <ErrorMessage className="error" name='lastName' component="div"/>
                                    <label>
                                        Correo Electronico
                                        <Field name='email' type='email' className="input"/>
                                    </label>
                                    <ErrorMessage className="error" name='email' component="div"/>
                                    <label>
                                        Contraseña
                                        <Field name='password' type='password' className="input"/>
                                    </label>
                                    <ErrorMessage className="error" name='password' component="div" />
                                    <label>
                                        Repetir Contraseña
                                        <Field name='passwordConfirm' type='password' className="input"/>
                                    </label>
                                    <ErrorMessage className="error" name="passwordConfirm" component="div"/>
                                    <button
                                        type='submit'
                                        disabled={isSubmitting || !isValid}

                                    >
                                        Enviar</button>
                                </Form>
                            </div>
                        </div>
                    );
                }
            }
        </Formik>
    )
};

export default RegisterNew;