
import { Container, Table } from "react-bootstrap";
import ProductCard from "./ProductCard/ProductCard";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../../CustomHook/useFetch/useFetch";

const ProductList = () => {
  const url = "https://fakestoreapi.com/products";
  const navigate = useNavigate();

  function redirectAddProduct() {
    navigate("/products/add");
  }
  
  const [isError, isLoading, products] = useFetch(url);

  if (isError) {
    return <h1>Error</h1>;
  }
  
  return (
    <div>
      <Container className="mt-5 ">
        <button className="btn btn-primary my-3 " onClick={redirectAddProduct}>
          Add Product
        </button>
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
              {products.map((product) => (
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
