import React from 'react';
import PropTypes from 'prop-types';

const ToggleButton = ({
  theme,
  onClick,
}) => {

  return (
    <button
      type="button"
      onClick={onClick}
    >
      Switch theme to <span>{theme}</span>
    </button>
  );
};

ToggleButton.propTypes = {
  theme: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

ToggleButton.defaultProps = {
  onClick: () => {},
};

export default ToggleButton;