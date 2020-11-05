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
import PopUpLogIn from './PopUpLogIn';

const Header2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="fixed-top border-bottom w-100">
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
          <FontAwesomeIcon
            icon={faRedditAlien}
            size="4x"
            color="#fe4602"
            className="m-4"
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>
                <PopUpSignIn />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <PopUpLogIn />
              </NavLink>
            </NavItem>
            <UncontrolledDropdown
              direction="right"
              className="m-5"
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
