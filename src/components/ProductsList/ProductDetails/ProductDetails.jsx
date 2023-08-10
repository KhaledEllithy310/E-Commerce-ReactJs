import { useEffect, useState } from "react";
import { Badge, Col, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import "./ProductDetails.css";
const ProductDetails = () => {
  const [Product, setProduct] = useState({});
  const { id } = useParams();

  const Navigate = useNavigate();
  function backToProducts() {
    Navigate("/products");
  }

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, []);
  return (
    <div className="container my-5">
      <Row>
        <Col lg={5} className="text-center">
          <img className="left__side" src={Product.image} />
        </Col>
        <Col lg={7}>
          {/* <h2>{Product.id}</h2> */}
          <h2>{Product.title}</h2>
          <Badge className="price_product my-2" bg="secondary">
            ${Product.category}
          </Badge>
          <p className="description_product">{Product.description}</p>
          <p className="price_product my-2">${Product.price}</p>
        </Col>
        <button onClick={backToProducts} className="btn btn-dark mt-4">
          backToHome
        </button>
      </Row>
    </div>
  );
};

export default ProductDetails;
