import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/A1LOGO.jpg';

//<Navbar.Brand href="#home">Navbar</Navbar.Brand>
function ColorSchemesExample() {
  return (
    <Navbar expand='lg' className="flex justify-between p-4 border-bottom border-white bigNav tomorrow-light" data-bs-theme="dark">
        <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
                <img src={logo} id='navLogo'></img>
                <Container id='innerNav' className='p-3'>
                    <Nav className="m-auto gap-5 flex justify-content-center">
                        <Nav.Link className='px-5' href="/Home">Home</Nav.Link>
                        <Nav.Link className='px-5' href="/Comparison">Comparison</Nav.Link>
                        <Nav.Link className='px-5 flex' href="/Timeline">Timeline</Nav.Link>
                    </Nav>
                </Container>
                <h4 id='nav-abt-api'>About the API</h4>
            </Navbar.Collapse>
        </Container>
        
    </Navbar>
  );
}

export default ColorSchemesExample;