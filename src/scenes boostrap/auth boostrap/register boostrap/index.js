import React from 'react';
import {Formik,Form, Field, ErrorMessage} from 'formik'
import '../login boostrap/index.css'
import Button from 'react-bootstrap/Button';

const RegisterBoo = () => {

    return(
        <div className="box" >
            <h1>Registro de Usuario</h1>
            <Formik
                initialValues={{ name: '', lastName:'', email: '', password: '', passwordConfirm:''}}

                validate= {values => {

                    const error = {};

                    if(!values.name){
                        error.name = 'Campo requerido'
                    }
                    if(!values.lastName){
                        error.lastName = 'Campo requerido'
                    }
                    if(!values.email){
                        error.email = 'debe ser un formato de correo'
                    }
                    if(values.password.length < 5){
                        error.password = 'La contraseña debe ser mayor a 5 caracteres'
                    }
                    if(values.passwordConfirm.length < 5){
                        error.passwordConfirm = 'La contraseña debe ser mayor a 5 caracteres'
                    }
                    if(!values.password !== !values.passwordConfirm ){
                        error.passwordConfirm = 'debe ser un formato de correo'
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
                  }) => (
                    <div className="box-form">
                        <Form>
                            <label name="name">Nombre
                                <Field className="input" name="name" type="text"  />
                            </label>
                            <ErrorMessage className="error" name="name" component='div' />
                            <label name="lastName">Apellido
                                <Field className="input" name="lastName" type="text" />
                            </label>
                            <ErrorMessage className="error" name="lastName" component='div' />
                            <label name='email'>Correo
                                <Field className="input" name='email' type="email" />
                            </label>
                            <ErrorMessage className="error" name='email' component='div' />
                            <label name='password'>Contraseña
                                <Field className="input" name='password' type="password"  />
                            </label>
                            <ErrorMessage className="error" name='password' component='div' />
                            <label name='passwordConfirm'>Repetir Contraseña
                                <Field className="input" name='passwordConfirm' type="password"  />
                            </label>
                            <ErrorMessage className="error" name='passwordConfirm' component='div' />
                            <Button
                                type='submit'
                                disabled={isSubmitting}
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

export default RegisterBoo;