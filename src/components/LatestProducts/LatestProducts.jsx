import { useEffect, useState } from "react";

import { Container, Table } from "react-bootstrap";
import ProductCard from "./ProductItem/ProductItem";
const LatestProducts = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchProduct = () => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setUsers(data);
        });
    };

    fetchProduct();
  }, []);

  return (
    <div>
      <Container className="mt-5 text-center">
      <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>id</th>
          <th> Name</th>
          <th>email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
          {users.map((user) => (
            <ProductCard key={user.id} user={user} />
          ))}
                </tbody>
    </Table>
      </Container>
    </div>
  );
};

export default LatestProducts;
