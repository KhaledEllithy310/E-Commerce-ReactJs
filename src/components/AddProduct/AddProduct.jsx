import { Col, Container, Row } from "react-bootstrap";
import "./AddProduct.css";
import { useState } from "react";
const AddProduct = () => {
  const [data, setData] = useState({});
  const HandlerInput = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const HandlerSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };
  
  return (
    <Container>
      <Row>
        <Col lg={6} className="mx-auto">
          <h2 className="p-3 text-center">Add Product</h2>
          <form onSubmit={HandlerSubmit}>
            <div className="form-group form__container">
              <label htmlFor="">Product title</label>
              <input
                type="text"
                name="title"
                className="form-control"
                onChange={HandlerInput}
              />
            </div>
            <div className="form-group form__container">
              <label htmlFor="">Product Price</label>
              <input
                type="number"
                name="Price"
                className="form-control"
                onChange={HandlerInput}
              />
            </div>
            <div className="form-group form__container">
              <label htmlFor="">Product category</label>
              <input
                type="text"
                name="category"
                className="form-control"
                onChange={HandlerInput}
              />
            </div>
            <div className="form-group form__container">
              <label htmlFor="">Product description</label>
              <textarea
                name="description"
                className="form-control"
                onChange={HandlerInput}
              ></textarea>
            </div>
            {/* <div className="form-group form__container">
              <label htmlFor="">Product image</label>
              <input
                type="file"
                name="image"
                className="form-control"
                onChange={ HandlerInput}
              />
            </div> */}
            <button className="btn btn-dark" type="submit">
              Add Product
            </button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddProduct;
