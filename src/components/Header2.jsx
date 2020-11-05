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
  NavLink,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedditAlien } from '@fortawesome/free-brands-svg-icons';
import PopUpSignIn from './PopUpSignIn';

const Header2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
          <FontAwesomeIcon icon={faRedditAlien} size="4x" color="#fe4602" />
        </NavbarBrand>
        <div className="col-2">
          <NavLink>
            <PopUpSignIn />
          </NavLink>
        </div>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <button type="button" className="btn btn-outline-secondary m-2">
                Log in
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
