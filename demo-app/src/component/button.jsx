import React from 'react';
import PropTypes from 'prop-types';

const CustomButton = ({ text, onClick, backgroundColor }) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: backgroundColor,
        color: '#fff',
        marginRight: '10px',
        padding: '5px 10px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        display: 'inline-flex', 
        alignItems: 'center', 
      }}
    >
      <span>{text}</span>
    </button>
  );
};

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

export default CustomButton;
