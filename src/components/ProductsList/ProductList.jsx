import { useEffect, useState } from "react"

import { Container,Row } from 'react-bootstrap'
// import { products } from '../../models/BookList'
import ProductCard from './ProductCard/ProductCard'
 const ProductList = () => {

  const [products, setProducts] = useState([])

  const fetchProduct = () => {
    fetch("https://fakestoreapi.com/products")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setProducts(data)
      })
    }

    useEffect(() => {
      fetchProduct()
    }, [])

  return (
    <div>
      <Container className='mt-5'>
        <h3>Latest Products</h3>
        <Row>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}

{/* {products.map(product => {
  return <ProductCard key={product.id} product={product} />;
})} */}
        </Row>
      </Container>
    </div>
  )
}

export default ProductList
