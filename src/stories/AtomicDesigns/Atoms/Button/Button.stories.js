import { Button } from './Button';

const Storybook = {
  title: 'Atomic Designs/Atoms/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};
export default Storybook

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  //   primary: false,
  label: 'Default',
};

// export const Primary = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: 'primary',
// };

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Small',
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



export const Full = Template.bind({});
Full.args = {
  full: true,
  label: 'Full',
};
