import React from 'react';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const Buttons = (props) => {
    const{
        title
    }= props

    return(
        <Button
            endIcon={<ArrowForwardIcon />}
        >
            {title}
        </Button>
    )
};

export default Buttons;