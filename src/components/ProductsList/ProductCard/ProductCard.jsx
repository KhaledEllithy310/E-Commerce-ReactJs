/* eslint-disable react/prop-types */

import { Card, Button, Col } from 'react-bootstrap'
import './ProductCard.css'
const ProductCard = props => {
  let { product } = props
  return (
      <Col lg={3} md={4} sm={6} className='my-3'>
        <Card>
          <Card.Img variant='top' src={product.image} />
          <Card.Body>
            <Card.Title>{product.title.slice(0,20)}</Card.Title>
            <Card.Text>
            ${product.price}
            </Card.Text>
            <Button variant='primary'>Add To Cart</Button>
          </Card.Body>
        </Card>
      </Col>
  )
}

export default ProductCard
