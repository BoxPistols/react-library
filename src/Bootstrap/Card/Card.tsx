import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
{
  /* <Button variant='primary' onClick={() => alert('hello')}>ボタン</Button> */
}

export const Layout = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>1 of 2</Col>
          <Col>2 of 2</Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    </div>
  )
}
