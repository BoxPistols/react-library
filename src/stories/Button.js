import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, color, size, label, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
      <>
        <button
        type="button"
        className={['storybook-button', `storybook-button--${size}`, `btn-${color}`, mode].join(' ')}
        {...props}
        >
        {label} {size} {color}
        </button>
    </>
  );
};


Button.propTypes = {
  primary: PropTypes.bool,
  color: PropTypes.oneOf(['primary', 'success', 'danger']),
  size: PropTypes.oneOf(['small', 'medium', 'large', 'x-large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  color: 'primary',
  primary: false,
  size: 'medium',
  onClick: undefined,
};
