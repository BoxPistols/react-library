// import React from 'react'
import Bg from './Box'

const Storybook = {
	title: 'Foundation/Colors',
	component: Bg
}
export default Storybook

export const ColorsMix = () => {
	return (
        <div className="stb__box-org">
            <div className="stb__box-1">
                <Bg variant='primary' rad=''></Bg>
                <Bg variant='success'></Bg>
                <Bg variant='danger'></Bg>
                <Bg variant='warning'></Bg>
                <Bg variant='info'></Bg>
            </div>
            <div className="stb__box-1">
                <Bg variant='gray-100'></Bg>
                <Bg variant='gray-200'></Bg>
                <Bg variant='gray-300'></Bg>
                <Bg variant='gray-400'></Bg>
                <Bg variant='gray-500'></Bg>
            </div>
        </div>
	)
}

// export const Primary = () => <Bg variant='primary'></Bg>
// export const Success = () => <Bg variant='success'></Bg>
// export const Danger = () => <Bg variant='danger'></Bg>
// export const Warning = () => <Bg variant='warning'></Bg>
// export const Info = () => <Bg variant='info'></Bg>
// export const Gray = () => <Bg variant='gray'>disable</Bg>
// Gray.storyName = 'Gray Default'