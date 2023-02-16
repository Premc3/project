import React, { useState } from 'react';
import { Link,  useNavigate } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { FaPowerOff } from 'react-icons/fa';

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const history = useNavigate();

  const handleLogout = () => {
    // Logout logic goes here
    history.push('/');
  };

  return (
    <Navbar style={{ backgroundColor: '#87CEEB' }} light expand="md">
      <NavbarBrand href='/trainer'>Learner Dashboard</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
            <DropdownToggle caret nav>
              Learners
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>
                <Link to="/single-learner">Single Learner</Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/multiple-learners">Multiple Learners</Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Nav>
        <Nav className="ml-auto" navbar>
          <NavItem style={{ marginLeft:'90%' }}>
            <NavLink onClick={handleLogout} style={{ color: 'blue' }}>
              <FaPowerOff />
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
