import React from 'react'
import { Box } from 'Layouts/Box/Box'
import { Grid } from 'Layouts/Grid/Grid'
import { GridRuler } from 'Layouts/GridRuler/GridRuler'
import '../../css/utility.scss'

export function GridMock() {
  return (
    // justifyContent="center" alignItems="center"
    <Grid container spacing="xs">
      <h1 className="head_1">UI Layouts</h1>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={12} md={2}>
            <Grid container>
              <Grid item xs={12}>
                <Box>
                  <div style={{ minHeight: '80vh' }}>
                    <h2>コンテンツ</h2>
                    <nav>nav...</nav>
                  </div>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={8}>
            <Grid container>
              <Grid item xs={12}>
                <Box>
                  <div style={{ minHeight: '80vh' }}>
                    <h2>コンテンツ</h2>
                    <main>main...</main>
                  </div>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={2}>
            <Grid container>
              <Grid item xs={12}>
                <Box>
                  <div style={{ minHeight: '80vh' }}>
                    <h2>コンテンツ</h2>
                    <aside>aside...</aside>
                  </div>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
