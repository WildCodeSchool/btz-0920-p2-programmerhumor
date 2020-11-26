import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavbarText,
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

const Header = () => {
  const disconnect = () => {
    // eslint-disable-next-line no-alert
    alert(`Vous avez bien été déconnecté à la prochaine`);
  };
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="border-bottom w-100">
      <Navbar color="light" light expand="md">
        <NavbarBrand tag={Link} to="/">
          <FontAwesomeIcon icon={faRedditAlien} size="4x" color="#fe4602" />
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
              className="m-3"
              nav
              inNavbar
            >
              <DropdownToggle className="pt-3" nav caret>
                {' '}
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem onClick={disconnect}>Log out</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Night mode</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>
            <a
              href="https://www.reddit.com/r/ProgrammerHumor/"
              target="blank"
              className="text-decoration-none color-darkGrey title-font-size font-weight-bold pr-3 d-none d-md-block"
            >
              {' '}
              Reddit Programmer Humor
            </a>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
