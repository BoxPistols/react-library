import { Text } from './Text'

const Storybook = {
  title: 'Atomic Designs/Atoms/Text',
  component: Text,
  argTypes: {
    color: { control: 'color' },
  },
}
export default Storybook

const Template = (args) => <Text {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Text-Sizes',
}

export const Small = Template.bind({})
Small.args = {
  size: 'sm',
  children: 'text-sm',
}

export const Medium = Template.bind({})
Medium.args = {
  size: 'md',
  children: 'text-md',
}

export const large = Template.bind({})
large.args = {
  size: 'lg',
  children: 'text-lg',
}

export const TextStyle = (args) => (
  <>
    <h2>Text Styling</h2>
    <Text lg="lg">Text-lg</Text>
    <div className="text-xxs">.text-xxs</div>
    <div className="text-xs">.text-xs</div>
    <div className="text-sm">.text-sm</div>
    <div className="text-md">.text-md</div>
    <div className="text-lg">.text-lg</div>
    <div className="text-xl">.text-xl</div>
    <div className="text-xxl">.text-xxl</div>
    <div className="text-xxxl">.text-xxxl</div>
    <div className="text-bold">.text-bold</div>
    <div className="text-normal">.text-normal</div>
    <div className="text-upper">.text-upper</div>
    <div className="text-underline">.text-underline</div>
    <div className="text-noUnderline">.text-noUnderline</div>
    <div className="letterSpacing-loose">.letterSpacing-loose</div>
    <div className="letterSpacing-looser">.letterSpacing-looser</div>
    <div className="lineHeight-normal">.lineHeight-normal</div>
  </>
)
