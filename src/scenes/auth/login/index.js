import React from 'react';
import { withFormik, Form, Field, ErrorMessage} from 'formik';
import PropsTypes from 'prop-types';


const Login = (props) => {
    const {
        isSubmitting,
        isValid
    } = props


    return(
        <Form>
            <div className=""> Correo <Field name="email" type="email" /></div>
            <ErrorMessage name="email"/>
            <div className=""> Contraseña <Field name="password" type="password" /></div>
            <ErrorMessage name="password"/>
            <button 
            type="submit" 
            className={isSubmitting || !isValid ? 'color2' : 'color1'}
            disabled={isSubmitting || !isValid} 
            > 
            Entrar!!!
            </button>
        </Form>
    );
};

Login.protoTypes = {
    isSubmitting: PropsTypes.bool,
    isValid: PropsTypes.bool
}


export default withFormik({
    mapPropsToValues: () => ({
        email: '',
        password: ''
    }),

    validate(values) {
        const errors = {};
        
            if (!values.password) {
                errors.password = "Is Requerid!"
            } else if (values.password.length < 5) {
                errors.password = "Mayor a 5 caracteres!"
            }

            return errors;
        },

    handleSubmit(values, formikBag) {
        formikBag.setSubmitting(false)
        console.log(values);
    },
}) (Login);