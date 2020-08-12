import React from 'react';
import {Formik,Form, Field, ErrorMessage} from 'formik'
import '../login boostrap/index.css'
import Button from 'react-bootstrap/Button';


const LoginBoo = () => {

    return(
        <div className="box" >
            <h1>Inicio de Sesion</h1>
            <Formik
                initialValues={{ email: '', password: ''}}

                validate= {values => {

                    const error = {};

                    if(!values.email){
                        error.email = 'debe ser un formato de correo'
                    }
                    if(values.password.length > 5){
                        error.password = 'La contraseña debe ser mayor a 8 caracteres'
                    }
                    if(!values.password !== !values.passwordConfirm ){
                        error.passwordConfirm = 'debe ser un formato de correo'
                    }

                    return error;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    console.log(values)
                        setSubmitting(false);
                    }
            >
                {({
                      isValid,
                      errors,
                      isSubmitting,
                  }) => (
                    <div className="box-form">
                        <Form>

                            <label name='email'>Correo
                                <Field className="input" name='email' type="email" />
                            </label>
                            <ErrorMessage className="error" name='email' component='div' />
                            <label name='password'>Contraseña
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

export default LoginBoo;