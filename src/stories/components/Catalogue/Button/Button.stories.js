import React from 'react'
import Button from './Button'

const Storybook = {
  title: 'Catalogue/Button',
  component: Button,
}
export default Storybook

export const ButtonMix = () => (
  <>
    <Button variant="primary">Primary</Button>
    <Button variant="success">Success</Button>
    <Button variant="danger">Danger</Button>
    <Button variant="warning">Warning</Button>
  </>
)

// export const Primary = () => <Button variant="primary">Primary</Button>
// export const Success = () => <Button variant="success">Success</Button>
// export const Danger = () => <Button variant="danger">Danger</Button>
// export const Warning = () => <Button variant="warning">Warning</Button>
