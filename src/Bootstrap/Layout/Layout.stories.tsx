import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Container, Row, Media } from 'react-bootstrap'
// import { Layout } from './Layout'
import './Layout.scss'

export default {
  title: 'Bootstrap/Media',
  component: Media,
} as Meta

export const Basic: Story = (args) => (
  <div style={{ position: 'relative' }}>
    {/* <Container>
      <Row>
        <Col>1 of 2</Col>
        <Col>2 of 2</Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container> */}

    <Container className="mt24">
      <Row>
        <Media>
          <img
            width={84}
            height={84}
            className="mr-3"
            src="http://placehold.jp/32/b2baaf/eee/128x128.jpg?text=A"
            alt="Generic placeholder"
          />
          <Media.Body>
            <h5>Media Heading</h5>
            <p>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras
              purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
              fringilla. Donec lacinia congue felis in faucibus.
            </p>
          </Media.Body>
        </Media>
      </Row>
    </Container>
  </div>
)
