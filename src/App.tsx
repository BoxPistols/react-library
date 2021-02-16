import React from 'react'
import { Box } from 'components/Box/Box'
import { Grid } from 'components/Grid/Grid'
import { GridRuler, GridRuler_24 } from 'components/GridRuler/GridRuler'

function App() {
  return (
    <div className="App pos_rel" style={{ margin: '32px', minHeight: '100vh' }}>
      <h1 className="head_1">UI Components</h1>

      <GridRuler spacing={'xs'}></GridRuler>
      {/* <GridRuler_24 spacing={'xs'}></GridRuler_24> */}
      <Grid container spacing="xs" justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
        <Grid item xs={4} sm={2} md={2} lg={2}>
          <Box style={{ height: '200px' }}>Box 1</Box>
        </Grid>
        <Grid item xs={4} sm={2} md={2} lg={2}>
          <Box>Box 2</Box>
        </Grid>
        <Grid item xs={4} sm={2} md={2} lg={2}>
          <Box>Box 3</Box>
        </Grid>
      </Grid>

      {/* 24 colmun */}
      <h1 className="head_1">24 Column UI Components</h1>
      {/* <GridRuler spacing={'md'}></GridRuler> */}
      {/* <GridRuler_24 spacing={'xs'}></GridRuler_24> */}
      <Grid container spacing="xs">
        <Grid item xs_24={24} sm_24={6} md_24={3} lg_24={1}>
          <Box>1</Box>
        </Grid>
        <Grid item xs_24={24} sm_24={6} md_24={3} lg_24={1}>
          <Box>2</Box>
        </Grid>
        <Grid item xs_24={24} sm_24={6} md_24={3} lg_24={1}>
          <Box>3</Box>
        </Grid>
        <Grid item xs_24={24} sm_24={6} md_24={3} lg_24={1}>
          <Box>4</Box>
        </Grid>
        <Grid item xs_24={24} sm_24={6} md_24={3} lg_24={1}>
          <Box>5</Box>
        </Grid>
        <Grid item xs_24={24} sm_24={6} md_24={3} lg_24={1}>
          <Box>6</Box>
        </Grid>
        <Grid item xs_24={24} sm_24={6} md_24={3} lg_24={1}>
          <Box>7</Box>
        </Grid>
        <Grid item xs_24={24} sm_24={6} md_24={3} lg_24={1}>
          <Box>8</Box>
        </Grid>
        <Grid item xs_24={24} sm_24={6} md_24={3} lg_24={1}>
          <Box>9</Box>
        </Grid>
        <Grid item xs_24={24} sm_24={6} md_24={3} lg_24={1}>
          <Box>10</Box>
        </Grid>
        <Grid item xs_24={24} sm_24={6} md_24={3} lg_24={1}>
          <Box>11</Box>
        </Grid>
        <Grid item xs_24={24} sm_24={6} md_24={3} lg_24={1}>
          <Box>12</Box>
        </Grid>
        <Grid item xs_24={24} sm_24={6} md_24={3} lg_24={1}>
          <Box>13</Box>
        </Grid>
        <Grid item xs_24={24} sm_24={6} md_24={3} lg_24={1}>
          <Box>14</Box>
        </Grid>
        <Grid item xs_24={24} sm_24={6} md_24={3} lg_24={1}>
          <Box>15</Box>
        </Grid>
        <Grid item xs_24={24} sm_24={6} md_24={3} lg_24={1}>
          <Box>16</Box>
        </Grid>
        <Grid item xs_24={24} sm_24={6} md_24={3} lg_24={1}>
          <Box>17</Box>
        </Grid>
        <Grid item xs_24={24} sm_24={6} md_24={3} lg_24={1}>
          <Box>18</Box>
        </Grid>
        <Grid item xs_24={24} sm_24={6} md_24={3} lg_24={1}>
          <Box>19</Box>
        </Grid>
        <Grid item xs_24={24} sm_24={6} md_24={3} lg_24={1}>
          <Box>20</Box>
        </Grid>
        <Grid item xs_24={24} sm_24={6} md_24={3} lg_24={1}>
          <Box>21</Box>
        </Grid>
        <Grid item xs_24={24} sm_24={6} md_24={3} lg_24={1}>
          <Box>22</Box>
        </Grid>
        <Grid item xs_24={24} sm_24={6} md_24={3} lg_24={1}>
          <Box>23</Box>
        </Grid>
        <Grid item xs_24={24} sm_24={6} md_24={3} lg_24={1}>
          <Box>24</Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default App
