import React from 'react'
import Box from './Box'

export default {
	title: 'UI/Box/Colors',
	component: Box
}

export const Mix = () => {
	return (
        <div className="stb__box-org">
            <div className="stb__box-1">
                <Box variant='primary' rad=''></Box>
                <Box variant='success'></Box>
                <Box variant='danger'></Box>
                <Box variant='warning'></Box>
                <Box variant='info'></Box>
            </div>
            <div className="stb__box-1">
                <Box variant='gray-100'></Box>
                <Box variant='gray-200'></Box>
                <Box variant='gray-300'></Box>
                <Box variant='gray-400'></Box>
                <Box variant='gray-500'></Box>
            </div>
        </div>
	)
}

// export const Primary = () => <Box variant='primary'>Primary</Box>
// export const Success = () => <Box variant='success'>Success</Box>
// export const Danger = () => <Box variant='danger'>Danger</Box>
// export const Warning = () => <Box variant='warning'>Warning</Box>
// export const Info = () => <Box variant='info'>Info</Box>
// export const Gray = () => <Box variant='gray'>Gray</Box>
