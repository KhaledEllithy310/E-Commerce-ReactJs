import { Container, Row } from "react-bootstrap";
import ProductCard from "./ProductItem/ProductItem";
import { useFetch } from "./../../CustomHook/useFetch/useFetch";

const LatestProducts = () => {
  const url = "https://fakestoreapi.com/products";
  const [isError, isLoading, products] = useFetch(url);

  if (isError) {
    return <h1>Error</h1>;
  }

  return (
    <div>
      <Container className="mt-5 text-center">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <Row>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default LatestProducts;
