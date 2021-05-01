import React, { useState } from 'react';
import { Link } from 'react-router-dom' ;

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
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Mindful Mentors</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem><Link className="nav-link" to="/" activeClassName="active">Home</Link></NavItem>
            <NavItem><Link className="nav-link" to="/learn" activeClassName="active">Learn</Link></NavItem>
            <NavItem><Link className="nav-link" to="/activities" activeClassName="active">Activities </Link></NavItem>
            <NavItem><Link className="nav-link" to="/resources" activeClassName="active">Resourcces</Link></NavItem>
            <NavItem><Link className="nav-link" to="#" activeClassName="active">Sign-In</Link></NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;