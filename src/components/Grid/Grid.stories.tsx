import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Box } from '../Box/Box'
import { Grid } from '../Grid/Grid'
import { GridRuler, GRIDRULER_24 } from '../GridRuler/GridRuler'
import '../../css/utility.scss'

export default {
  title: 'Layout/Grid',
  component: Grid,
} as Meta

export const Basic: Story = (args) => (
  <div style={{ position: 'relative' }}>
    <h1 className="head_1">Grid Basic</h1>
    <Grid container spacing="sm" alignItems="center" style={{ height: '100%' }} {...args}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box>Box 1</Box>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box>Box 2</Box>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box>Box 3</Box>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box>Box 4</Box>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box>Box 5</Box>
      </Grid>
    </Grid>
  </div>
)

export const WithRuler: Story = (args) => (
  <div style={{ position: 'relative' }}>
    <GridRuler spacing="sm"></GridRuler>

    <Grid container spacing="sm" alignItems="center" style={{ height: '100%' }} {...args}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box>Box 1</Box>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box>Box 2</Box>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box>Box 3</Box>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box>Box 4</Box>
      </Grid>
    </Grid>
  </div>
)

export const Interactive: Story = (args) => (
  <div style={{ position: 'relative', height: '100vh' }}>
    <Grid container spacing="sm" alignItems="center" style={{ height: '100%' }} {...args}>
      <Grid item xs={1}>
        <Box>Box 1</Box>
      </Grid>

      <Grid item xs={1}>
        <Box>Box 2</Box>
      </Grid>

      <Grid item xs={1}>
        <Box>Box 3</Box>
      </Grid>

      <Grid item xs={1}>
        <Box>Box 4</Box>
      </Grid>
    </Grid>
  </div>
)
export const Grid_24: Story = (args) => (
  <div style={{ position: 'relative', height: '100vh' }}>
    {/* <GRIDRULER_24 spacing={'xxs'}></GRIDRULER_24> */}
    <Grid container spacing="xxs" {...args} >
      <Grid item xs_24={24} sm_24={4} md_24={2} lg_24={1}>
        <Box>1</Box>
      </Grid>
      <Grid item xs_24={24} sm_24={4} md_24={2} lg_24={1}>
        <Box>2</Box>
      </Grid>
      <Grid item xs_24={24} sm_24={4} md_24={2} lg_24={1}>
        <Box>3</Box>
      </Grid>
      <Grid item xs_24={24} sm_24={4} md_24={2} lg_24={1}>
        <Box>4</Box>
      </Grid>
      <Grid item xs_24={24} sm_24={4} md_24={2} lg_24={1}>
        <Box>5</Box>
      </Grid>
      <Grid item xs_24={24} sm_24={4} md_24={2} lg_24={1}>
        <Box>6</Box>
      </Grid>
      <Grid item xs_24={24} sm_24={4} md_24={2} lg_24={1}>
        <Box>7</Box>
      </Grid>
      <Grid item xs_24={24} sm_24={4} md_24={2} lg_24={1}>
        <Box>8</Box>
      </Grid>
      <Grid item xs_24={24} sm_24={4} md_24={2} lg_24={1}>
        <Box>9</Box>
      </Grid>
      <Grid item xs_24={24} sm_24={4} md_24={2} lg_24={1}>
        <Box>10</Box>
      </Grid>
      <Grid item xs_24={24} sm_24={4} md_24={2} lg_24={1}>
        <Box>11</Box>
      </Grid>
      <Grid item xs_24={24} sm_24={4} md_24={2} lg_24={1}>
        <Box>12</Box>
      </Grid>
      <Grid item xs_24={24} sm_24={4} md_24={2} lg_24={1}>
        <Box>13</Box>
      </Grid>
      <Grid item xs_24={24} sm_24={4} md_24={2} lg_24={1}>
        <Box>14</Box>
      </Grid>
      <Grid item xs_24={24} sm_24={4} md_24={2} lg_24={1}>
        <Box>15</Box>
      </Grid>
      <Grid item xs_24={24} sm_24={4} md_24={2} lg_24={1}>
        <Box>16</Box>
      </Grid>
      <Grid item xs_24={24} sm_24={4} md_24={2} lg_24={1}>
        <Box>17</Box>
      </Grid>
      <Grid item xs_24={24} sm_24={4} md_24={2} lg_24={1}>
        <Box>18</Box>
      </Grid>
      <Grid item xs_24={24} sm_24={4} md_24={2} lg_24={1}>
        <Box>19</Box>
      </Grid>
      <Grid item xs_24={24} sm_24={4} md_24={2} lg_24={1}>
        <Box>20</Box>
      </Grid>
      <Grid item xs_24={24} sm_24={4} md_24={2} lg_24={1}>
        <Box>21</Box>
      </Grid>
      <Grid item xs_24={24} sm_24={4} md_24={2} lg_24={1}>
        <Box>22</Box>
      </Grid>
      <Grid item xs_24={24} sm_24={4} md_24={2} lg_24={1}>
        <Box>23</Box>
      </Grid>
      <Grid item xs_24={24} sm_24={4} md_24={2} lg_24={1}>
        <Box>24</Box>
      </Grid>
    </Grid>
  </div>
)
// eith Grid
export const Grid_24_Ruler: Story = (args) => (
  <div style={{ position: 'relative', height: '100vh' }}>
    <GRIDRULER_24 spacing={'xxs'}></GRIDRULER_24>
    <Grid container spacing="xxs" {...args} >
      <Grid item xs_24={24} sm_24={4} md_24={2} lg_24={1}>
        <Box>1</Box>
      </Grid>
      <Grid item xs_24={24} sm_24={4} md_24={2} lg_24={1}>
        <Box>2</Box>
      </Grid>
      <Grid item xs_24={24} sm_24={4} md_24={2} lg_24={1}>
        <Box>3</Box>
      </Grid>
      <Grid item xs_24={24} sm_24={4} md_24={2} lg_24={1}>
        <Box>4</Box>
      </Grid>
      <Grid item xs_24={24} sm_24={4} md_24={2} lg_24={1}>
        <Box>5</Box>
      </Grid>
      <Grid item xs_24={24} sm_24={4} md_24={2} lg_24={1}>
        <Box>6</Box>
      </Grid>
      <Grid item xs_24={24} sm_24={4} md_24={2} lg_24={1}>
        <Box>7</Box>
      </Grid>
      <Grid item xs_24={24} sm_24={4} md_24={2} lg_24={1}>
        <Box>8</Box>
      </Grid>
      <Grid item xs_24={24} sm_24={4} md_24={2} lg_24={1}>
        <Box>9</Box>
      </Grid>
      <Grid item xs_24={24} sm_24={4} md_24={2} lg_24={1}>
        <Box>10</Box>
      </Grid>
      <Grid item xs_24={24} sm_24={4} md_24={2} lg_24={1}>
        <Box>11</Box>
      </Grid>
      <Grid item xs_24={24} sm_24={4} md_24={2} lg_24={1}>
        <Box>12</Box>
      </Grid>
      <Grid item xs_24={24} sm_24={4} md_24={2} lg_24={1}>
        <Box>13</Box>
      </Grid>
      <Grid item xs_24={24} sm_24={4} md_24={2} lg_24={1}>
        <Box>14</Box>
      </Grid>
      <Grid item xs_24={24} sm_24={4} md_24={2} lg_24={1}>
        <Box>15</Box>
      </Grid>
      <Grid item xs_24={24} sm_24={4} md_24={2} lg_24={1}>
        <Box>16</Box>
      </Grid>
      <Grid item xs_24={24} sm_24={4} md_24={2} lg_24={1}>
        <Box>17</Box>
      </Grid>
      <Grid item xs_24={24} sm_24={4} md_24={2} lg_24={1}>
        <Box>18</Box>
      </Grid>
      <Grid item xs_24={24} sm_24={4} md_24={2} lg_24={1}>
        <Box>19</Box>
      </Grid>
      <Grid item xs_24={24} sm_24={4} md_24={2} lg_24={1}>
        <Box>20</Box>
      </Grid>
      <Grid item xs_24={24} sm_24={4} md_24={2} lg_24={1}>
        <Box>21</Box>
      </Grid>
      <Grid item xs_24={24} sm_24={4} md_24={2} lg_24={1}>
        <Box>22</Box>
      </Grid>
      <Grid item xs_24={24} sm_24={4} md_24={2} lg_24={1}>
        <Box>23</Box>
      </Grid>
      <Grid item xs_24={24} sm_24={4} md_24={2} lg_24={1}>
        <Box>24</Box>
      </Grid>
    </Grid>
  </div>
)
