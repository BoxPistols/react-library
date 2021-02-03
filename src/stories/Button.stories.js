import React from 'react';
import { Button } from './Button';

export default {
  title: 'State/Button',
  component: Button,
  argTypes: {
    backgroundColor:  { control: 'color' },

  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  primary: false,
  label: 'Default',
};

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Default',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Second',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Large',
};

export const Xlarge = Template.bind({});
Xlarge.args = {
  size: 'x-large',
  label: 'Xlarge',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Small',
};

export const Full = Template.bind({});
Full.args = {
  full: true,
  label: 'Full',
};
