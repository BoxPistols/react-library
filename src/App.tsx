import React from 'react'
import Box from 'components/Box/Box'
import Grid from 'components/Grid/Grid'

function App() {
  return (
    <div className="App" style={{ padding: '24px' }}>
      <Grid container spacing="xs">
        <Grid item cols={8}>
          <Box>Box 1</Box>
        </Grid>
        <Grid item cols={4}>
          <Box>Box 2</Box>
        </Grid>
      </Grid>
      <div  style={{ marginTop: '12px' }}>
      <Grid container spacing="sm">
        <Grid item cols_24={4}>
          <Box>Box 3</Box>
        </Grid>
        <Grid item cols_24={14}>
          <Box>Box 4</Box>
        </Grid>
        <Grid item cols_24={6}>
          <Box>Box 4</Box>
        </Grid>
      </Grid>
    </div>
    </div>
  )
}

export default App
