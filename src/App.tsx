import React from 'react'
import Box from 'components/Box/Box'
import Grid from 'components/Box/Grid/Grid'

function App() {
  return (
    <div className="App">
      <div style={{ margin: '24px' }}>
        <Grid container>
          <Grid item cols={8}>
            <Box>Box 1</Box>
          </Grid>
          <Grid item cols={4}>
            <Box>Box 2</Box>
          </Grid>
        </Grid>
      </div>
      <div style={{ margin: '24px' }}>
        <Grid container>
          <Grid item cols_24={3}>
            <Box>Box 3</Box>
          </Grid>
          <Grid item cols_24={21}>
            <Box>Box 4</Box>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default App
