import React from 'react';
import './index.css'
import {Formik, Form, ErrorMessage} from 'formik'
import PropTypes from "prop-types";
import Campo from '../../../component/commons/Input';
import Buttons from "../../../component/commons/Button";




const LoginU = () => {

    return(
        <div className="container">
            <Formik
                initialValues={{
                    email:'',
                    password:''
                }}

                validate={values => {
                    const error = {};

                    if(!values.email){
                        error.email ="is Requerid"
                    }
                    if(values.password.length < 5){
                        error.password ="mayor a 5"
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
                      isValid,
                      isSubmitting,
                  }) => (
                    <Form>
                        <div className="form-form">
                            <h1>Hello</h1>
                            <h3>Sign in to your account</h3>
                        </div>
                        <Campo icon1="person" name="email" type="email"/>
                        <ErrorMessage className='error' name="email" component="div"/>
                        <Campo icon1="lock" name="password" type="password" placeholder="password" icon2="visibility" isPassword />
                        <ErrorMessage className='error' name="password" component="div"/>
                        <div className="button-butt">Forget your password?</div>
                        <Buttons
                            title="Sign in"
                            disabled={isSubmitting || !isValid}
                        />
                        <div className="title-solo">
                            Don´t have an account? <span>Create</span>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
};

LoginU.propTypes = {
    email: PropTypes.string,
    password: PropTypes.string,
    isValid: PropTypes.bool,
    isSubmitting: PropTypes.bool,
};

LoginU.Default = {
    email: false,
    password: false,
    isSubmitting: false,
    isValid: false
};

export default LoginU;