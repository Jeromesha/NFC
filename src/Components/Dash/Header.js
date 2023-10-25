import React from 'react'
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default function Header(Property) {
  return (
    <Navbar expand="lg"  className='Header_Dash'>
    <Container fluid className='head_container'>
      <div>
        <Navbar.Brand href="#home" >
          {Property.SectionName}
        </Navbar.Brand>
      </div>
      <Row>
        <Col>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <NavLink href="#section4" className="head_navLink">Profile</NavLink>
              {/* <NavLink xt" href="#section5">Profile</NavLin  k> */}
            </Nav>
          </Navbar.Collapse>
        </Col>
      </Row>
    </Container>
  </Navbar>
  )
}
