import PropTypes from 'prop-types';
import './Text.scss';

export const Text = ({ size, color, ...props }) => {
  return (
      <>
        <div
        className={`text-${size}`}
        style={color &&{color}}
        {...props}
        >
        {props.children}
        </div>
    </>
  );
};


Text.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

Text.defaultProps = {
  size: '',
};
