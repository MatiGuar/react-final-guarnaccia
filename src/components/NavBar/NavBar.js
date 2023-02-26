import './NavBar.css'
import { Navbar } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';



const NavBar = () => {
    return (
 
      <Navbar  bg="light bg-propio" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Ser Biosfera</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='nav-bar-style'>
            <Nav>
              <NavLink
               className={({ isActive })=>(isActive ? 'active' : 'inactive')}
                to="/">
                  Inicio
                </NavLink>
              <NavLink 
              className={({ isActive })=>(isActive ? 'active' : 'inactive')}
               to="/category/cultivo">
                Cultivo
               </NavLink>
              <NavLink className={({ isActive })=>(isActive ? 'active' : 'inactive')} 
              to="/category/producción">
                Producción
                </NavLink>
              <NavLink className={({ isActive })=> (isActive ? 'active' : 'inactive')} 
              to="/category/uso personal">
                Uso personal
                </NavLink>
             
              <Link to='/cart'>
                  <CartWidget />  
              </Link>    
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      
      </Navbar>
 
    );
  }
  
  export default NavBar