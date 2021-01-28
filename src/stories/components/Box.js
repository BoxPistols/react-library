import React from 'react'
import '../assets/style.css'
import './box.css'

function Box(props) {
    const { variant = '', rad = '', children, ...rest } = props
	return (
		<div className={`box box-${variant} rad-${rad}`} {...rest}>
             {variant}
            {/* {children} */}
		</div>
	)
}
export default Box
