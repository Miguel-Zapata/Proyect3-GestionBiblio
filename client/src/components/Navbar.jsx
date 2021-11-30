import '../styles/Navbar.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import homeNav from './img/home-navbar.png'
import userNav from './img/user-navbar.png'
import librosNav from './img/libros-navbar.png'
import bibliotecasNav from './img/bibliotecas-navbar.png'


const BarraNavegacion = ()=>{
    return(
        <div>

<Navbar className="container--navbar" /* bg="dark" variant="dark" */ fixed="bottom">
    <Container className="container--navbar">
    <Navbar.Brand href="/"><img className="home--navbar" src={homeNav} alt="home" /></Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/Libros"><img className="libros--navbar" src={librosNav} alt="libros" /></Nav.Link>
      <Nav.Link href="/Bibliotecas"><img className="bibliotecas--navbar" src={bibliotecasNav} alt="bibliotecas" /></Nav.Link>
      <Nav.Link className="text-main"  href="/Registro">Registro</Nav.Link>
      <Nav.Link className="text-main" href="/Login">Login</Nav.Link>
      <Nav.Link href="/MiCuenta"><img className="user--navbar" src={userNav} alt="miCuenta" /></Nav.Link>
    </Nav>
    </Container>
  </Navbar>

        </div>
    );
}

export default BarraNavegacion;