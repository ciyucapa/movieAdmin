import React from 'react';
import {Field} from 'formik';
import PropTypes from "prop-types";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";


const Campo = (props) => {

    const{
        type,
        name,
        icon
    }= props

    return(
        <div>
            <div><ArrowForwardIcon /></div>
            <div><Field name={name} type={type} /></div>
            <div>{icon}</div>
        </div>
    )
};

Campo.propTypes = {
    email: PropTypes.string,
    password: PropTypes.string,

};

Campo.Default = {
    icon: false,
    email: "",
    password:"",
};

export default Campo;