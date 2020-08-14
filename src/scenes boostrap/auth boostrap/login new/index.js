import React from 'react';
import './index.css'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import PropTypes from "prop-types";
import Button from "../../../component/commons/Button";
import Campo from '../../../component/commons/Input';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';



const Loggin = () => {

    return(
        <Formik
            initialValues={{
                email:'',
                password:''
            }}

            validate={values => {
                const error = {};

                if(!values.email){
                    error.name ="Campo requerido"
                }
                if(!values.password.length > 5 ){
                    error.name ="La contraseña debe ser mayor a 5"
                }

                return error;
            }}

            onSubmit={(values, { setSubmitting }) => {
                console.log(values)
                setSubmitting(false);
            }}
        >
            {({
                  values,
                  errors,
                  isValid,
                  isSubmitting,
                  /* and other goodies */
              }) => (
                    <Form>
                        <Campo name="email" type="email" />
                        <Campo name="password" type="password" />
                        <ErrorMessage className='error' name="name" component="div"/>
                        <Button
                            title="sing in"
                            disable={isSubmitting || !isValid}
                        />
                    </Form>
                )}
        </Formik>
    )
};

Loggin.propTypes = {
    email: PropTypes.string,
    password: PropTypes.string,
    isValid: PropTypes.bool,
    isSubmitting: PropTypes.bool,
};

Loggin.Default = {
    name: false,
    lastName: false,
    email: false,
    password: false,
    isSubmitting: false,
    isValid: false
};

export default Loggin;