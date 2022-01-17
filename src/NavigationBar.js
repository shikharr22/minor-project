import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Container } from 'react-bootstrap'
import {Nav} from 'react-bootstrap'
import './App.css'

export default function NavigationBar() {
    return (
        <>
  <div className="nav">
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <div style="display:flex;flex-direction:row;">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      </div>
    </Nav>
    </Container>
  </Navbar>
  </div>
</>
    )
}
