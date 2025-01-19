import React from 'react'
import './Card.css';
import PropTypes from 'prop-types';

const Card = (props) => {
    return (
        <div className='card'>
            <h2>Hi, <span>{props.name}</span></h2>
            <h4>Roll No. <span>{props.roll}</span></h4>
            <h4>Class <span>{props.stuClass}</span></h4>
        </div>
    )
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    roll: PropTypes.number.isRequired,
    stuClass: PropTypes.string
};

Card.defaultProps = {
    stuClass: "Not Assigned"
};

export default Card
