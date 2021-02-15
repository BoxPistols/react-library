import React from 'react'
import { Box } from 'components/Box/Box'
import { Grid } from 'components/Grid/Grid'
import { GridRuler } from 'components/GridRuler/GridRuler'

function App() {
  return (
    <div className="App pos_rel" style={{ margin: '32px' }}>
      <h1 className="head_1">UI Components</h1>
      <GridRuler spacing={'md'}></GridRuler>
      <Grid container spacing="md">
        <Grid item xs={12} sm={4} md={3} lg={2}>
          <Box>Box 1</Box>
        </Grid>
        <Grid item xs={12} sm={4} md={3} lg={2}>
          <Box>Box 2</Box>
        </Grid>
        <Grid item xs={12} sm={4} md={3} lg={2}>
          <Box>Box 3</Box>
        </Grid>
        <Grid item xs={12} sm={4} md={3} lg={2}>
          <Box>Box 4</Box>
        </Grid>
        <Grid item xs={12} sm={4} md={3} lg={2}>
          <Box>Box 5</Box>
        </Grid>
        <Grid item xs={12} sm={4} md={3} lg={2}>
          <Box>Box 6</Box>
        </Grid>
      </Grid>
      {/* 24 colmun */}
      <h1 className="head_1">24 Column UI Components</h1>
      {/* <GridRuler spacing={'md'}></GridRuler> */}
      <Grid container spacing="md">
        <Grid item xs_24={24} sm_24={12} md_24={6} lg_24={3} xl_24={2}>
          <Box>Box 1</Box>
        </Grid>
        <Grid item xs_24={24} sm_24={12} md_24={6} lg_24={3} xl_24={2}>
          <Box>Box 2</Box>
        </Grid>
        <Grid item xs_24={24} sm_24={12} md_24={6} lg_24={3} xl_24={2}>
          <Box>Box 3</Box>
        </Grid>
        <Grid item xs_24={24} sm_24={12} md_24={6} lg_24={3} xl_24={2}>
          <Box>Box 4</Box>
        </Grid>
        <Grid item xs_24={24} sm_24={12} md_24={6} lg_24={3} xl_24={2}>
          <Box>Box 5</Box>
        </Grid>
        <Grid item xs_24={24} sm_24={12} md_24={6} lg_24={3} xl_24={2}>
          <Box>Box 6</Box>
        </Grid>
        <Grid item xs_24={24} sm_24={12} md_24={6} lg_24={3} xl_24={2}>
          <Box>Box 7</Box>
        </Grid>
        <Grid item xs_24={24} sm_24={12} md_24={6} lg_24={3} xl_24={2}>
          <Box>Box 8</Box>
        </Grid>
        <Grid item xs_24={24} sm_24={12} md_24={6} lg_24={3} xl_24={2}>
          <Box>Box 9</Box>
        </Grid>
        <Grid item xs_24={24} sm_24={12} md_24={6} lg_24={3} xl_24={2}>
          <Box>Box 10</Box>
        </Grid>
        <Grid item xs_24={24} sm_24={12} md_24={6} lg_24={3} xl_24={2}>
          <Box>Box 11</Box>
        </Grid>
        <Grid item xs_24={24} sm_24={12} md_24={6} lg_24={3} xl_24={2}>
          <Box>Box 12</Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default App
