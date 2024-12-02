import React from 'react'
import './styles/navbar.css';
import { Nav, Navbar, Dropdown} from 'react-bootstrap';

import {NavLink} from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { RiUserAddFill } from "react-icons/ri";
import { IoHome } from "react-icons/io5";
import {FaBars } from "react-icons/fa";


const NavBar = () => {

    const setActive = ({isActive})=>(isActive ? "active" : undefined)
 
 
  return (
    <Navbar className="bg-light d-flex align-items-center justify-content-between fixed-top" expand="lg">
      {/* Botón hamburguesa con menú desplegable */}
      <Dropdown>
        <Dropdown.Toggle
          variant="none"
          className="hamburger-btn"
          id="dropdown-menu"
       
        >
          <FaBars size={24} style={{ color: "grey" }} />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item as={NavLink} to="/ProductGallery">
            Sábanas
          </Dropdown.Item>
          <Dropdown.Item as={NavLink} to="/ProductGallery">
            Cortinas
          </Dropdown.Item>
          <Dropdown.Item as={NavLink} to="/ProductGallery">
            Almohadas
          </Dropdown.Item>
          <Dropdown.Item as={NavLink} to="/ProductGallery">
            Toallas
          </Dropdown.Item>
          <Dropdown.Item as={NavLink} to="/ProductGallery">
            Mantas
          </Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
        <img className='logo me-3' src='/src/assets/logo.jpg' alt="HomeCloset" />
        <div className='d-flex flex-grow-1 justify-content-center'>
             <div className='Titulo'><h1>HOME CLOSET</h1></div>
        </div>
        <Navbar.Toggle aria-controls='basic-navbar-var'/>
        <Navbar.Collapse id='basic-navbar-var' className='justify-content-end'>
            <Nav>
                <Nav.Link as={NavLink} className={`${setActive} d-flex flex-column align-items-center text-center mx-3`} to={"/"} >
                    <IoHome />
                    Home
                </Nav.Link>
                 <Nav.Link as={NavLink} className={`${setActive} d-flex flex-column align-items-center text-center mx-3`} to={"/Registro"} >
                    <RiUserAddFill />
                    Registrate  
                </Nav.Link>
                <Nav.Link as={NavLink} className={`${setActive} d-flex flex-column align-items-center text-center mx-3`} to={"/asdasd"} >
                    <FaSearch />
                    Busqueda
                </Nav.Link>
                <Nav.Link as={NavLink} className={`${setActive} d-flex flex-column align-items-center text-center mx-3`} to={"/ddd"} >
                    <FaUser />
                    Login
                </Nav.Link>
                <Nav.Link as={NavLink} className={`${setActive} d-flex flex-column align-items-center text-center mx-3`} to={"/ddddss"} >
                    <FaShoppingCart />
                    Carrito
                </Nav.Link>
                
            </Nav>
        </Navbar.Collapse>


    </Navbar>
  )
}

export default NavBar