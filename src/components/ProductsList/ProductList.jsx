import { Col, Container, Row, Table } from "react-bootstrap";
import ProductCard from "./ProductCard/ProductCard";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../../CustomHook/useFetch/useFetch";
import "./ProductList.css";
import { useEffect, useState } from "react";
const ProductList = () => {
  const url = "https://fakestoreapi.com/products";
  const navigate = useNavigate();

  function redirectAddProduct() {
    navigate("/products/add");
  }
  const [currentProducts, setCurrentProducts] = useState([]);
  const [isError, isLoading, products] = useFetch(url);
  const [searchValue, setSearchValue] = useState("");

  const handlerSearch = (e) => {
    const searchInput = e.target.value.toLowerCase();
    const newProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchInput)
    );
    setCurrentProducts(newProducts);
    setSearchValue(searchInput);
  };

  useEffect(() => {
    setCurrentProducts(products);
  }, [products]);
  if (isError) {
    return <h1>Error</h1>;
  }

  return (
    <div>
      <Container className="mt-5 ">
        <h1>Product List</h1>
        <Row>
          <Col lg={6}>
            <form>
              <input
                type="search"
                className="input__search border-3 w-50"
                name="searchVal"
                onChange={handlerSearch}
                value={searchValue}
                placeholder="Search for products"
              />
            </form>
          </Col>
          <Col lg={6} className="d-flex justify-content-end">
            <button
              className="btn btn-primary my-3 "
              onClick={redirectAddProduct}
            >
              Add Product
            </button>
          </Col>
        </Row>

        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <Table striped bordered hover variant="dark" className="text-center">
            <thead>
              <tr>
                <th>id</th>
                <th>Name</th>
                <th>price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </tbody>
          </Table>
        )}
      </Container>
    </div>
  );
};

export default ProductList;
