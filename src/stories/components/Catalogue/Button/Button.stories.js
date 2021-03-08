import React from 'react'
import Button from './Button'

const Storybook = {
  title: 'Catalogue/Button',
  component: Button,
  // default
  args: {
    children: 'Args Child!'
  }
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

export const Primary = () => <Button variant="primary">Primary</Button>

const AddStory = (args) => {
  return (
    <>
      <h2 className="pl12">AAAA</h2>
      <Button {...args} />
    </>
  )
}

export const LongPrimaryA = AddStory.bind({})
LongPrimaryA.args = {
  ...LongPrimaryA.args,
  children: 'Long Primary Args',
  variant: 'primary',
}

// export const Success = () => <Button variant="success">Success</Button>
// export const Danger = () => <Button variant="danger">Danger</Button>
// export const Warning = () => <Button variant="warning">Warning</Button>
