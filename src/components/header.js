import React, { Component } from 'react';
import { Navbar,Nav,NavDropdown,Badge} from 'react-bootstrap';
import {BrowserRouter as Router,Route, Link,Switch} from 'react-router-dom'; 
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
            <Link to="/" className="header-link">Home</Link>
           
            <Link to="/about" className="header-link">about</Link>
            <Link to="/jobs" className="header-link">jobs</Link>
           
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
      
     
            </div>
        );
    }
}
export default Header;