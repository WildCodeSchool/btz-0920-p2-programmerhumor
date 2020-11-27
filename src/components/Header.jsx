import { useContext, useState } from 'react';
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
import { BiUserCircle } from 'react-icons/bi';
import { ToastContainer, toast, Slide } from 'react-toastify';
import PopUpSignIn from './PopUpSignIn';
import PopUpLogIn from './PopUpLogIn';
import UserContext from '../UserContext';

import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const { isConnected, setIsConnected, user } = useContext(UserContext);
  const logout = () => {
    toast('You have been logged out successfully, see you soon', {
      position: 'top-right',
      autoClose: 4000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      transition: Slide,
      className: 'toastSuccess',
    });
  };
  const handleClick = () => {
    toggle();
    setIsConnected(false);
    logout();
  };

  return (
    <div className="border-bottom w-100">
      <Navbar color="light" light expand="md">
        <NavbarBrand tag={Link} to="/">
          <FontAwesomeIcon icon={faRedditAlien} size="4x" color="#fe4602" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          {!isConnected ? (
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
                  <DropdownItem onClick={handleClick}>Log out</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Night mode</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          ) : (
            <Nav className="mr-auto" navbar>
              <NavItem className="d-flex align-items-center mt-2 color-darkGrey">
                <BiUserCircle size="2rem" /> {user.U}
              </NavItem>
              <UncontrolledDropdown
                direction="right"
                className="m-3"
                nav
                inNavbar
              >
                <DropdownToggle className="pt-3 color-darkGrey" nav caret>
                  {' '}
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem onClick={handleClick}>Log out</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Night mode</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          )}
          <ToastContainer />
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
