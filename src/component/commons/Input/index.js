import React, {useState} from 'react';
import {Field} from 'formik';
import PropTypes from "prop-types";
import Icon from '@material-ui/core/Icon';
import './index.css'

const Campo = (props) => {
    const [observe, setObserve] = useState("password")
    const handleClick = ({event}) => {
        setObserve(observe === "password" ? "text" : "password" )
    }
    const{
        icon1,
        icon2,
        type,
        name,
        placeholder,
        isPassword
    }= props

    return(
        <div className="box-input">
            <div className="box-input-box">
                <Icon className="box-input-icon" >{icon1}</Icon>
                <Field className="box-input-field" name={name} type={ isPassword ? observe : type} placeholder={placeholder} />
                <div onClick={ isPassword ? handleClick : () => {} }><Icon className="box-input-icon" >{icon2}</Icon></div>
            </div>
        </div>
    )
};

Campo.propTypes = {
    email: PropTypes.string,
    password: PropTypes.string,
    placeholder: PropTypes.string,
    icon1: PropTypes.string,
    icon2: PropTypes.string,
    isPassword: PropTypes.bool
};

Campo.defaultProps = {
    isPassword: false
}

export default Campo;