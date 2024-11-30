import React from 'react'
import './styles/navbar.css';
import { Nav, Navbar} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";


const NavBar = () => {

    const setActive = ({isActive})=>(isActive ? "active" : undefined)

  return (
    <Navbar className='bg-light d-flex align-items-center justify-content-between' expand='lg'>
        <Navbar.Brand className='mx-5' href='/'>
            <p>Produ</p>
        </Navbar.Brand>
        <img className='logo me-3' src='/src/assets/logo.jpg' alt="HomeCloset" />
        <div className='d-flex flex-grow-1 justify-content-center'>
            
            <div className='Titulo'><h1>HOME CLOSET</h1></div>
        </div>
        <Navbar.Toggle aria-controls='basic-navbar-var'/>
        <Navbar.Collapse id='basic-navbar-var' className='justify-content-end'>
            <Nav>
                <Nav.Link as={NavLink} className={`${setActive} d-flex flex-column align-items-center text-center mx-3`} to={"/"} >
                    <FaSearch />
                    Search
                </Nav.Link>
                <Nav.Link as={NavLink} className={`${setActive} d-flex flex-column align-items-center text-center mx-3`} to={"/"} >
                    <FaUser />
                    Login
                </Nav.Link>
                <Nav.Link as={NavLink} className={`${setActive} d-flex flex-column align-items-center text-center mx-3`} to={"/"} >
                    <FaShoppingCart />
                    Carrito
                </Nav.Link>
            </Nav>
        </Navbar.Collapse>


    </Navbar>
  )
}

export default NavBar