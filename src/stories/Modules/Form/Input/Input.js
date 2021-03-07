import PropTypes from 'prop-types'
import './Input.scss'

export default function Input(props) {

  const { label, size = 'medum', rad = 'radius', placeholder, ...args } = props

  function handleChange() {
    console.log('handleChange')
  }

  return (
    <div className="form form-input">
      <label>{label}</label>
      <input className={[`input ${size} ${rad}`]} {...args} placeholder={placeholder} onChange={handleChange} />
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'x-large']),
  rad: PropTypes.oneOf(['defult', 'radius']),
  placeholder: PropTypes.string,
}

Input.defaultProps = {
  label: 'Label Name',
  size: 'small',
  placeholder: 'Please input text...',
  rad: 'radius'
}
