import React from 'react'
import Nav from 'react-bootstrap/Nav'
import '../App.css'
const NavBar = () => {
   return (
      <div>
        <Nav>
            <Nav.Item>
              <Nav.Link  href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>Productos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>Contacto</Nav.Link>
            </Nav.Item>
      </Nav>
    </div>
    )
}

export default NavBar
