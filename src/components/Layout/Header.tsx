import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#">Acme Corporation</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
