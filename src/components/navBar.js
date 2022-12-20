import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';


function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark" className='d-flex'>
        <Container>
          <Navbar.Brand href="#home">NavBar</Navbar.Brand>

          {/* //Starts form */}
          {/* <Form>
          <Row className="align-items-start">
          <Col sm={7} className="my-1">
          <Form.Control placeholder="Search" />
        </Col>
        </Row>
        </Form> */}

        <InputGroup className="align-items-start">
        <Form.Control
          placeholder="Search"
          aria-label="Search"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" className="d-none d-sm-none d-md-none d-lg-block btn btn-search" id="button-addon2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" class="crayons-icon c-btn__icon" focusable="false"><path d="m18.031 16.617 4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"></path></svg>
        </Button>
      </InputGroup>

          <Nav className="me-3">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
    </>
  );
}

export default ColorSchemesExample;