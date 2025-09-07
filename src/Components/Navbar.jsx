import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="color-nav" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="Navbrand">NITESH KUMAR SHAH</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">About</Nav.Link>
            <Nav.Link as={Link} to="/publications">Publications</Nav.Link>
            <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
            <Nav.Link as={Link} to="/experience">Experience</Nav.Link>
            <Nav.Link as={Link} to="/activities">Activities</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="https://drive.google.com/file/d/1xRma3Y8B-GfU0DqElGtldT7lrxwzwB6o/view" target="_blank">
              <Button variant="outline-light" className="mx-2">Academic CV</Button>
            </Nav.Link>
            <Nav.Link>
            <Button variant="outline-light" className="mx-2" onClick={() => document.getElementById("Footer").scrollIntoView({ behavior: "smooth" })}>
              Contact 
            </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
