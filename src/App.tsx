import React from 'react'
// import { Box } from 'components/Box/Box'
// import { Grid } from 'components/Grid/Grid'
// import { GridRuler } from 'components/GridRuler/GridRuler'
import { GridMock } from 'components/Grid/GridMock'

// import { Button } from 'react-bootstrap'
{
  /* <Button variant='primary' onClick={() => alert('hello')}>ボタン</Button> */
}

function App() {
  return (
    <div className="App pos_rel" style={{ margin: '32px', minHeight: '100%' }}>
      <GridMock />
    </div>
  )
}

export default App
