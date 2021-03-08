import React from 'react'
// import { Box } from 'components/Box/Box'
// import { Grid } from 'components/Grid/Grid'
// import { GridRuler } from 'components/GridRuler/GridRuler'
// import { Button } from 'react-bootstrap'
import { GridMock } from 'Layouts/Grid/GridMock'
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
