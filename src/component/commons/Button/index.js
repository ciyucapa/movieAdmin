import React from 'react';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import PropTypes from "prop-types";

const Buttons = (props) => {
    const{
        disabled,
        title
    }= props

    return(

    <Button endIcon={<ArrowForwardIcon />}disabled={disabled}>
        {title}
    </Button>
    )
};

Buttons.propTypes = {
    disabled: PropTypes.bool,
    title: PropTypes.string
};

export default Buttons;