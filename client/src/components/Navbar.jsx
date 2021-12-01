import '../styles/Navbar.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import homeNav from './img/home-navbar.png'
import userNav from './img/user-navbar.png'
import librosNav from './img/libros-navbar.png'
import bibliotecasNav from './img/bibliotecas-navbar.png'
import { NavLink } from 'react-router-dom'

const BarraNavegacion = ()=>{
    return(
        <div>

<Navbar className="container--navbar" /* bg="dark" variant="dark" */ fixed="top">
    <Container className="container--navbar">
    <NavLink to="/"><img className="home--navbar" src={homeNav} alt="home" /></NavLink>
    <Nav className="me-auto">
      <NavLink to="/Libros"><img className="libros--navbar" src={librosNav} alt="libros" /></NavLink>
      <NavLink to="/Bibliotecas"><img className="bibliotecas--navbar" src={bibliotecasNav} alt="bibliotecas" /></NavLink>
      <NavLink className="text-main"  to="/Registro">Registro</NavLink>
      <NavLink className="text-main" to="/Login">Inicio de Sesión</NavLink>
      <NavLink to="/MiCuenta"><img className="user--navbar" src={userNav} alt="miCuenta" /></NavLink>
    </Nav>
    </Container>
  </Navbar>

        </div>
    );
}

export default BarraNavegacion;