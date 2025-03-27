import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/AnalysisOneLogo.jpg';
import { Home, Info, ChartColumnBig, Timer } from 'lucide-react';

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
                        <Nav.Link className='px-5 d-flex align-items-center' href="/Home"> <Home size={26} style={{ marginRight: '8px' }} />Home</Nav.Link>
                        <Nav.Link className='px-5 d-flex align-items-center' href="/Comparison"> <ChartColumnBig size={26} style={{ marginRight: '8px' }} />Comparison</Nav.Link>
                        <Nav.Link className='px-5 d-flex align-items-center' href="/Timeline"> <Timer size={26} style={{ marginRight: '8px' }} />Timeline</Nav.Link>
                    </Nav>
                </Container>

            </Navbar.Collapse>
        </Container>
        
    </Navbar>
  );
}

export default ColorSchemesExample;