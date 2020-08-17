import React from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import PropTypes from "prop-types";
import './index.css'

const Buttons = (props) => {
    const{
        title
    }= props

    return(
        <div className="box-button">
            <button type="submit" >
                <div className="box-button-title">{title}</div>
                <div><ArrowForwardIcon className="box-button-icon" /></div>
            </button>
        </div>
    )
};

Buttons.propTypes = {
    title: PropTypes.string
};

export default Buttons;