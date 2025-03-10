import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//<Navbar.Brand href="#home">Navbar</Navbar.Brand>
function ColorSchemesExample() {
  return (
    <Navbar expand='md' bg="dark" className="flex justify-between p-4 border-bottom border-white" data-bs-theme="dark">
        <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
                <Container id='innerNav' className='p-3'>
                    <Nav className="m-auto gap-5 flex justify-content-center">
                        <Nav.Link className='px-5' href="#home">Home</Nav.Link>
                        <Nav.Link className='px-5' href="#features">Comparison</Nav.Link>
                        <Nav.Link className='px-5 flex' href="#pricing">Timeline</Nav.Link>
                    </Nav>
                </Container>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default ColorSchemesExample;