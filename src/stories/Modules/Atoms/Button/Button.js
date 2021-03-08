import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, color, size, full, label, backgroundColor, ...props }) => {
//   const mode = primary ? 'btn-primary' : 'btn-secondary';
  const width = full ? 'btn-width-full ' : '';
  return (
      <>
        <button
        type="button"
        className={['storybook-button', `btn-size-${size}`, `btn-${color}`, width].join(' ')}
        style={backgroundColor &&{backgroundColor}}
        {...props}
        >
        {label} {props.children}
        </button>
    </>
  );
};


Button.propTypes = {
//   primary: PropTypes.bool,
  full: PropTypes.bool,
  color: PropTypes.oneOf(['secondary','primary', 'success', 'danger']),
  size: PropTypes.oneOf(['small', 'medium', 'large', 'x-large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  color: 'secondary',
//   primary: false,
  full: false,
  size: 'medium',
  onClick: undefined,
};
