import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Grid } from '../../Layouts/Grid/Grid'
import { Button, Card } from 'react-bootstrap'
import './Card.scss'

export default {
  title: 'Bootstrap/Card',
  component: Card,
} as Meta

export const Basic: Story = (args) => (
  <div className="fx">
    <Grid container spacing="sm" alignItems="center" justifyContent="center" {...args}>
      <Grid item xs={4} sm={2}>
        <Card border="primary" style={{ width: '18rem' }}>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Primary Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Grid>

      <Grid item xs={4} sm={2}>
        <Card border="secondary" style={{ width: '18rem' }}>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Secondary Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Grid>

      <Grid item xs={4} sm={2}>
        <Card border="success" style={{ width: '18rem' }}>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Success Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Grid>

      <Grid item xs={4} sm={2}>
        <Card border="danger" style={{ width: '18rem' }}>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Danger Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Grid>

      <Grid item xs={4} sm={2}>
        <Card border="warning" style={{ width: '18rem' }}>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Warning Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Grid>

      <Grid item xs={4} sm={2}>
        <Card border="info" style={{ width: '18rem' }}>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Info Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Grid>

      <Grid item xs={4} sm={2}>
        <Card border="dark" style={{ width: '18rem' }}>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Dark Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Grid>

      <Grid item xs={4} sm={2}>
        <Card border="light" style={{ width: '18rem' }}>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Light Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Grid>
    </Grid>
  </div>
)

export const Main_Style: Story = (args) => (
  <div className="fx">
    <Grid container spacing="sm" alignItems="center" justifyContent="center" {...args}>
      <Grid item xs={4} sm={2}>
        <Card style={{ width: '75vw' }}>
          <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
            <div className="fx fx_jc-e w100">
              <Button variant="outline-primary" style={{ width: '160px' }}>Success</Button>
              <Button variant="outline-danger"  style={{ width: '160px' }}>Cancel</Button>
            </div>
            <div className="fx fx_jc-e w100">
              <div style={{ color: 'gray' }}>Update: 2021/01/31 Name: James</div>
            </div>
          </Card.Body>
        </Card>
      </Grid>{' '}
    </Grid>
  </div>
)
