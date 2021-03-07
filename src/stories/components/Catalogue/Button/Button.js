import React from 'react'
import './button.scss'

function Button(props) {
	const { variant = '', children, ...rest } = props
	return (
		<button className={`btn  btn-${variant}`} {...rest}>
			{children}
		</button>
	)
}
export default Button
