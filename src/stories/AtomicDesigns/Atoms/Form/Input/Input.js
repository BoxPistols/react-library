import PropTypes from 'prop-types'
import './Input.scss'

export default function Input(props) {

  const { labelClass, label, size = 'medum', rad = 'radius', placeholder, ...args } = props

  function handleChange() {
    console.log('handleChange')
  }

  return (
    <div className="form form-input">
      <label className={`${labelClass}`}>{label}</label>
      <input className={[`input ${size} ${rad}`]} {...args} placeholder={placeholder} onChange={handleChange} />
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'x-large']),
  rad: PropTypes.oneOf(['', 'radius']),
  labelClass: PropTypes.oneOf(['', 'none']),
  placeholder: PropTypes.string,
}

Input.defaultProps = {
  label: 'Label Name',
  size: 'small',
  placeholder: 'Please input text...',
  labelClass: '',
  rad: 'radius'
}
