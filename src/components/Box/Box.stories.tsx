import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Box } from '../Box/Box'
import { Grid } from '../Grid/Grid'
import '../../css/utility.scss'

export default {
  title: 'Box',
  component: Box,
} as Meta

export const Basic: Story = (args) => (
  <div>
    <h1 className="head_1">Grid Basic</h1>
    <Grid container spacing="sm" justifyContent="center" style={{ height: '100%' }} {...args}>
      <Grid item md={6}>
        <Box>Box</Box>
      </Grid>
    </Grid>
  </div>
)
