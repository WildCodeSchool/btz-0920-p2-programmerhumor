import { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedditAlien } from '@fortawesome/free-brands-svg-icons';

const Header2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
          <FontAwesomeIcon icon={faRedditAlien} size="5x" color="#fe4602" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <button type="button" className="btn btn-outline-secondary m-2">
                Sign up
              </button>
            </NavItem>
            <NavItem>
              <button type="button" className="btn btn-outline-secondary m-2">
                Login
              </button>
            </NavItem>
            <UncontrolledDropdown
              direction="right"
              className="m-2"
              nav
              inNavbar
            >
              <DropdownToggle nav caret />
              <DropdownMenu right>
                <DropdownItem>Log out</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Night mode</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header2;
