import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Eraasoft</Navbar.Brand>
          <Nav className="ml-auto">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/products">
              products
            </NavLink>
            <NavLink className="nav-link" to="/register">
              Sign Up
            </NavLink>
            {/* <NavLink to="">Shop</NavLink> */}
            {/* <NavLink to="">Cart</NavLink> */}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
