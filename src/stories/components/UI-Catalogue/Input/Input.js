import PropTypes from 'prop-types'
import './Input.scss'

export default function Input(props) {
  const { label, size = 'medum', placeholder, ...args } = props
  return (
    <div className="form form-input">
      <label>{label}</label>
      <input className={`input ${size}`} {...args} placeholder={placeholder} />
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'x-large']),
  placeholder: PropTypes.string,
}

Input.defaultProps = {
  label: 'Label Name',
  size: 'medium',
  placeholder: 'Please input text...',
}
