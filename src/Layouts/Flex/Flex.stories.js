import { Flex } from './Flex'

const Storybook = {
  title: 'Layout/Flex',
  component: Flex,
}
export default Storybook

// Dummy
const Dummy = () => {
  return (
    <>
      <p className="sb_param-01 gutter_mg-md">Lorem ipsum A</p>
      <p className="sb_param-01 gutter_mg-md">Lorem ipsum B</p>
      <p className="sb_param-01 gutter_mg-md">Lorem ipsum C</p>
    </>
  )
}

const Story = (args) => {
  return (
    <div>
      <Flex {...args} style={{ minHeight: '50vh', background: '#eee' }}>
        <Dummy />
      </Flex>
    </div>
  )
}

export const FlexExamples = Story.bind({})
FlexExamples.args = {}
