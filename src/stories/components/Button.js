import React from 'react'
import './button.css'

function Button(props) {
	const { variant = '', children, ...rest } = props
	return (
		<button className={`button ${variant}`} {...rest}>
			{children}
		</button>
	)
}
export default Button
