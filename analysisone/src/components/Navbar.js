import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/AnalysisOneLogo.jpg';
import { Home, ChartColumnBig, Timer } from 'lucide-react';
import { useState, useEffect } from 'react';

//<Navbar.Brand href="#home">Navbar</Navbar.Brand>
function ColorSchemesExample() {

    const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar expand='lg' className="flex justify-between p-4 border-bottom border-white bigNav tomorrow-light" style={{ position: "sticky", top: 0, zIndex: 1000, padding: isScrolled ? "8px 16px" : "16px 32px", height: isScrolled ? "100px" : "150px", boxShadow: !isScrolled ? "0px 0px 0px black" : "5px 5px 5px #00000055", transition: "all 0.2s ease-in-out"
      }} data-bs-theme="dark">
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