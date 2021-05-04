import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom' ;
import { Container } from 'reactstrap';
import  MindfulMentors  from './Images/MindfulMentors.jpg';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
        <Navbar color="light" light expand="md">
          <Container>
              <NavbarBrand href="/"><img src={MindfulMentors} alt="MindfulMentors"/></NavbarBrand>
              <NavbarToggler onClick={toggle} />
              <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                  <NavItem><Link className="nav-link" to="/" activeClassName="active">Home</Link></NavItem>
                  <NavItem><Link className="nav-link" to="/learn" activeClassName="active">Learn</Link></NavItem>
                  <NavItem><Link className="nav-link" to="/activities" activeClassName="active">Activities </Link></NavItem>
                  <NavItem><Link className="nav-link" to="/resources" activeClassName="active">Resources</Link></NavItem>
                  <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                          Account
                      </DropdownToggle>
                      <DropdownMenu right>
                          <DropdownItem>
                              <Link className="nav-link" to="/login" activeClassName="active">Log In</Link>
                          </DropdownItem>
                          <DropdownItem>
                              <Link className="nav-link" to="/register" activeClassName="active">Register</Link>
                          </DropdownItem>
                      </DropdownMenu>
                  </UncontrolledDropdown>
              
              </Nav>
              </Collapse>
          </Container>
        </Navbar>
      
    );
  }
  
  export default Header;