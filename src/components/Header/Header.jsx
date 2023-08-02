import { Container, Nav, Navbar } from 'react-bootstrap'

const Header = () => {
  return (
    <div>
      <Navbar bg='dark' data-bs-theme='dark'>
        <Container>
        <Navbar.Brand href='#home'>Eraasoft</Navbar.Brand>
          <Nav className='ml-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#features'>Shop</Nav.Link>
            <Nav.Link href='#pricing'>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
