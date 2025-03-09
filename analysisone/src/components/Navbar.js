import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//<Navbar.Brand href="#home">Navbar</Navbar.Brand>
function ColorSchemesExample() {
  return (
    <Navbar bg="dark flex justify-between p-4" data-bs-theme="dark">
    <Container>
        <Nav className="m-auto gap-5 flex">
            <Nav.Link className='px-5' href="#home">Home</Nav.Link>
            <Nav.Link className='px-5' href="#features">Comparison</Nav.Link>
            <Nav.Link className='px-5 flex' href="#pricing">Timeline</Nav.Link>
        </Nav>
    </Container>
    </Navbar>
  );
}

export default ColorSchemesExample;