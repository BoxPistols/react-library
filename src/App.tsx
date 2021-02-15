import React from 'react'
import { Box } from 'components/Box/Box'
import { Grid } from 'components/Grid/Grid'
import { GridRuler } from 'components/GridRuler/GridRuler'

function App() {
  return (
    <div className="App pos_rel" style={{ margin: '32px' }}>
      <h1 className="head_1">UI Components</h1>
      {/* <GridRuler spacing={'md'}></GridRuler> */}
      <Grid container spacing="md">
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Box>Box 1</Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Box>Box 2</Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Box>Box 3</Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Box>Box 4</Box>
        </Grid>
      </Grid>

      {/* <div className="pos_rel" style={{ marginTop: '0px' }}>
        <GridRuler spacing={'xl'}></GridRuler>
        <Grid container spacing="xl">
          <Grid item cols_24={6}>
            null
          </Grid>
          <Grid item cols_24={12}>
            <Box>Box 3</Box>
          </Grid>
          <Grid item cols_24={6}>
            <Box>Box 4</Box>
          </Grid>
          <Grid item cols_24={10}>
            <Box>Box 4</Box>
          </Grid>
        </Grid>
      </div> */}
    </div>
  )
}

export default App
