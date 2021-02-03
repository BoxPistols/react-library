import React from 'react'
import '../assets/style.css'
import './UI-button.css'

function Btn(props) {
	const { variant = '', children, ...rest } = props
	return (
		<button className={`btn  btn-${variant}`} {...rest}>
			{children}
		</button>
	)
}
export default Btn
