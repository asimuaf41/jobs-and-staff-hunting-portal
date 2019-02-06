import React, { Component } from 'react';
import { Navbar,Nav,NavDropdown} from 'react-bootstrap';
import Login from './login';
import Signup from './signup';
class Header extends Component{
    render(){
        return(
            <div className="header">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" > 
        <Navbar.Brand href="#home">Job and Staff Hunting</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">CV Templates</Nav.Link>
            <Nav.Link href="#pricing">Features</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
            <Nav.Link href="#ff">Jobs</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Login />
            
            <Signup />
            <Nav.Link eventKey={2} href="#memes">
              Employer
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>;
      
      <img src={require('../images/kk.png')} className="content-image"/>
            {'  '}
            </div>
        );
    }
}
export default Header;