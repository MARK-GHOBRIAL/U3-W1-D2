import React, { Component } from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap'
import romance from '../data/romance.json'

class AllTheBooks extends Component {
  render() {
    return (
      <Row>
        {romance.map((book) => {
          return (
            <Col key={book.asin} sm={12} md={2} className='my-3'>
              <Card>
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title>{book.Title}</Card.Title>
                  <Card.Text>{book.category}</Card.Text>
                  <Button variant="primary">Compra</Button>
                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row>
    )
  }
}

export default AllTheBooks
