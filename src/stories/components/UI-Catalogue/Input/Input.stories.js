import React from 'react'
import Input from './Input'

const Storybook = {
  title: 'UI-Catalogue/Form/Input',
  component: Input,
}
export default Storybook

const Template = (args) => <Input {...args} />;

export const Sizes = Template.bind({});
Sizes.args = {
  size: 'small',
};

export const Small = () => <Input size="small" placeholder="small"/>
export const Medium = () => <Input size="medium" />
export const Large = () => <Input size="large" />
